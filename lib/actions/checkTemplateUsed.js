"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var marked = __importStar(require("marked"));
function check(type, tools) {
    if (type === 'issue')
        return checkIssue(tools);
    else if (type === 'pr')
        return checkPr(tools);
}
exports.default = check;
function checkIssue(tools) {
    var _a;
    var body = (_a = tools.context.payload.issue) === null || _a === void 0 ? void 0 : _a.body;
    var parsedBody = marked.lexer(body || '');
    tools.log.info(JSON.stringify(parsedBody));
}
exports.checkIssue = checkIssue;
function checkPr(tools) {
    var _a;
    var body = (_a = tools.context.payload.pull_request) === null || _a === void 0 ? void 0 : _a.body;
    var parsedBody = marked.lexer(body || '');
    tools.log.info(JSON.stringify(parsedBody));
}
exports.checkPr = checkPr;
