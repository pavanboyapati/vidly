import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class Table extends Component {
  render() {
    const { columns, data, sortedColumn, onSort } = this.props;
    return (
      <table className="table table-bordered">
        <TableHeader
          columns={columns}
          sortedColumn={sortedColumn}
          onSort={sortedColumn => onSort(sortedColumn)}
        />
        <TableBody columns={columns} data={data} />
      </table>
    );
  }
}

export default Table;
