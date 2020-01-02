"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// self
var opened_1 = __importDefault(require("./opened"));
var comment_1 = __importDefault(require("./comment"));
function run(tools) {
    var eventName = tools.context.event;
    var eventAction = tools.context.action;
    switch (eventAction) {
        case 'opened':
            opened_1.default(tools);
            break;
        case 'comment':
            comment_1.default(tools);
            break;
        default:
            tools.exit.failure("No event action handler for '" + eventName + "/" + eventAction + "'");
    }
}
exports.default = run;
