import { useEffect, useState } from "react";
import {
  CHANGE_EDIT_EXP_SECTION,
  CHANGE_SHOW_MODAL,
  fetchProfile,
  GET_EXPERIENCE,
  ADD_CURRENT_EXP_DATA,
  ADD_EXPERIENCE,
} from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlinePencil, HiTrash } from "react-icons/hi";
import { IoMdArrowBack } from "react-icons/io";
import ExperienceModal from "./ExperienceModal";
import { useParams } from "react-router-dom";
import { format, parse, parseISO } from "date-fns";
import { expActions } from "../redux/reducers/userExp/expSlice";
import { deleteSingleExperience } from "../redux/reducers/userExp/experiences";
import { getCurrentUser } from "../redux/reducers/auth/userAuthActions";

const Experience = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  // const experiences = useSelector((state) => state.experience.expData);
  const experiences = props.experiences;
  const showModal = useSelector((state) => state.exp.showAddExpModal);
  const currentUser = useSelector((state) => state.auth.userInfo);
  const selectedProfile = useSelector((state) => state.users.selectedProfile);
  const currentProfile =
    params.userId === currentUser._id ? currentUser : selectedProfile;
  const currentExpData = useSelector((state) => state.exp.currentExpData);
  const editExpSection = useSelector((state) => state.exp.showEditExpSection);
  const isMyProfile =
    currentUser && selectedProfile && currentUser._id === selectedProfile._id;

  return (
    <div className="experience-section ">
      <div className="d-flex experience-subsection">
        <h3 className="activity-title fs-20 fw-700 d-block d-flex align-items-center">
          {editExpSection && (
            <span>
              <button className="experience-buttons">
                <IoMdArrowBack
                  className="experience-buttons-icon"
                  onClick={() => {
                    dispatch({
                      type: CHANGE_EDIT_EXP_SECTION,
                      payload: !editExpSection,
                    });
                  }}
                />
              </button>
            </span>
          )}
          Experience
        </h3>
        {/* this gets displayed when on user page */}
        <div>
          {isMyProfile && (
            <>
              <button
                className="experience-buttons"
                onClick={() => {
                  dispatch(expActions.showAddExpModal());
                }}
              >
                <HiOutlinePlus className="experience-buttons-icon" />
              </button>
              {!editExpSection && (
                <button className="experience-buttons">
                  <HiOutlinePencil
                    className="experience-buttons-icon"
                    onClick={() => {
                      dispatch({
                        type: CHANGE_EDIT_EXP_SECTION,
                        payload: !editExpSection,
                      });
                    }}
                  />
                </button>
              )}
            </>
          )}

          <ExperienceModal
            currentProfile={props.currentProfile}
            currentExpData={currentExpData}
            show={showModal}
            onHide={() => {
              dispatch(expActions.hideAddExpModal());
              dispatch({
                type: ADD_CURRENT_EXP_DATA,
                payload: null,
              });
            }}
          />
        </div>
        {/* end here */}
      </div>
      {experiences.map((experience) => (
        <div
          className="experience-content d-flex justify-content-between"
          key={experience._id}
        >
          {/* <div className="experience-logo">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_200_200/0/1647618816994?e=1678924800&v=beta&t=odzOEdC0guAqvuVCim8HVjfOOqC4KwNoQmSMZQ69EPg"
              alt=""
            />
          </div> */}
          <div>
            <p className="fs-16 fw-800">{experience.role}</p>
            <p className="fs-14">{experience.company}</p>
            <span className="fs-14 ld-grey">
              from{" "}
              {experience.startDate &&
                experience.startDate !== null &&
                format(parseISO(experience.startDate), "yyyy-MM-dd")}
            </span>
            <span className="fs-14 ld-grey"> until </span>
            <span className="fs-14 ld-grey">
              {experience.endDate &&
                experience.endDate !== null &&
                format(parseISO(experience.endDate), "yyyy-MM-dd")}
            </span>
            <p className="fs-14 ld-grey">{experience.area}</p>
          </div>{" "}
          {editExpSection && (
            <div>
              <button className="experience-buttons">
                <HiTrash
                  onClick={() => {
                    dispatch(
                      deleteSingleExperience({
                        userId: currentProfile._id,
                        expId: experience._id,
                      })
                    );
                    console.log(
                      `We want to delete the experience with id: ${experience._id} and completeEndpoint ${currentProfile._id}/experiences/${experience._id}`
                    );
                    dispatch(getCurrentUser(currentProfile._id));
                  }}
                  className="experience-buttons-icon"
                />
              </button>
              <button className="experience-buttons">
                <HiOutlinePencil
                  className="experience-buttons-icon"
                  onClick={() => {
                    dispatch({ type: CHANGE_SHOW_MODAL, payload: true });
                    dispatch({
                      type: ADD_CURRENT_EXP_DATA,
                      payload: experience,
                    });
                  }}
                />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience;
