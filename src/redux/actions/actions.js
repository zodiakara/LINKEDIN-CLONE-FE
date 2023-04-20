export const ADD_ALL_POSTS = "ADD_ALL_POSTS";
export const CHANGE_SHOW_POST_MODAL = "CHANGE_SHOW_POST_MODAL";

export const ADD_ALL_PROFILES = "ADD_ALL_PROFILES";
export const ADD_CLICKED_PROFILE = "ADD_CLICKED_PROFILE";
export const ADD_MY_PROFILE = "ADD_MY_PROFILE";
export const CHANGE_SHOW_PROFILE_MODAL = "CHANGE_SHOW_PROFILE_MODAL";

export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const GET_EXPERIENCE_ERROR = "GET_EXPERIENCE_ERROR";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const CHANGE_SHOW_MODAL = "CHANGE_SHOW_MODAL";
export const CHANGE_EDIT_EXP_SECTION = "CHANGE_EDIT_EXP_SECTION";
export const ADD_CURRENT_EXP_DATA = "ADD_CURRENT_EXP_DATA";

export const CHANGE_CLICKED_SEARCH_STATUS = "CHANGE_CLICKED_SEARCH_STATUS";
export const ADD_SEARCH_RESULTS = "ADD_SEARCH_RESULTS";
export const ADD_QUERY = "ADD_QUERY";

export const fetchProfile = (endPoint, options, id, action) => {
  return async (dispatch) => {
    let response = await fetch(endPoint + id, options);
    try {
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        dispatch({
          type: action,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
