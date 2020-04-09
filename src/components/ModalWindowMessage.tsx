import * as React from "react";

interface IModalWindowMessageProps {
  text: string;
}

const ModalWindowMessage: React.FunctionComponent<IModalWindowMessageProps> = ({
  text,
}) => {
  return (
    <div className="modalOverlay">
      <div className="modalMessage">
        <h1>{text}</h1>
        <h2>Отследить ваш заказ можнно во вкладке "Заказ"</h2>
      </div>
    </div>
  );
};

export default ModalWindowMessage;
