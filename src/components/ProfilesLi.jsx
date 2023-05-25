import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GreyBorderBtn from "./GreyBorderBtn";
import { getCurrentUser } from "../redux/reducers/auth/userAuthActions";

const ProfilesLi = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = props.profile._id;

  return (
    <li className="sidebarLi d-flex">
      <div className="pt-3">
        <div className="xs-profiles fs-12 d-flex align-items-center text-center">
          <img
            className="xs-profiles pointer"
            src={props.profile.avatar}
            alt="mini-profile-pics"
            onClick={() => {
              navigate(`/profile/${props.profile._id}`);
              dispatch(getCurrentUser(userId));
            }}
          />
        </div>
      </div>

      <ul className="ml-3">
        <li className="pt-3">
          <span
            className="fw-bold pointer"
            onClick={() => {
              navigate(`/profile/${props.profile._id}`);
              dispatch(getCurrentUser(userId));
            }}
          >
            {props.profile.name} {props.profile.surname} |{" "}
          </span>
          <span className="linkedin-d-grey">1st</span>
        </li>
        <li className="py-2 fs-14 linkedin-d-grey">{props.profile.title}</li>
        <li className="pb-3">
          <GreyBorderBtn icon={props.icon} content="Message" />
        </li>
      </ul>
    </li>
  );
};

export default ProfilesLi;
