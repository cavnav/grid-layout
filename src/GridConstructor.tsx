import React from "react";
import GridLayout from "react-grid-layout";
import { data } from "./data";
import { CellItems } from "./CellItems";

import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import "./styles.css";

export class GridConstructor extends React.Component {
  state = this.getInitState(data);

  render() {
    let { cols, rows, colNum, layout, headers } = this.state;
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={colNum}
        width={1200}
        rowHeight={90}
      >
        {this.getRows({ rows, cols, headers })}
      </GridLayout>
    );
  }

  getRows = ({ rows, cols, headers }) => [
    // Получить заголовки столбцов.
    ...Object.keys(cols).map(colId => (
      <div key={colId}>{cols[colId].name}</div>
    )),

    ...Object.keys(rows).map(rowId => {
      let cellWithRowCode = <div key={rowId}>{rowId}</div>;
      // Получить ячейки.
      return [
        cellWithRowCode,
        ...rows[rowId].map(cell => (
          <div key={cell.key}>
            <CellItems headers={headers} items={cell.items} />
          </div>
        ))
      ];
    })
  ];

  getInitState(data) {
    let layout = []; // Все строки, кроме заголовков столбцов.
    let rows = {};
    let cols = data.HeaderRows.reduce(
      (res, val, ind) =>
        (res[val.text.name.toLowerCase().replace(/\s/g, "")] = {
          name: val.text.name,
          numItems: ind + 1
        }) && res,
      {
        _: {
          name: "",
          numItems: 0
        }
      }
    ); // {сора: 5, сопассивы: 10}

    data.Rows.map((row, rowNum) => {
      let rowId = (row.slice(0, 1)[0] || { text: "" }).text
        .toLowerCase()
        .replace(/\s/g, "");
      rows[rowId] = [];
      layout = [...layout, { i: rowId, x: 0, y: rowNum + 1, w: 1, h: 1 }];

      // Получить ячейки и их layout.
      let rowData = row.slice(1);
      Object.keys(cols)
        .slice(1)
        .reduce((colStartAt, colId, colNum) => {
          let key = `${rowId}:${colId}`;
          let cell = {
            key,
            items: rowData.slice(colStartAt, cols[colId].numItems)
          };
          rows[rowId] = [...rows[rowId], cell];

          layout.push({ i: key, x: colNum + 1, y: rowNum + 1, w: 1, h: 1 });

          return (colStartAt = cols[colId].numItems);
        }, 0);
    });

    let colHeadersLayout = Object.keys(cols).reduce(
      (res, colId, colNum) =>
        (res = [...res, { i: colId, x: colNum, y: 0, w: 1, h: 1 }]) && res,
      []
    );

    return {
      layout: [...colHeadersLayout, ...layout],
      cols,
      colNum: Object.keys(cols).length,
      rows,
      headers: data.HeaderRows
    };
  }
}
