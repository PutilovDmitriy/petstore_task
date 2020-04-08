import { Status } from "./../types/Order";

interface statusList {
  id: Status;
  name: "Размещен" | "Одобрен" | "Доставлен";
}

const list: statusList[] = [
  {
    id: "placed",
    name: "Размещен",
  },
  {
    id: "approved",
    name: "Одобрен",
  },
  {
    id: "delivered",
    name: "Доставлен",
  },
];

export default list;
