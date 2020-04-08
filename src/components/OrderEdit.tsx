import * as React from "react";
import { Status } from "types/Order";

interface IOrderEditProps {
  petId: number | undefined;
  quantity: number | undefined;
  shipDate: string;
  status: Status;
  complite: boolean;
  isValid: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleValid: () => void;
  handleUpdate: () => void;
  handleComplite: () => void;
  handleUncomplite: () => void;
}

const OrderEdit: React.FunctionComponent<IOrderEditProps> = ({
  petId,
  quantity,
  shipDate,
  status,
  complite,
  isValid,
  handleChange,
  handleValid,
  handleUpdate,
  handleComplite,
  handleUncomplite,
}) => {
  return (
    <div>
      <span className="textRow inputRow">
        <h2>Номер животного: &nbsp;</h2>
        <input
          min={1}
          type="number"
          name="petId"
          value={petId}
          onChange={handleChange}
          onKeyUp={handleValid}
        />
      </span>
      <span className="textRow inputRow">
        <h2>Дата доставки: &nbsp; </h2>
        <input
          type="datetime-local"
          name="shipDate"
          value={shipDate}
          onChange={handleChange}
        />
      </span>
      <span className="textRow inputRow">
        <h2>Колличество: &nbsp;</h2>
        <input
          min={1}
          type="number"
          name="quantity"
          value={quantity}
          onChange={handleChange}
          onKeyUp={handleValid}
        />
      </span>
      <span className="textRow radioRow">
        <h2>Cтатус доставки: &nbsp;</h2>
        <span className="radio">
          <input
            name="status"
            type="radio"
            value="placed"
            checked={status == "placed"}
            onChange={handleChange}
          />
          <label>Размещен</label>
        </span>
        <span className="radio">
          <input
            name="status"
            type="radio"
            value="approved"
            checked={status == "approved"}
            onChange={handleChange}
          />
          <label>Одобрен</label>
        </span>
        <span className="radio">
          <input
            name="status"
            type="radio"
            value="delivered"
            checked={status == "delivered"}
            onChange={handleChange}
          />
          <label>Доставлен</label>
        </span>
      </span>
      <span className="textRow buttonRow">
        <h2>Статус заказа: &nbsp; </h2>
        <span className="buttonGroup">
          <button
            onClick={handleComplite}
            className={complite ? "compliteOrder" : ""}
          >
            Завершен
          </button>
          <button
            onClick={handleUncomplite}
            className={!complite ? "uncompliteOrder" : ""}
          >
            Незавершен
          </button>
        </span>
      </span>
      <span className="buttonSaveEdit">
        <button className={isValid ? "buttonColor" : ""} onClick={handleUpdate}>
          Сохранить
        </button>
      </span>
    </div>
  );
};

export default OrderEdit;
