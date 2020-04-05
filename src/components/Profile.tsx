import React, { useContext } from "react";
import HomeContext from "../context/HomeContext";

interface ProfileProps {}

const Profile: React.FunctionComponent<ProfileProps> = (props) => {
  const { cancelAuthorization, userInfo } = useContext(HomeContext);

  const handleLogout = () => {
    cancelAuthorization && cancelAuthorization();
  };

  return (
    <div className="profile">
      <div>
        <h1>{`${userInfo?.lastName} ${userInfo?.firstName}`}</h1>
      </div>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

export default Profile;
