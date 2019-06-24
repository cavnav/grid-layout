import React from "react";
import GridLayout from "react-grid-layout";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import "./styles.css";
import { GridConstructor } from "./GridConstructor";

const layout = [
  // Строки.
  { i: "_", x: 0, y: 0, w: 1, h: 1 },
  { i: "copa", x: 1, y: 1, w: 1, h: 1 },
  { i: "copass", x: 2, y: 1, w: 1, h: 1 },
  { i: "chkd", x: 3, y: 1, w: 1, h: 1 },
  { i: "npl", x: 4, y: 1, w: 1, h: 1 },
  { i: "fot", x: 5, y: 1, w: 1, h: 1 },

  // Столбцы.
  { i: "kb", x: 0, y: 1, w: 1, h: 2 },
  { i: "yrkm", x: 0, y: 1, w: 1, h: 2 },
  { i: "ksb", x: 0, y: 1, w: 1, h: 1 },
  { i: "rgs", x: 0, y: 1, w: 1, h: 1 },
  { i: "mmb", x: 0, y: 1, w: 1, h: 1 },

  // Подвал.
  { i: "chkdcib", x: 1, y: 5, w: 1, h: 1 },
  { i: "newcli", x: 0, y: 1, w: 1, h: 1 },

  // Данные.
  { i: "d11", x: 1, y: 1, w: 0.5, h: 1 },
  { i: "d12", x: 1.5, y: 1, w: 0.5, h: 1 },
  { i: "d21", x: 1, y: 2, w: 0.5, h: 1 },
  { i: "d22", x: 1.5, y: 2, w: 0.5, h: 1 },

  { i: "f11", x: 1, y: 1, w: 0.5, h: 1 },
  { i: "f12", x: 1, y: 1, w: 0.5, h: 1 },
  { i: "f21", x: 1.5, y: 2, w: 0.5, h: 2 }
];

export class Grid extends React.Component {
  render() {
    // {lg: layout1, md: layout2, ...}
    var layouts = { lg: layout };
    return (
      <div>
        {/* {lg: layout1, md: layout2, ...}
      {/* <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 5, md: 5, sm: 5, xs: 5, xxs: 2 }}
        width={1200}
        autoSize={true}
        rowHeight={30}
      >
        <div key="copa">СО РА</div>
        <div key="copass">СО Пассивы</div>
        <div key="chkd">ЧКД + ПФИ (с CIB)</div>
        <div key="npl">NPL 5-90</div>
        <div key="fot">ФОТ КБ</div>
      </ResponsiveGridLayout> */}

        <GridLayout
          className="layout"
          layout={layout}
          cols={6}
          width={1200}
          rowHeight={30}
        >
          <div>
            <div key="_" />
            <div key="copa" className="rowHeader">
              СО РА
            </div>
            <div key="copass" className="rowHeader">
              СО Пассивы
            </div>
            <div key="chkd" className="rowHeader">
              ЧКД + ПФИ (с CIB)
            </div>
            <div key="npl" className="rowHeader">
              NPL 5-90
            </div>
            <div key="fot" className="rowHeader">
              ФОТ КБ
            </div>

            <div key="kb" className="colHeader">
              КБ
            </div>
            <div key="yrkm" className="colHeader">
              УРКМ
            </div>
            <div key="ksb" className="colHeader">
              КСБ
            </div>
            <div key="rgs" className="colHeader">
              РГС
            </div>
            <div key="mmb" className="colHeader">
              ММБ
            </div>

            <div key="chkdcib">ЧКД CIB</div>
            <div key="newcli">Новые клиенты</div>

            <div key="d11" className="cellData">
              <div>Факт 21.05</div>
              <div>4 452 865 364</div>
            </div>
            <div key="d12" className="cellData">
              <div>Вып. БП</div>
              <div>102.50%</div>
            </div>
            <div key="d21" className="cellData">
              <div>План</div>
              <div>4 222 111 364</div>
            </div>
            <div key="d22" className="cellData">
              <div>Прогноз</div>
              <div>97.3%</div>
            </div>

            <div key="f11" className="cellData">
              <div>Факт 21.05</div>
              <div>4 452 865 364</div>
            </div>
            <div key="f12" className="cellData">
              <div>Вып. БП</div>
              <div>102.50%</div>
            </div>
            <div key="f21" className="cellData">
              <div>План</div>
              <div>4 222 111 364</div>
            </div>
          </div>
        </GridLayout>
      </div>
    );
  }
}
