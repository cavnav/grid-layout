import React from "react";
export const CellItems = ({ headers, items, children = null }) =>
  // items.map((item, ind) => <div>{item.text}</div>);
  layout(items, headers);

function layout([item1, item2, item3, item4, item5], headers) {
  let layout1 = {
    display: "grid",
    gridTemplateAreas: `'one three' 'two three'`
  };

  item4 = null;
  item5 = null;

  let one = { gridArea: "one" };
  let two = { gridArea: "two" };
  let three = { gridArea: "three" };
  let four = { gridArea: "four" };
  let five = { gridArea: "five" };

  return (
    <div style={layout1}>
      {item1 && (
        <div style={one}>{layoutOne({ item: item1, header: headers[1] })}</div>
      )}
      {item2 && <div style={two}>{item2.text}</div>}
      {item3 && <div style={three}>{item3.text}</div>}
      {item4 && <div style={four}>{item4.text}</div>}
      {item5 && <div style={five}>{item5.text}</div>}
    </div>
  );
}

function layoutOne({ item, header }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>{header.text.type}</div>
      <div>{item.text}</div>
    </div>
  );
}

function getActiveLayout({ itemPos, layouts }) {
  let layoutMapToDigits = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5
  };

  let layoutsDistinctDigits = Object.keys(layouts).reduce(
    (res, key) =>
      (res[key] = Object.keys(
        layouts[key]
          .replace(/"/g, "")
          .split(" ") // [one, two, _, _, _, three, tree]
          .filter(i => i) // Убрать лишние пробелы.
          .map(item => layoutMapToDigits[item]) // [1,2,3,3].
          .reduce((res, dig) => (res[dig] = 1) && res, {}) // Убрать повторяющиеся значения. {1:1, 2:1, 3:1}
      ).join("")) && res, // 123
    {}
  );

  // {1: 4, 2: 3}
  let layoutsRelevance = Object.keys(layoutsDistinctDigits)
    .filter(key => layoutsDistinctDigits[key].length === itemsPos.length) // Сравнить количество позиций шаблона с количеством позиций в данных.
    .reduce(
      (res, key) => (res[key] = -layoutsDistinctDigits[key].length) && res,
      {}
    );

  itemsPos.map(dig =>
    Object.keys(layoutsRelevance).map(
      key => (layoutsRelevance[key] += layoutsDistinctDigits[key].includes(dig))
    )
  );

  let activeLayout =
    layouts[
      Object.keys(layoutsRelevance).reduce((key, nextKey) =>
        layoutsRelevance[key] < layoutsRelevance[nextKey] ? nextKey : key
      )
    ];

  return activeLayout;
}
