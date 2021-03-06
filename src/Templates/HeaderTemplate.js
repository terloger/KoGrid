﻿kg.templates.generateHeaderTemplate = function (options) {
    var b = new kg.utils.StringBuilder(),
        cols = options.columns,
        showFilter = options.showFilter;

    utils.forEach(cols, function (col, i) {
        if (col.field === '__kg_selected__') {
            b.append('<div class="kgSelectionCell" data-bind="kgHeader: { value: \'{0}\' } ">', col.field);
            b.append('  <input type="checkbox" data-bind="checked: $parent.toggleSelectAll, visible: $parent.config.isMultiSelect"/>');
            b.append('</div>');
        } else if (col.field === 'rowIndex' && showFilter) {
            b.append('<div data-bind="kgHeader: { value: \'{0}\' } ">', col.field);
            b.append('  <div class="kgFilterContainer">');
            b.append('      <div class="kgFilterBtn openBtn" data-bind="click: $parent.showFilter_Click">');
            b.append('      </div>');
            b.append('  </div>');
            b.append('  <div class="kgFilterContainer" data-bind="visible: $data.filterVisible"  style="display: none;">');
            b.append('      <div class="kgFilterBtn clearBtn" data-bind="click: $parent.clearFilter_Click">');
            b.append('      </div>');
            b.append('  </div>');
            b.append('</div>');
        } else {
            b.append('<div data-bind="kgHeader: { value: \'{0}\' } ">', col.field);
            b.append('</div>');
        }
    });

    return b.toString();
};