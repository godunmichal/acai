import Axios from "axios";
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

export const listServers = () => async (dispatch) => {
  dispatch({ type: SERVER_LIST_REQUEST });
  try {
    const { data } = await Axios.get("/servers");
    dispatch({ type: SERVER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SERVER_LIST_FAIL, payload: error.message });
  }
};
export const detailsServer = (serverId) => async (dispatch) => {
  dispatch({ type: SERVER_DETAILS_REQUEST, payload: serverId });
  try {
    const { data } = await Axios.get(`/servers/${serverId}`);
    dispatch({ type: SERVER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SERVER_DETAILS_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const onServer = (serverId) => async (dispatch) => {
  dispatch({ type: SERVER_ON_REQUEST, payload: serverId });
  try {
    const { data } = await Axios.put(`/servers/${serverId}/on`);
    dispatch({ type: SERVER_ON_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SERVER_ON_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const offServer = (serverId) => async (dispatch) => {
  dispatch({ type: SERVER_OFF_REQUEST, payload: serverId });
  try {
    const { data } = await Axios.put(`/servers/${serverId}/off`);
    dispatch({ type: SERVER_OFF_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SERVER_OFF_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const rebootServer = (serverId) => async (dispatch) => {
  dispatch({ type: SERVER_REBOOT_REQUEST, payload: serverId });
  try {
    const { data } = await Axios.put(`/servers/${serverId}/reboot`);
    dispatch({ type: SERVER_REBOOT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SERVER_REBOOT_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
