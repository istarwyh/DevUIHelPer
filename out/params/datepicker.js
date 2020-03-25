"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    cssClass: '|`string`|\'\'|可选，自定义class|',
    local: '|`string`|\'zh-CN\'|可选，时区|',
    showTime: '|`boolean`|false|可选，是否显示时分秒|',
    yearNumber: '|`number`|12|可选，下拉年份显示数量|',
    disabled: '|`boolean`|false|可选，禁用选择|',
    direnction: '|`\'up\'\|\'down\'`|\'down\'|可选，日期弹出方向|',
    dateConverter: '|`function`|DefaultDateConverter|可选，日期格式化、解析函数|',
    customViewTemplate: '|`tempalte`|-|可选，自定义快捷设置日期或自定义操作区内容，可以通过chooseDate(dateString:string)来设置日期	|',
    selectedDateChange: '|object|日期发生变化回调|',
    appendToBodyDirections: '|`Array<AppendToBodyDirection\|ConnectedPosition>`|`[\'rightDown\',\'leftDown\',\'rightUp\',\'leftUp\']`|方向数组优先采用数组里靠前的位置|',
    rightDown: '|相对于对齐对象显示在`右下`方向，即左对齐，显示在下方（注意右下是左对齐的）|',
    rightUp: '|相对于对齐对象显示在`右上`方向，即左对齐，显示在上方|',
    leftUp: '|相对于对齐对象显示在`左上`方向，即右对齐，显示在上方|',
    leftDown: '|相对于对齐对象显示在`左下`方向，即右对齐，显示在下方|',
    centerDown: '|相对于对齐对象显示在`居中下`方向，即居中对齐，显示在下方|',
    centerUp: '|相对于对齐对象显示在`居中上`方向，即居中对齐，显示在上方|',
};
//# sourceMappingURL=datepicker.js.map