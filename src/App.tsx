import React from "react";
import Router from "./containers/Router";

interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  return (
    <div className="generalContaner">
      <Router />
    </div>
  );
};

export default App;
