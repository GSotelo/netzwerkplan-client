import React from "react";
import { Popover, Whisper } from 'rsuite';

const CustomPopover = ({ title, pn, description, ...props }) => {
  return (
    <Popover
      title={title}
      {...props}
    >
      {pn && <p>ID: {pn} </p>}
      <p>Description: {description} </p>
    </Popover>
  );
};

const CustomWhisper = ({ title, pn, description, ...props }) => {
  return (
    <Whisper
      placement="right"
      trigger="hover"
      speaker={
        <CustomPopover
          title={title}
          pn={pn}
          description={description}
        />
      }
    >
      {props.children}
    </Whisper>
  );
};

export default CustomWhisper;