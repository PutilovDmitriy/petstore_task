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
      <h2>{userInfo?.lastName ? userInfo.lastName : "Без фамилии"}</h2>
      <h2>{userInfo?.firstName ? userInfo.firstName : "Без имени"}</h2>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

export default Profile;
