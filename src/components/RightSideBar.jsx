import { Col, Container } from "react-bootstrap";
import EditLi from "./EditLi";
import ActionLi from "./ActionLi";
import ProfileAd from "./ProfileAd";
import ProfilesLi from "./ProfilesLi";
import CoursesLi from "./CoursesLi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ADD_ALL_PROFILES, fetchProfile } from "../redux/actions/actions";
import { getAllUsers } from "../redux/reducers/users/users";

const RightSideBar = () => {
  const messageIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      data-supported-dps="16x16"
      fill="currentColor"
      className="mercado-match"
      width="16"
      height="16"
      focusable="false"
    >
      <path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z"></path>
    </svg>
  );

  const dropdownIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      data-supported-dps="16x16"
      fill="currentColor"
      className="mercado-match"
      width="16"
      height="16"
      focusable="false"
    >
      <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
    </svg>
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const allProfiles = useSelector((state) => state.users.allProfiles);
  console.log(allProfiles);
  const currentUser = useSelector((state) => state.auth.userInfo);

  return (
    <Col className="d-flex flex-column align-items-end ">
      <ul className="sidebarUL mb-1">
        <EditLi text="Edit public profile & URL" />
        <EditLi text="Add profile in another language" />
      </ul>
      <ProfileAd />
      <ul className="sidebarUL profilesUL mb-0">
        <div className="fw-bold pt-3 fs-20">People also viewed</div>
        {allProfiles &&
          allProfiles
            .filter((user) => user._id === currentUser._id)
            .slice(0, 5)
            .map((profile) => (
              <ProfilesLi
                icon={messageIcon}
                profile={profile}
                key={profile._id}
              />
            ))}
      </ul>
      <ActionLi text="Show More" icon={dropdownIcon} />
      <ul className="sidebarUL profilesUL mb-0">
        <div className="fw-bold pt-3 fs-20">People you may know</div>
        {allProfiles
          .filter((user) => user._id === currentUser._id)
          .slice(0, 5)
          .map((profile) => (
            <ProfilesLi
              icon={messageIcon}
              profile={profile}
              key={profile._id}
            />
          ))}
      </ul>
      <ActionLi text="Show More" icon={dropdownIcon} />
      <div className="sidebarUL profilesUL mb-0 sticky">
        <div className="fw-bold pt-3 fs-20">
          <div className="d-flex align-items-center">
            <span className="linkedin-d-blue mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                data-supported-dps="14x14"
                fill="currentColor"
                className="mercado-match"
                width="14"
                height="14"
                focusable="false"
              >
                <g>
                  <path
                    className="background-mercado"
                    d="M14 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM4 5H2v7h2zm.25-2A1.27 1.27 0 003 1.8 1.27 1.27 0 001.75 3 1.27 1.27 0 003 4.2 1.27 1.27 0 004.25 3zM12 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 006.89 6V5H5v7h2V8.73A1.74 1.74 0 018.66 6.8C9.82 6.8 10 7.94 10 8.73V12h2z"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="fs-18">LEARNING</span>
          </div>
        </div>

        <CoursesLi
          imgSource="https://media-exp1.licdn.com/dms/image/C560DAQFo2QlNcSLQiQ/learning-public-crop_60_100/0/1629914140054?e=1671465600&amp;v=beta&amp;t=VpTBQKZtVZyxoSddJNiZ6huTp5KgVeupLuzPNQ4prwc"
          courseName="Creating Illustrative Design"
        />
        <CoursesLi
          imgSource="https://media-exp1.licdn.com/dms/image/C4E0DAQHQap8zLSQmXQ/learning-public-crop_60_100/0/1568062505669?e=1671465600&v=beta&t=keZZ9-BZiPFurB4N8qhbY-bLm2JaPkmtE-ylMZpjCgU"
          courseName="Grasshopper: Tips, Tricks, and Techniques"
        />
        <div className="mb-3">
          {" "}
          <CoursesLi
            imgSource="https://media-exp1.licdn.com/dms/image/C560DAQH6wUHzTQv7Kw/learning-public-crop_60_100/0/1591031927513?e=1671465600&v=beta&t=TzYQME62ph3FSi0X1_Hnpo_1CHM27JB5F4NKE_4N-Cg"
            courseName="SketchUp 2020 Essential Training"
          />
        </div>
      </div>
      <ActionLi text="See my recommendations" />
    </Col>
  );
};

export default RightSideBar;
