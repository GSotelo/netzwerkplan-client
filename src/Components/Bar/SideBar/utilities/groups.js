import Popover from "../../../UI/Information/Popover/Popover";
import { ReactComponent as Database } from "../../../../assets/svg/database.svg";
import { ReactComponent as DesktopPC } from "../../../../assets/svg/pc.svg";
import { ReactComponent as Firewall } from "../../../../assets/svg/firewall.svg";
import { ReactComponent as Laptop } from "../../../../assets/svg/laptop.svg";
import { ReactComponent as Modem } from "../../../../assets/svg/modem.svg";
import { ReactComponent as NetworkServer } from "../../../../assets/svg/networkServer.svg";
import { ReactComponent as Printer } from "../../../../assets/svg/printer.svg";
import { ReactComponent as Router } from "../../../../assets/svg/wirelessRouter.svg";
import { ReactComponent as Server } from "../../../../assets/svg/server.svg";
import { ReactComponent as Switch } from "../../../../assets/svg/switch.svg";
import { ReactComponent as Tablet } from "../../../../assets/svg/tablet.svg";

import Line from "../../../UI/Line/Line";



/*
* Network device icons
*/

const database = (
  <Popover
    title="Database"
    pn="DB001"
    description="Database"
  >
    <Database />
  </Popover>
);

const desktopPC = (
  <Popover
    title="Desktop computer"
    pn="PC001"
    description="Desktop computer"
  >
    <DesktopPC />
  </Popover>
);

const firewall = (
  <Popover
    title="Firewall"
    pn="FW001"
    description="Firewall protection"
  >
    <Firewall />
  </Popover>
);

const laptop = (
  <Popover
    title="Laptop"
    pn="LP001"
    description="Laptop"
  >
    <Laptop />
  </Popover>
);

const modem = (
  <Popover
    title="Modem"
    pn="MD001"
    description="Modem"
  >
    <Modem />
  </Popover>
);

const networkSwitch = (
  <Popover
    title="Switch"
    pn="SW001"
    description="Network switch"
  >
    <Switch />
  </Popover>
);

const networkServer = (
  <Popover
    title="Network server"
    pn="SV002"
    description="Network server"
  >
    <NetworkServer />
  </Popover>
);

const printer = (
  <Popover
    title="Printer"
    pn="PT001"
    description="Printer LGX"
  >
    <Printer />
  </Popover>
);

const server = (
  <Popover
    title="Server"
    pn="SV001"
    description="Server"
  >
    <Server />
  </Popover>
);

const tablet = (
  <Popover
    title="Tablet"
    pn="TB001"
    description="Personal tablet"
  >
    <Tablet />
  </Popover>
);

const wirelessRouter = (
  <Popover
    title="Wireless router"
    pn="RT001"
    description="WLAN wireless router"
  >
    <Router />
  </Popover>
);

/*
* Network connections icons
*/

const connection1 = (
  <Popover
    title="Line 1"
    description="Line 1"
  >
    <Line color="#86a315"/>
  </Popover>
);
const connection2 = (
  <Popover
    title="Line 2"
    description="Line 2"
  >
    <Line color="#6f1c75"/>
  </Popover>
);

const connection3 = (
  <Popover
    title="Line 3"
    description="Line 3"
  >
    <Line color="#00aade"/>
  </Popover>
);

const connection4 = (
  <Popover
    title="Line 4"
    description="Line 4"
  >
    <Line color="#eeab00"/>
  </Popover>
);

const connection5 = (
  <Popover
    title="Line 5"
    description="Line 5"
  >
    <Line color="#028a0c"/>
  </Popover>
);

const connection6 = (
  <Popover
    title="Line 6"
    description="Line 6"
  >
    <Line color="#c50030"/>
  </Popover>
);

const connection7 = (
  <Popover
    title="Line 7"
    description="Line 7"
  >
    <Line color="#33475b"/>
  </Popover>
);

const connection8 = (
  <Popover
    title="Line 8"
    description="Line 8"
  >
    <Line color="#33475b"/>
  </Popover>
);

const connection9 = (
  <Popover
    title="Line 9"
    description="Line 9"
  >
    <Line color="#ee7402"/>
  </Popover>
);
const connection10 = (
  <Popover
    title="Line 10"
    description="Line 10"
  >
    <Line color="#ffca2c"/>
  </Popover>
);

const connection11 = (
  <Popover
    title="Line 11"
    description="Line 11"
  >
    <Line color="#c2c7cb"/>
  </Popover>
);

const connection12 = (
  <Popover
    title="Line 12"
    description="Line 12"
  >
    <Line color="#005293" />
  </Popover>
);

export const deviceGroups = [
  [desktopPC, database, server],
  [firewall, wirelessRouter, networkSwitch],
  [modem, laptop, networkServer],
  [printer, tablet, server]
];

export const connectorGroups = [
  [connection1, connection2, connection3],
  [connection4, connection5, connection6],
  [connection7, connection8, connection9],
  [connection10, connection11, connection12]
];

