import axios from "axios";

import { BASE_URL } from "../constants/constants";
import qs from "querystring";



export const getAction = async (filters) => {
    try {
      const query = qs.stringify(filters);
      let url = `${BASE_URL}/transport?${query}`;
      const { data } = await axios.get(url);
      return { success: true, data };
    } catch (error) {
      console.log(error);
      return {
        success: false,
      };
    }
  }

export const getTechnicalInspectionExpired = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/transport/ti`);
        return { success: true, data };
      } catch (error) {
        console.log(error);
        return {
          success: false,
        };
      }
    }

  export const getMstiExpired = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/transport/msti`);
        return { success: true, data };
      } catch (error) {
        console.log(error);
        return {
          success: false,
        };
      }
    }

  export const getTachographExpired = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/transport/tachograph`);
        return { success: true, data };
      } catch (error) {
        console.log(error);
        return {
          success: false,
        };
      }
    }



export const putAction =  async ({ sign, data }) => {
    try {
      console.log(data);
      await axios.put(`${BASE_URL}/transport/register-sign/${sign}`, data);
      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
      };
    }
  }


export const postAction =  async ({ data }) => {
      try {
        await axios.post(`${BASE_URL}/transport`, data);
        return { success: true };
      } catch (error) {
        console.log(error);
        return {
          success: false,
        };
      }
    }
  

export const deleteAction =  async ({ sign }) => {
    try {
      await axios.delete(`${BASE_URL}/transport/register-sign/${sign}`);
      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
      };
    }
  }

