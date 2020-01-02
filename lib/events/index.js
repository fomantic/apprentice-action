"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// self
var issues_1 = __importDefault(require("./issues"));
var pull_requests_1 = __importDefault(require("./pull_requests"));
function runEventHandler(tools) {
    var eventName = tools.context.event;
    switch (eventName) {
        case 'issues':
        case 'issue_comment':
            issues_1.default(tools);
            break;
        case 'pull_request':
        case 'pull_request_review':
            pull_requests_1.default(tools);
            break;
        default:
            tools.exit.failure("No event handler for '" + eventName + "'");
    }
}
exports.default = runEventHandler;
