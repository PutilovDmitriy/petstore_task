import * as React from "react";
import { ModalData } from "../types/Pet";

interface IModalWindowProps {
  data: ModalData | null;
  modalClose: () => void;
  handleModalSend: () => void;
  quantity: number | undefined;
  handleEdit: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalWindow: React.FunctionComponent<IModalWindowProps> = ({
  data,
  modalClose,
  handleModalSend,
  quantity,
  handleEdit,
}) => {
  const [isValid, setValid] = React.useState(true);

  const handleValid = () => {
    quantity === undefined ? setValid(false) : setValid(true);
  };

  return data !== null ? (
    <div className="modalOverlay">
      <div className="modal">
        <span className="textRow">
          <h1>Категория:&nbsp;</h1>
          <h1>{data.cName}</h1>
        </span>
        <span className="textRow">
          <h2>Имя питомца:&nbsp;</h2>
          <h2>{data.name}</h2>
        </span>
        <label>Количество</label>
        <input
          min={1}
          type="number"
          value={quantity}
          onChange={handleEdit}
          onKeyUp={handleValid}
          placeholder="Количество"
        />
        <span className="buttonSaveAndEdit">
          <button
            className={isValid ? "edit" : ""}
            onClick={handleModalSend}
            disabled={!isValid}
          >
            Заказать
          </button>
          <button className="remove" onClick={modalClose}>
            Отменить
          </button>
        </span>
      </div>
    </div>
  ) : (
    <h1>В данный момент товар заказать нельзя</h1>
  );
};

export default ModalWindow;
