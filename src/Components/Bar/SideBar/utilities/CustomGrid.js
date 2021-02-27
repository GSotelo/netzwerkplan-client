import React from "react";
import Grid from "../../../UI/Containers/Grid/Grid";
import { deviceGroups, connectorGroups } from "./groups";

export const DeviceGrid = () => {
  return (
    <Grid title="Hardware" groups={deviceGroups} />
  );
};

export const ConnectorGrid = () => {
  return (
    <Grid title="Links" groups={connectorGroups} />
  );
};

