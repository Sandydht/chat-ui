import { createContext, ReactNode, useContext } from "react";
import { useHistory } from "react-router-dom";
import { PAGE } from "../constants/page.constants";
import {
  LoginAccountRequest,
  LoginAccountResponse,
  LogoutAccountResponse,
  RegisterAccountRequest,
  RegisterAccountResponse
} from "../models/auth-service.models";
import { loginAccount, logoutAccount, registerAccount } from "../services/authentication.services";
import { clearItemFromLocalStorage, setItemToLocalStorage } from "../services/local-storage.services";
import { LOCAL_STORAGE_SERVICE } from "../constants/local-storage-service.constants";

export interface AuthContextType {
  handleRegisterAccount: (payload: RegisterAccountRequest) => Promise<RegisterAccountResponse>;
  handleLoginAccount: (payload: LoginAccountRequest) => Promise<LoginAccountResponse>;
  handleLogoutAccount: () => Promise<LogoutAccountResponse>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const history = useHistory();

  const handleRegisterAccount = async (payload: RegisterAccountRequest): Promise<RegisterAccountResponse> => {
    try {
      const response = await registerAccount(payload);
      if (response.status == 'OK' && response.access_token) {
        setItemToLocalStorage(LOCAL_STORAGE_SERVICE.ACCESS_TOKEN, response.access_token);
        history.push(PAGE.HOME);
      }

      return response;
    } catch (error) {
      throw error;
    }
  };

  const handleLoginAccount = async (payload: LoginAccountRequest): Promise<LoginAccountResponse> => {
    try {
      const response = await loginAccount(payload);
      if (response.status == 'OK' && response.access_token) {
        setItemToLocalStorage(LOCAL_STORAGE_SERVICE.ACCESS_TOKEN, response.access_token);
        history.push(PAGE.HOME);
      }

      return response;
    } catch (error) {
      throw error;
    }
  };

  const handleLogoutAccount = async (): Promise<LogoutAccountResponse> => {
    try {
      const response = await logoutAccount();
      if (response.status == 'OK') {
        clearItemFromLocalStorage();
        history.replace(PAGE.LOGIN);
      }

      return response;
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <AuthContext.Provider value={{ handleRegisterAccount, handleLoginAccount, handleLogoutAccount }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}