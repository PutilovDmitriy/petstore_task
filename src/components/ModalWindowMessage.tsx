import * as React from "react";

interface IModalWindowMessageProps {
  text: string;
  order?: boolean;
}

const ModalWindowMessage: React.FunctionComponent<IModalWindowMessageProps> = ({
  text,
  order,
}) => {
  return (
    <div className="modalOverlay">
      <div className="modalMessage">
        <h1>{text}</h1>
        {order && <h2>Отследить ваш заказ можнно во вкладке "Заказ"</h2>}
      </div>
    </div>
  );
};

export default ModalWindowMessage;
