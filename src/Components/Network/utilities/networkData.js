import Card from "../../UI/Information/Card/Card";
import Popover from "../../UI/Information/Popover/Popover";
import { ReactComponent as Server } from "../../../assets/svg/server.svg";
import { ReactComponent as Switch } from "../../../assets/svg/switch.svg";
import { ReactComponent as Router } from "../../../assets/svg/wirelessRouter.svg";
import { ReactComponent as Modem } from "../../../assets/svg/modem.svg";
import { ReactComponent as NetworkServer } from "../../../assets/svg/networkServer.svg";

const iconSwitch = <Popover
  title="Switch"
  pn="SW001"
  description="Lorem ipsum dolor sit amet"
>
  <Switch />
</Popover>

const iconServer = <Popover
  title="Server"
  pn="SV001"
  description="Lorem ipsum dolor sit amet"
>
  <Server />
</Popover>

const iconRouter = <Popover
  title="Router"
  pn="RT001"
  description="Lorem ipsum dolor sit amet"
>
  <Router />
</Popover>

const iconModem = <Popover
  title="Modem"
  pn="MO001"
  description="Lorem ipsum dolor sit amet"
>
  <Modem />
</Popover>

const iconNetworkServer = <Popover
  title="Network server"
  pn="SV002"
  description="Lorem ipsum dolor sit amet"
>
  <NetworkServer />
</Popover>

const elements = [
  {
    id: '1',
    data: { label: <Card icon={iconSwitch} title="Switch" ip="192.168.1.1" /> },
    position: { x: 150, y: 100 },
  },

  {
    id: '2',
    data: { label: <Card icon={iconServer} title="Server" ip="192.168.1.2" /> },
    position: { x: 200, y: 300 },
  },
  {
    id: '3',
    data: { label: <Card icon={iconRouter} title="Router" ip="192.168.1.3" /> },
    position: { x: 400, y: 100 },
  },
  {
    id: '4',
    data: { label: <Card icon={iconModem} title="Modem" ip="192.168.1.4" /> },
    position: { x: 500, y: 300 },
  },
  {
    id: '5',
    data: { label: <Card icon={iconNetworkServer} title="Network server" ip="192.168.1.5" /> },
    position: { x: 650, y: 100 },
  },
  { id: 'a', source: '1', target: '2', animated: true },
  { id: 'b', source: '2', target: '3', animated: true },
  { id: 'c', source: '3', target: '4', animated: true },
  { id: 'd', source: '4', target: '5', animated: true },
];

export default elements;