import React, { Component } from "react";

class TableHeader extends Component {
  onRiseSort(path, sortedColumn) {
    if (path === sortedColumn.path) {
      sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortedColumn.order = "asc";
      sortedColumn.path = path;
    }
    this.props.onSort(sortedColumn);
  }
  renderSortIcon = (path, sortedColumn) => {
    if (path !== sortedColumn.path) return null;
    return (
      <i
        style={{ color: "#007bff" }}
        className={`fa fa-sort-${sortedColumn.order} pull-right`}
      />
    );
  };
  render() {
    const { columns, sortedColumn } = this.props;
    return (
      <thead>
        <tr>
          {columns.map(column => (
            <th
              className="clickable"
              onClick={() => this.onRiseSort(column.path, sortedColumn)}
              key={column.columnLabel || column.key}
            >
              {column.columnLabel}
              {this.renderSortIcon(column.path, sortedColumn)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
