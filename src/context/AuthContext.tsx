import { createContext, useEffect, useState } from "react";

//* services *//
import { checkingService, loginService, registerService } from "../services";

//* interfaces *//
import { IAuthState } from "../interfaces/IAuthState";
import { IUser } from "../interfaces/IUser";

//* CONTEXT *//
//* CONTEXT *//
interface AuthContextProps {
  user?: IUser;
  authState: IAuthState;
  onCheckingAuth(): void;
  onLogin(): void;
  onRegister(): void;
}

export const AuthContext = createContext({} as AuthContextProps);

//* PROVIDER *//
//* PROVIDER *//
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>();
  const [authState, setAuthState] = useState<IAuthState>("checking");

  useEffect(() => {
    onCheckingAuth();
  }, [authState]);

  const onCheckingAuth = () => {
    const result = checkingService();

    // actualizar authState y user
  };

  const onLogin = () => {
    const result = loginService();

    // actualizar authState y user
  };

  const onRegister = () => {
    const result = registerService();

    // actualizar authState y user
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authState,

        onCheckingAuth,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
