import * as React from "react";
import HomeContext from "../context/HomeContext";
import { odjOrderInfo } from "../constants/creaters";
import ReactLoading from "react-loading";
import ShowOrder from "./OrderShow";
import OrderEdit from "./OrderEdit";
import { Status } from "types/Order";

interface OrdersProps {}

const Orders: React.FunctionComponent<OrdersProps> = (props) => {
  const {
    getOrder,
    orderInfo,
    loadingOrder,
    errorOrder,
    deleteOrder,
    updateOrder,
  } = React.useContext(HomeContext);

  const [orderId, setOrderId] = React.useState<number>(0);
  const [petId, setPetId] = React.useState<number | undefined>(0);
  const [quantity, setQuantity] = React.useState<number | undefined>(0);
  const [shipDate, setShipDate] = React.useState<string>("");
  const [status, setStatus] = React.useState<Status>("placed");
  const [complite, setComplite] = React.useState<boolean>(false);
  const [editMode, setEditMode] = React.useState(false);
  const [isValid, setValid] = React.useState(true);

  React.useEffect(() => {
    if (orderInfo !== null && orderInfo !== undefined) {
      setPetId(orderInfo?.petId);
      setQuantity(orderInfo?.quantity);
      setShipDate(orderInfo.shipDate.slice(0, 16));
      setStatus(orderInfo.status);
      setComplite(orderInfo.complete);
    }
  }, [orderInfo]);

  const onEditMode = () => setEditMode(true);
  const offEditMode = () => setEditMode(false);

  const handleComplite = () => setComplite(true);
  const handleUncomplite = () => setComplite(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "search":
        setOrderId(Number(event.target.value));
        break;
      case "petId":
        if (event.target.value) {
          setPetId(Number(event.target.value));
        }
        if (!event.target.value) {
          setPetId(undefined);
        }
        if (event.target.value === "0") {
          setPetId(1);
        }
        break;
      case "quantity":
        if (event.target.value) {
          setQuantity(Number(event.target.value));
        }
        if (!event.target.value) {
          setQuantity(undefined);
        }
        if (event.target.value === "0") {
          setQuantity(1);
        }
        break;
      case "shipDate":
        setShipDate(event.target.value);
        break;
      case "status":
        if (
          event.target.value == "placed" ||
          event.target.value == "approved" ||
          event.target.value == "delivered"
        ) {
          setStatus(event.target.value);
        }
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    getOrder && getOrder(orderId);
    event.preventDefault();
  };
  const handleUpdate = () => {
    if (
      updateOrder &&
      orderInfo !== undefined &&
      petId !== undefined &&
      quantity !== undefined
    )
      updateOrder(
        odjOrderInfo(orderId, petId, quantity, shipDate, status, complite)
      );
    offEditMode();
  };
  const handleDelete = () => {
    deleteOrder && deleteOrder(orderId);
  };

  const handleValid = () => {
    petId !== undefined && quantity !== undefined
      ? setValid(true)
      : setValid(false);
  };

  return (
    <div className="ordersBlock">
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            name="search"
            type="text"
            placeholder="Номер заказа"
            value={orderId ? orderId : ""}
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
            !editMode ? (
              <ShowOrder
                orderInfo={orderInfo}
                handleDelete={handleDelete}
                onEditMode={onEditMode}
              />
            ) : (
              <OrderEdit
                petId={petId}
                quantity={quantity}
                shipDate={shipDate}
                status={status}
                complite={complite}
                isValid={isValid}
                handleChange={handleChange}
                handleValid={handleValid}
                handleUpdate={handleUpdate}
                handleComplite={handleComplite}
                handleUncomplite={handleUncomplite}
              />
            )
          ) : (
            errorOrder == 404 && <h1>Заказ не найден</h1>
          )}
        </>
      )}
    </div>
  );
};

export default Orders;
