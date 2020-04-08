import * as React from "react";
import ReactLoading from "react-loading";

interface ILoadingProps {}

const Loading: React.FunctionComponent<ILoadingProps> = ({}) => {
  return (
    <ReactLoading
      type="bubbles"
      color={"#42a5f5"}
      height={"30%"}
      width={"30%"}
      className="loadingOrder"
    />
  );
};

export default Loading;
