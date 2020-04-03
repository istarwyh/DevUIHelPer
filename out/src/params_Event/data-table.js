"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    multiSort: '|【可选】多列选择数组，用来指导那几列会被排序|`SortEventArg`[]|[]|',
    resizeable: '|【可选】是否可以拖拽调整列宽|`boolean`|--|',
    detailTemplateRef: '|【可选】用来自定义详情页的模板|`TemplateRef`|--|',
    timeout: '|【可选】同时绑定单击、双击事件时，用于区分点击的时间间隔,默认300ms，两个事件不同时使用可以指定为0|`number`|300|',
    headerExpandConfig: '|【可选】配置header下的额外内容|`TableExpandConfig`|--|',
    checkableRelation: '|【可选】配置树形表格的父子选中是否互相关联upward：选中子关联父downward：选中父关联子|`CheckableRelation`|--|',
    loadChildrenTable: '|【可选】展开子表格的回调，用于异步加载子表格|`Promise`|--|',
    loadAllChildrenTable: '|【可选】表头展开所有子表格的回调，用于异步加载所有子表格|`Promise`|--|',
    multiSortChange: '|多列选择Change事件，用来更新多列选择数组|`SortEventArg[]`|--|',
    cellClick: '|表格单元格点击事件|`CellSelectedEventArg`|--|',
    cellDBClick: '|表格单元格双击事件|`CellSelectedEventArg`|--|',
    rowClick: '|表格行点击事件|`RowSelectedEventArg`|--|',
    rowDBClick: '|表格行双击事件|`RowSelectedEventArg`|--|',
    detialToggle: '|扩展行展开收起事件|`ExpandConfig`|--|',
    cellEditStart: '|表格单元格开始编辑事件|`CellSelectedEventArg`|--|',
    cellEditEnd: '|表格单元格结束编辑事件|`CellSelectedEventArg`|--|',
    rowCheckChange: '|某行的勾选状态变化事件|`RowCheckChangeEventArg`|--|',
    checkAllChange: '|当前页码全勾选状态变化事件|`boolean`|--|',
    pageIndexChange: '|页码变化事件|`{pageIndex,pageSize}`|--|',
    resize: '|列宽变化事件|`DataTableColumnTmplComponent`|--|',
    editable: '|【可选】在d-column上指定该列是否可编辑|`boolean`|false',
    tableLevel: '|【可选】当前表格层级,在树形表格场景下自增长|`number`|0',
    fieldType: '|【可选】单元格类型|`string`|text',
    minWidth: '|【可选】最小宽度|`string`|--',
    field: '|该列字段|`string`|--',
    header: '|该列表头文字|`string`|--',
    sortable: '|【可选】是否可排序|`boolean`|--',
    width: '|宽度|`stringpx、%`|--',
    nestedColumn: '|【可选】指定该列作为树形表格的操作列，即有展开\折叠按钮和内容缩进表明层级关系|`Boolean`|false',
    extraOptions: '|【可选】主要配置单元格编辑时编辑组件的inputs|`any{}`|--' + '\n' +
        '.editableTip|【可选】可编辑提示，\'btn\'表示鼠标悬浮单元格出现编辑按钮，未配置时鼠标悬浮单元格背景色变化|`string`|--' + '\n' +
        '.iconFoldTable|【可选】自动定义树形表格的折叠图标|`Template`|--' + '\n' +
        '.iconUnFoldTable|【可选】自动定义树形表格的展开图标|`Template`|--' + '\n' +
        '.showHeadTableToggler|【可选】树形表格是否在header出现展开\折叠图标|`boolean`|false',
    order: '|【可选】列序号|`number`|Number.MAX_VALUE',
    filterable: '|【可选】是否可筛选|`boolean`|--',
    filterList: '|传入需要操作的筛选列表，当filterable为true时必选|`array`|--',
    filterMultiple: '|【可选】选择筛选列表为多选或单选,true为多选，false为单选|`boolean`|true',
    customFilterTemplate: '|【可选】表格过滤弹出框的自定义模板，参考DOC下‘自定义过滤弹出框’使用|`TemplateRef`|--',
    beforeFilter: '|【可选】表格过滤弹出框弹出前的回调函数，返回false可阻止弹框弹出|`function、Promise、Observable`|--',
    filterChange: '|确认筛选回调事件，返回选中的筛选数组|`FilterConfig[]`|--',
};
//# sourceMappingURL=data-table.js.map