import { useAuth } from "../context";
import { useState } from "react";
import { baseUrl, apiKey } from "../utils/services";
import services from "../utils/services";
import { useNavigate } from "react-router-dom";
const useAccess = () => {
  const navigate = useNavigate();
  const { login, userData, logout, accessToken } = useAuth();
  const [isLoading, setIsLoading] = useState(null);
  const { postRequest } = services();

  const generatePassword = async (values) => {
    try {
      setIsLoading(true);
      console.log(values);
      const response = await postRequest(
        `${baseUrl}/generate-password`,
        JSON.stringify(values)
      );
      if (response)
        if (response?.code == "200") {
          const { user, tokens } = response.metadata;
          login(tokens, user);
        } else return response.message;
    } catch (e) {
      return "Có lỗi xảy ra khi kết nối tới máy chủ.";
    } finally {
      setIsLoading(false);
    }
  };
  const loginUserWithGoogle = async (values) => {
    try {
      setIsLoading(true);
      const response = await postRequest(
        `${baseUrl}/login/google`,
        JSON.stringify(values)
      );
      if (response)
        if (response?.code == "200") {
          const { user, tokens } = response.metadata;
          login(tokens, user);
        } else if (
          response.code == "404" &&
          response.message == "Password not initialized"
        ) {
          return response;
        } else return "Có lỗi xảy ra khi kết nối tới máy chủ.";
      return null;
    } catch (e) {
      return "Có lỗi xảy ra khi kết nối tới máy chủ.";
    } finally {
      setIsLoading(false);
    }
  };
  const loginUser = async (values) => {
    try {
      setIsLoading(true);
      const response = await postRequest(
        `${baseUrl}/login`,
        JSON.stringify(values),
        apiKey
      );
      if (response)
        if (response?.code == "200") {
          const { user, tokens } = response.metadata;
          login(tokens, user);
        } else {
          return response?.message;
        }
      else return "Có lỗi xảy ra khi kết nối tới máy chủ.";
      return null;
    } catch (e) {
      return "Có lỗi xảy ra khi kết nối tới máy chủ.";
    } finally {
      setIsLoading(false);
    }
  };
  const signUp = async (values) => {
    try {
      setIsLoading(true);
      const response = await postRequest(
        `${baseUrl}/signup`,
        JSON.stringify(values),
        apiKey
      );
      if (response)
        if (response?.code == "201") {
          const { user, tokens } = response.metadata;
          login(tokens, user);
        } else {
          return response.message;
        }
      else return "Có lỗi xảy ra khi kết nối tới máy chủ.";
      return null;
    } catch (e) {
      return "Có lỗi xảy ra khi kết nối tới máy chủ.";
    } finally {
      setIsLoading(false);
    }
  };

  const logoutUser = async () => {
    try {
      setIsLoading(true);
      const response = await postRequest(
        `${baseUrl}/logout`,
        null,
        apiKey,
        accessToken,
        userData._id
      );
      if (response)
        if (response?.code == "200") {
          logout();
          return response.message;
        } else {
          return response.message;
        }
      else return "Có lỗi xảy ra khi kết nối tới máy chủ.";
    } catch (e) {
      return "Có lỗi xảy ra khi kết nối tới máy chủ.";
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    loginUser,
    signUp,
    logoutUser,
    loginUserWithGoogle,
    generatePassword,
  };
};

export default useAccess;
