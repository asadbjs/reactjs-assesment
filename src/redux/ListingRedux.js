import Api from "../services/api";
import NotificationService from "../services/notification-service";

const types = {
  FETCH_USERS_SUCCESS: "FETCH_USERS_SUCCESS",

  SUBMIT_USER_FORM_SUCCESS: "SUBMIT_USER_FORM_SUCCESS",

  DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",

  UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",

  ADD_FORM: "ADD_FORM",
  CLEAR_FORM: "CLEAR_FORM",
};
export const actions = {
  fetchList: async (dispatch, data) => {
    const json = await Api.getList(data);
    dispatch({
      type: types.FETCH_USERS_SUCCESS,
      data: json.data,
    });
    return json;
  },

  addUserForm: async (dispatch, data) => {
    const json = await Api.addUser(data.userData);
    if (json !== undefined) {
      if (200 === json.status) {
        NotificationService.success("User added successfully.");
        dispatch({
          type: types.SUBMIT_USER_FORM_SUCCESS,
          data: json.data,
        });
      } else {
        NotificationService.error("Something went wrong.");
      }
    } else {
      NotificationService.error("Something went wrong.");
    }
    return json;
  },

  updateUserForm: async (dispatch, data) => {
    const json = await Api.updateUser(data);
    if (json !== undefined) {
      if (200 === json.status) {
        NotificationService.success("User updated successfully.");
        dispatch({
          type: types.UPDATE_USER_SUCCESS,
          data: json.data,
        });
      } else {
        NotificationService.error("Something went wrong.");
      }
    } else {
      NotificationService.error("Something went wrong.");
    }
    return json;
  },

  daleteUserList: async (dispatch, data) => {
    const json = await Api.daleteUser(data);
    // console.log(json, "json");
    if (json !== undefined) {
      if (200 === json.status) {
        NotificationService.success("User deleted successfully.");
        dispatch({
          type: types.DELETE_USER_SUCCESS,
          data: json.data,
        });
      } else {
        NotificationService.error("Something went wrong.");
      }
    } else {
      NotificationService.error("Something went wrong.");
    }
    return json;
  },

  addForm: (data) => {
    return { type: types.ADD_FORM, data };
  },

  clearForm: () => {
    return { type: types.CLEAR_FORM };
  },
};

const initialState = {
  data: {},
  form: {},
  error: "",
  list: {
    data: [],
  },
};

export const reducer = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case types.FETCH_USERS_SUCCESS: {
      return {
        ...state,
        list: {
          ...state.list,
          data: data.data.authUser,
        },
      };
    }

    case types.SUBMIT_USER_FORM_SUCCESS: {
      const list = data.data.authUser;
      console.log(list, "-------");
      return {
        ...state,
        form: {},
        list: {
          ...state.list,
          data: [...(state.list.data || []), ...[list]],
        },
      };
    }

    case types.DELETE_USER_SUCCESS: {
      return {
        ...state,
        list: {
          ...state.list,
          data: state.list?.data.filter((i) => i.id != data.data.authUser.id),
        },
      };
    }

    case types.UPDATE_USER_SUCCESS: {
      const list = [...state.list.data];
      console.log(list, "-------");
      const index = state.list?.data.findIndex(
        (i) => i.id == data.data.authUser.id
      );
      if (index > -1) {
        list[index] = data.data.authUser;
      }
      return {
        ...state,
        form: {},
        list: {
          ...state.list,
          data: list,
        },
      };
    }

    case types.ADD_FORM: {
      return { ...state, form: data };
    }

    case types.CLEAR_FORM: {
      return {
        ...state,
        form: {},
      };
    }

    default:
      return state;
  }
};
