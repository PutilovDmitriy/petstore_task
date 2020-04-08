import * as React from "react";
import { OrderInfo } from "../types/Order";
import { dateFormat } from "../constants/creaters";
import statusList from "../constants/statusList";

interface ShowOrderProps {
  orderInfo?: OrderInfo | null;
  handleDelete: () => void;
  onEditMode: () => void;
}

const ShowOrder: React.FunctionComponent<ShowOrderProps> = ({
  orderInfo,
  handleDelete,
  onEditMode,
}) => {
  return (
    <div>
      <span className="textRow">
        <h2>Номер заказа: &nbsp;</h2>
        <p>{orderInfo?.id}</p>
      </span>
      <span className="textRow">
        <h2>Дата доставки: &nbsp; </h2>
        <p>{dateFormat(orderInfo?.shipDate, "dd.mm.yy")}</p>
      </span>
      <span className="textRow">
        <h2>Колличество: &nbsp;</h2>
        <p>{orderInfo?.quantity}</p>
      </span>
      <span className="textRow">
        <h2>Cтатус доставки: &nbsp;</h2>
        <p>{statusList.find((item) => item.id == orderInfo?.status)?.name}</p>
      </span>

      <span className="textRow">
        <h2>Cтатус: &nbsp;</h2>
        <p>{orderInfo?.complete ? "Заказ завершен" : "Заказ не завершен"}</p>
      </span>
      <span className="buttonSaveAndEdit">
        <button className="edit" onClick={onEditMode}>
          Изменить заказ
        </button>
        <button className="remove" onClick={handleDelete}>
          Отменить заказ
        </button>
      </span>
    </div>
  );
};

export default ShowOrder;
