import {
  SERVER_LIST_FAIL,
  SERVER_LIST_REQUEST,
  SERVER_LIST_SUCCESS,
  SERVER_OFF_FAIL,
  SERVER_OFF_REQUEST,
  SERVER_OFF_SUCCESS,
  SERVER_ON_FAIL,
  SERVER_ON_REQUEST,
  SERVER_ON_SUCCESS,
  SERVER_REBOOT_FAIL,
  SERVER_REBOOT_REQUEST,
  SERVER_REBOOT_SUCCESS,
  SERVER_DETAILS_REQUEST,
  SERVER_DETAILS_SUCCESS,
  SERVER_DETAILS_FAIL,
} from "../constants/serverConstants";

export const serverListReducer = (
  state = { loading: true, servers: [] },
  action
) => {
  switch (action.type) {
    case SERVER_LIST_REQUEST:
      return { loading: true };
    case SERVER_LIST_SUCCESS:
      return { loading: false, servers: action.payload };
    case SERVER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const serverDetailsReducer = (
  state = { loading: true, server: {} },
  action
) => {
  switch (action.type) {
    case SERVER_DETAILS_REQUEST:
      return { loading: true };
    case SERVER_DETAILS_SUCCESS:
      return { loading: false, server: action.payload };
    case SERVER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const serverOnUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SERVER_ON_REQUEST:
      return { loading: true };
    case SERVER_ON_SUCCESS:
      return { loading: false, success: true };
    case SERVER_ON_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const serverOffUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SERVER_OFF_REQUEST:
      return { loading: true };
    case SERVER_OFF_SUCCESS:
      return { loading: false, success: true };
    case SERVER_OFF_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const serverRebootUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SERVER_REBOOT_REQUEST:
      return { loading: true };
    case SERVER_REBOOT_SUCCESS:
      return { loading: false, success: true };
    case SERVER_REBOOT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
