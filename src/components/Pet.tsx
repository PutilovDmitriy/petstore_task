import * as React from "react";
import CartIcon from "./CartIcon";
import EditIcon from "./EditIcon";
import Carousel from "nuka-carousel";
import imgDefPet from "../../public/imgs/defaultPet.png";
import { ModalData, PetInfo } from "../types/Pet";
import HomeContext from "../context/HomeContext";
import { useHistory } from "react-router-dom";

interface IPetProps {
  info: PetInfo;
  modalOpen: (data: ModalData) => void;
  id: string;
  url: string[];
}

const Pet: React.FunctionComponent<IPetProps> = ({
  info,
  modalOpen,
  id,
  url,
}) => {
  const [colorIcon, setColorIcon] = React.useState("#ffffff");
  const [errored, setErrored] = React.useState(false);
  const [urls, setUrls] = React.useState<string[]>(["def"]);
  const history = useHistory();

  const { admin, addEditable } = React.useContext(HomeContext);

  React.useEffect(() => {
    url.length >= 1 && setUrls([...url]);
  }, [url]);

  const downColor = () => setColorIcon("#ff1744");
  const upColor = () => setColorIcon("#ffffff");

  const handleErrorSrc = () => {
    if (urls.length > 1) {
      setUrls([...urls.slice(1)]);
    }
    if (urls.length == 1 && !errored) {
      setUrls([imgDefPet]);
      setErrored(true);
    }
  };

  const handleClickOrder = () => {
    if (
      info.category.name !== undefined &&
      info.name !== undefined &&
      info !== undefined
    )
      modalOpen({
        id: id,
        cName: info.category.name,
        name: info.name,
        quantity: 0,
      });
  };

  const handleClickEdit = () => {
    addEditable && addEditable(info);
    history.push("/edit");
  };

  return (
    <div className="pet">
      <Carousel
        defaultControlsConfig={{
          nextButtonText: ">",
          prevButtonText: "<",
          pagingDotsStyle: {
            fill: "#сссссс",
          },
        }}
      >
        {urls.map((src, index) => {
          return (
            <img
              key={index}
              src={src}
              onError={handleErrorSrc}
              className="imgPet"
            />
          );
        })}
      </Carousel>
      <div className="footerPet">
        {info !== undefined ? (
          <span className="namePet">
            {info.category !== undefined && (
              <h3>
                {info.category.name !== undefined
                  ? info.category.name
                  : "Животное"}
              </h3>
            )}
            <h3>{info.name !== undefined ? info.name : "Name"}</h3>
          </span>
        ) : (
          <h3>Данные отсутсвуют</h3>
        )}
        {!admin ? (
          <span
            onClick={handleClickOrder}
            onMouseDown={downColor}
            onMouseUp={upColor}
          >
            <CartIcon color={colorIcon} />
          </span>
        ) : (
          <span
            onClick={handleClickEdit}
            onMouseDown={downColor}
            onMouseUp={upColor}
          >
            <EditIcon color={colorIcon} />
          </span>
        )}
      </div>
    </div>
  );
};

export default Pet;
