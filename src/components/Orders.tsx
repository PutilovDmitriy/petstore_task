import * as React from "react";
import HomeContext from "../context/HomeContext";
import { dateFormat } from "../constants/creaters";
import ReactLoading from "react-loading";

interface OrdersProps {}

const Orders: React.FunctionComponent<OrdersProps> = (props) => {
  const [orderId, setOrderId] = React.useState("");
  const {
    getOrder,
    orderInfo,
    loadingOrder,
    errorOrder,
    deleteOrder,
  } = React.useContext(HomeContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrderId(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    getOrder && getOrder(orderId);
    event.preventDefault();
  };

  const handleDelete = () => {
    deleteOrder && deleteOrder(orderId);
  };

  return (
    <div className="ordersBlock">
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Номер заказа"
            value={orderId}
            onChange={handleChange}
          ></input>
          <button type="submit">Найти</button>
        </form>
      </div>
      {loadingOrder ? (
        <ReactLoading
          type="spin"
          color={"red"}
          height={"30%"}
          width={"30%"}
          className="loadingOrder"
        />
      ) : (
        <>
          {orderInfo !== null ? (
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
                <p>{orderInfo?.complete ? "Доставлен" : "В пути"}</p>
              </span>
              <button onClick={handleDelete}>Отменить заказ</button>
            </div>
          ) : (
            errorOrder == 404 && <h1>Заказ не найден</h1>
          )}
        </>
      )}
    </div>
  );
};

export default Orders;
