import * as puppeteer from 'puppeteer'
import {
    Page, ElementHandle
} from "puppeteer";

import * as fs from 'fs';

type TBuild = {
    headless: boolean,
    login: string,
    password: string
}

class VkRobot {

    constructor(page: Page, login: string, password: string) {
        this.page = page
        this.login = login
        this.password = password
    }

    private page: Page
    private readonly login: string
    private readonly password: string

    public static async build(options: TBuild) {
        const browser = await VkRobot.initBrowser(options)
        const page = await browser.newPage()
        await page.goto('https://vk.com/login')
        return new VkRobot(page, options.login, options.password)
    }

    public static async initBrowser(options: TBuild) {
        return await puppeteer.launch(options);
    }

    public async vkLogin() {
        const phone: ElementHandle | null = await this.page.$('input[id=email]')
        await phone?.type(this.login, {
            delay: 100
        })
        const password: ElementHandle | null = await this.page.$('input[id=pass]')
        await password?.type(this.password, {
            delay: 100
        })
        const login: ElementHandle | null = await this.page.$('button[id=login_button]')
        await login?.click()
        await this.page.waitForNavigation()
        return this
    }

    public async goToPeople(id: string) {
        await this.page.goto(`https://vk.com/${id}`)
        return this
    }

    public async closeAllModals() {
        const closeButtons: ElementHandle | null = await this.page.$('.box_x_button')
        await closeButtons?.click()
        return this
    }

    public async writeMessage(message: string) {
        const messageButton: ElementHandle | null = await this.page.$('#profile_message_send')
        await messageButton?.click()
        await this.page.waitForSelector('#mail_box_editable')
        const editor: ElementHandle | null = await this.page.$('#mail_box_editable')
        await editor?.type(message, {
            delay: 30
        })
        const sendButton: ElementHandle | null = await this.page.$('#mail_box_send')
        await sendButton?.click()
        return this
    }
}

(async () => {
    const options: TBuild = {
        headless: false,
        login: '89999999999',
        password: 'password'
    }
    const Robot: VkRobot = await VkRobot.build(options)
    await Robot.vkLogin()

    const ids: string[] = fs.readFileSync('ids.txt', {
        encoding: 'utf-8'
    }).split('\n')

    for (let i = 0; i < ids.length; i++) {
        const id: string = ids[i]
        await Robot.goToPeople(id)
        await Robot.closeAllModals()
        await Robot.writeMessage('Друзья мои, я вас люблю')
    }
})()