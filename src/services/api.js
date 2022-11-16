/**
 * @format
 */
import axios from "axios";
export default class Api {
  _api = null;

  static init = ({ url }) => {
    try {
      this._api = axios.create({
        baseURL: url,
        timeout: 10000,
      });
    } catch (error) {
      return error;
    }
  };

  static getList = async () => {
    try {
      const response = await this._api.get(`/all-users`);
      return response;
    } catch (error) {
      return error.response;
    }
  };

  static addUser = async (data) => {
    try {
      const response = await this._api.post(`/register`, data);
      return response;
    } catch (error) {
      return error.response;
    }
  };

  static updateUser = async (data) => {
    try {
      const response = await this._api.post(`/register`, data);
      return response;
    } catch (error) {
      return error.response;
    }
  };

  static daleteUser = async (data) => {
    try {
      const response = await this._api.get(`/delete/${data.id}`);
      return response;
    } catch (error) {
      return error.response;
    }
  };
}
