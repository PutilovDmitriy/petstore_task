import * as React from "react";
import CartIcon from "./CartIcon";
import Carousel from "nuka-carousel";

interface IPetProps {}

const Pet: React.FunctionComponent<IPetProps> = (props) => {
  const [colorIcon, setColorIcon] = React.useState("#ffffff");
  const [errored, setErrored] = React.useState(false);
  const [src, setSrc] = React.useState("");

  const downColor = () => setColorIcon("#ff1744");
  const upColor = () => setColorIcon("#ffffff");

  const hendleErrorSrc = () => {
    if (!errored) {
      setSrc("../../public/imgs/defaultPet.png");
      setErrored(true);
    }
  };

  const handleClick = () => {};
  return (
    <div className="pet">
      <Carousel
        defaultControlsConfig={{
          nextButtonText: ">",
          prevButtonText: "<",
          pagingDotsStyle: {
            fill: "red",
          },
        }}
      >
        <img src={src} onError={hendleErrorSrc} className="imgPet" />
      </Carousel>
      <div className="footerPet">
        <h3>Животное</h3>
        <span onMouseDown={downColor} onMouseUp={upColor}>
          <CartIcon color={colorIcon} />
        </span>
      </div>
    </div>
  );
};

export default Pet;
