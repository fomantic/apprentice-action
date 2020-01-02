"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// npm
var actions_toolkit_1 = require("actions-toolkit");
// self
var events_1 = __importDefault(require("./events"));
var event = [
    'issues', 'issue_comment',
    'pull_request', 'pull_request_review'
];
actions_toolkit_1.Toolkit.run(events_1.default, { event: event });
