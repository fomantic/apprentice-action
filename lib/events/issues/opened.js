"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// self
var actions_1 = require("../../actions");
function run(tools) {
    actions_1.checkTemplateUsed('issue', tools);
}
exports.default = run;
