"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var puppeteer = require("puppeteer");
var fs = require("fs");
var VkRobot = /** @class */ (function () {
    function VkRobot(page, login, password) {
        this.page = page;
        this.login = login;
        this.password = password;
    }
    VkRobot.build = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var browser, page;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, VkRobot.initBrowser(options)];
                    case 1:
                        browser = _a.sent();
                        return [4 /*yield*/, browser.newPage()];
                    case 2:
                        page = _a.sent();
                        return [4 /*yield*/, page.goto('https://vk.com/login')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, new VkRobot(page, options.login, options.password)];
                }
            });
        });
    };
    VkRobot.initBrowser = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, puppeteer.launch(options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VkRobot.prototype.vkLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var phone, password, login;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.$('input[id=email]')];
                    case 1:
                        phone = _a.sent();
                        return [4 /*yield*/, (phone === null || phone === void 0 ? void 0 : phone.type(this.login, {
                                delay: 100
                            }))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.page.$('input[id=pass]')];
                    case 3:
                        password = _a.sent();
                        return [4 /*yield*/, (password === null || password === void 0 ? void 0 : password.type(this.password, {
                                delay: 100
                            }))];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.page.$('button[id=login_button]')];
                    case 5:
                        login = _a.sent();
                        return [4 /*yield*/, (login === null || login === void 0 ? void 0 : login.click())];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.page.waitForNavigation()];
                    case 7:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    VkRobot.prototype.goToPeople = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.goto("https://vk.com/" + id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    VkRobot.prototype.closeAllModals = function () {
        return __awaiter(this, void 0, void 0, function () {
            var closeButtons;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.$('.box_x_button')];
                    case 1:
                        closeButtons = _a.sent();
                        return [4 /*yield*/, (closeButtons === null || closeButtons === void 0 ? void 0 : closeButtons.click())];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    VkRobot.prototype.writeMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var messageButton, editor, sendButton;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.$('#profile_message_send')];
                    case 1:
                        messageButton = _a.sent();
                        return [4 /*yield*/, (messageButton === null || messageButton === void 0 ? void 0 : messageButton.click())];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.page.waitForSelector('#mail_box_editable')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.page.$('#mail_box_editable')];
                    case 4:
                        editor = _a.sent();
                        return [4 /*yield*/, (editor === null || editor === void 0 ? void 0 : editor.type(message, {
                                delay: 30
                            }))];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.page.$('#mail_box_send')];
                    case 6:
                        sendButton = _a.sent();
                        return [4 /*yield*/, (sendButton === null || sendButton === void 0 ? void 0 : sendButton.click())];
                    case 7:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    return VkRobot;
}());
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var options, Robot, ids, i, id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                options = {
                    headless: false,
                    login: '89999999999',
                    password: 'password'
                };
                return [4 /*yield*/, VkRobot.build(options)];
            case 1:
                Robot = _a.sent();
                return [4 /*yield*/, Robot.vkLogin()];
            case 2:
                _a.sent();
                ids = fs.readFileSync('ids.txt', {
                    encoding: 'utf-8'
                }).split('\n');
                i = 0;
                _a.label = 3;
            case 3:
                if (!(i < ids.length)) return [3 /*break*/, 8];
                id = ids[i];
                return [4 /*yield*/, Robot.goToPeople(id)];
            case 4:
                _a.sent();
                return [4 /*yield*/, Robot.closeAllModals()];
            case 5:
                _a.sent();
                return [4 /*yield*/, Robot.writeMessage('Друзья мои, я вас люблю')];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7:
                i++;
                return [3 /*break*/, 3];
            case 8: return [2 /*return*/];
        }
    });
}); })();
