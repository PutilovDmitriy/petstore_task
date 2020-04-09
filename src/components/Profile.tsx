import React, { useContext } from "react";
import HomeContext from "../context/HomeContext";

interface ProfileProps {}

const Profile: React.FunctionComponent<ProfileProps> = () => {
  const { cancelAuthorization, userInfo } = useContext(HomeContext);

  const handleLogout = () => {
    cancelAuthorization && cancelAuthorization();
  };

  return (
    <div className="profile">
      <div>
        <h2>{userInfo?.lastName ? userInfo.lastName : "Иванов"}</h2>
        <h2>{userInfo?.firstName ? userInfo.firstName : "Иван"}</h2>
      </div>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

export default Profile;
