"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: '|`string`|tabs|可选，选项卡组的类型，可选`tabs`或`options`|',
    showContent: '|`boolean`|true|可选，是否显示选项卡对应的内容|',
    activeTab: '|`string`|--|可选，当前激活的选项卡，值为选项卡的id|',
    cssClass: '|`string`|--|可选，自定义选项卡组的css类|',
    customWidth: '|`string`|--|可选，自定义选项卡的宽度|',
    activeTabChange: '|`EventEmitter<number\|string>`|可选，选项卡切换的回调函数，返回当前激活选项卡的id|',
    tabId: '|`string`|--|选项卡的id值,需要设置为唯一值|',
    id: '|`number\|string`|--|一般和`tabId`一致|',
    title: '|`string`|--|选项卡的标题|',
    disabled: '|`boolean`|false|选项卡是否不可用|',
};
//# sourceMappingURL=tabs.js.map