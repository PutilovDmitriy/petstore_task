import * as React from "react";
import Pet from "./Pet";
import HomeContext from "../context/HomeContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { PetInfo, ModalData } from "../types/Pet";
import Loading from "./Loading";
import ModalWindow from "./ModalWindow";
import { odjOrderInfo } from "../constants/creaters";
import ModalWindowMessage from "./ModalWindowMessage";

const getRandomInt = (): number => {
  return Math.floor(Math.random() * Math.floor(10)) + 1;
};

interface PetsProps {}

const Pets: React.FC<PetsProps> = () => {
  const { petData, addOrder } = React.useContext(HomeContext);

  const [data, setData] = React.useState<PetInfo[]>([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [start, setStart] = React.useState<number>(12);
  const [end, setEnd] = React.useState<number>(24);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalData, setModalData] = React.useState<ModalData | null>(null);
  const [quantity, setQuantity] = React.useState<number | undefined>(1);
  const [showMessage, setShowMessage] = React.useState(false);
  const [numberOrder, setNumberOrder] = React.useState(1);

  React.useEffect(() => {
    if (petData !== undefined) {
      setData([...petData.slice(0, 12)]);
    } else setData([]);
  }, [petData]);

  const modalOpen = (data: ModalData) => {
    setModalShow(true);
    setModalData(data);
  };
  const modalClose = () => {
    setModalShow(false);
    setModalData(null);
    setQuantity(1);
    setTimeout(() => {
      setShowMessage(false);
      setNumberOrder(1);
    }, 3000);
  };

  const handleEditModalQuantity = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value) {
      setQuantity(Number(event.target.value));
    }
    if (!event.target.value) {
      setQuantity(undefined);
    }
    if (event.target.value === "0") {
      setQuantity(1);
    }
  };

  const handleModalSend = () => {
    if (modalData !== null && quantity !== undefined) {
      console.log("отправляю");

      let order = getRandomInt();
      setNumberOrder(order);
      let today = new Date();
      today.setDate(today.getDate() + 10);
      addOrder &&
        addOrder(
          odjOrderInfo(
            order,
            Number(modalData.id),
            quantity,
            today.toISOString(),
            "placed",
            false
          )
        );
      modalClose();
      setShowMessage(true);
    }
  };

  const handleScroll = () => {
    if (petData !== undefined) {
      if (data.length >= petData?.length) {
        setHasMore(false);
        return;
      }
      setData([...data, ...petData.slice(start, end)]);
      setStart(end);
      setEnd(end + 12);
    }
  };

  return (
    <>
      {petData !== undefined ? (
        <InfiniteScroll
          className="infiniteScroll"
          dataLength={data.length}
          next={handleScroll}
          hasMore={hasMore}
          loader={<Loading />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>"Вау, вы посмотрели всех питомцев"</b>
            </p>
          }
        >
          <div className="pets">
            {data.length >= 1 &&
              data.map((data, index) => (
                <Pet
                  key={index}
                  id={String(data.id)}
                  info={data}
                  url={data.photoUrls}
                  modalOpen={modalOpen}
                />
              ))}
          </div>
        </InfiniteScroll>
      ) : (
        <h1>Пусто</h1>
      )}
      {modalShow && (
        <ModalWindow
          data={modalData}
          handleModalSend={handleModalSend}
          modalClose={modalClose}
          quantity={quantity}
          handleEdit={handleEditModalQuantity}
        />
      )}
      {showMessage && (
        <ModalWindowMessage
          text={`Номер вашего заказа ${numberOrder}`}
          order={true}
        />
      )}
    </>
  );
};

export default Pets;
