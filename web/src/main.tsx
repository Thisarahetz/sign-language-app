import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Pages/Router";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="33072800591-hupaveevuhqhfg2mj56hqt11j1d72oe0.apps.googleusercontent.com">
  <React.StrictMode>
    <BrowserRouter>
      // Provide the client to your App
      <QueryClientProvider client={queryClient}>
      <Toaster
                closeButton
                duration={3000}
                richColors
                position="top-right"
              />
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
  </GoogleOAuthProvider>
);
