import React from "react";
import PropTypes from "prop-types";
const ListGroup = props => {
  const { items, selectedItem, textName, textValue, onItemSelect } = props;
  return (
    <div className="list-group">
      {items.map(item => (
        <a
          key={item[textValue] || item["key"]}
          className={
            selectedItem[textValue] === item[textValue]
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => onItemSelect(item)}
          style={{ cursor: "pointer" }}
        >
          {item[textName]}
        </a>
      ))}
    </div>
  );
};

ListGroup.defaultProps = {
  textName: "name",
  textValue: "_id"
};
ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  onItemSelect: PropTypes.func.isRequired
};
export default ListGroup;
