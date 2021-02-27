import React from "react";
import Dropdown from "rsuite/lib/Dropdown";
import Icon from "rsuite/lib/Icon";

import "./Dropdown.css"

const { Item } = Dropdown;

const CustomDropdown = ({ items, title }) => (
  <Dropdown title={title}>
    {
      items.map(item => (
        item.description !== "divider"
          ? <Item icon={<Icon icon={item.icon} />}>{item.description}</Item>
          : <Item divider />
      ))
    }
  </Dropdown>
);

export default CustomDropdown;
