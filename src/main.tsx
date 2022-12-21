import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider, UIProvider } from "./context";
import { MainRoutes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <UIProvider>
      <MainRoutes />
    </UIProvider>
  </AuthProvider>
);
