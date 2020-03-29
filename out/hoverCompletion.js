/*
 * @Author: your name
 * @Date: 2020-03-27 19:34:32
 * @LastEditTime: 2020-03-29 11:04:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DevUIHelper\src\hoverCompletion.ts
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const getName_1 = require("./util/getName");
const html_info_1 = require("./html_info");
const completionTriggerChars = [" ", "\n"];
const htmlSource = new html_info_1.CParams();
function provideCompletionItems(document, position) {
    const start = new vscode_1.Position(0, 0);
    const range = new vscode_1.Range(start, position);
    const text = document.getText(range);
    /* 减少检索范围，仅检索光标所在行 */
    // const line = document.lineAt(position);
    // const text = line.text.substring(0,position.character);
    // 不匹配import方式引入,因为使用devui的时候这两个不在一个文件当中
    // const importRegex = /import[\s\S]*from\s'@angular\/core'/g;
    //devui的使用以d-开头,如d-button.值得一提的是这个在正则表达式的测试中是null.        
    const componentRegex = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
    // console.log(componentRegex);// componentRegex是一个Object?
    if (componentRegex.test(text)) {
        // const params = components[_getName.getName(text,componentRegex)];
        const params = htmlSource.findElement(getName_1.getName(text, componentRegex));
        console.log(getName_1.getName(text, componentRegex));
        if (params) {
            const properties = params.getAttributes();
            // 回调函数循环将prop对应的details提取出来
            const completionItems = properties.map((prop) => {
                const completionItem = createAttritubeCompletionItems(prop);
                return completionItem;
            });
            return completionItems;
        }
        return [];
    }
    return [];
}
const TITLE = new vscode_1.MarkdownString("|&emsp;类型&emsp;|&emsp;默认&emsp;|&emsp;说明&emsp;");
function createAttritubeCompletionItems(prop) {
    /**
     *  CompletionItemKind用于决定提示项前面的icon图标，有多种类型，Class是其中一种
     *   https://code.visualstudio.com/docs/extensionAPI/vscode-api#CompletionItemKind
     */
    const completionItem = new vscode_1.CompletionItem(prop.getName(), prop.getcompletionKind());
    // params[prop]就是label对应的api细节部分
    completionItem.documentation = TITLE.appendCodeblock(prop.getDescription(), 'markdown');
    console.log(prop);
    if (prop.getcompletionKind() !== vscode_1.CompletionItemKind.Function) {
        completionItem.insertText = new vscode_1.SnippetString("[" + prop.getName() + "]=\"${1:}\"");
    }
    else {
        completionItem.insertText = new vscode_1.SnippetString("(" + prop.getName() + ")=\"${1:}\"");
    }
    completionItem.preselect = true;
    return completionItem;
}
const hoverCompletion = vscode_1.languages.registerCompletionItemProvider('html', { provideCompletionItems }, ...completionTriggerChars);
module.exports = function (context) {
    context.subscriptions.push(hoverCompletion);
};
//# sourceMappingURL=hoverCompletion.js.map