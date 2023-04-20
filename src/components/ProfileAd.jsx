import { useSelector } from "react-redux";
import BlueBorderBtn from "./BlueBorderBtn";

const ProfileAd = () => {
  const currentUser = useSelector((state) => state.auth.userInfo);

  return (
    <ul className="sidebarUL mb-1">
      <li className="pt-2 d-flex linkedin-black justify-content-end">
        <span className="fw-bold">Ad</span>
        <div className="ml-2 d-flex align-items-center">
          <img src="Vector.png" alt="" />
        </div>
      </li>
      <li className="pt-2 fs-14 text-center linkedin-d-grey">
        Get the latest jobs and industry news
      </li>
      <li className="pt-2 text-center d-flex justify-content-center align-items-center">
        <div>
          <img className="mini-profile" src={currentUser.avatar} alt="" />
        </div>
      </li>
      <li className="pt-3 text-center linkedin-d-grey">
        <span>{currentUser.name}</span>, you might like to follow{" "}
        <span className="fw-bold linkedin-d-grey">Fraport AG</span>
      </li>
      <li className="py-3 text-center">
        <BlueBorderBtn content="Follow" />
      </li>
    </ul>
  );
};

export default ProfileAd;
