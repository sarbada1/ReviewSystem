import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider } from '@auth0/auth0-react';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ConfigProvider, theme } from "antd";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          theme={{
            // algorithm: theme.darkAlgorithm,
          }}
        >
           <Auth0Provider domain="dev-ceffpcgty5q0173w.us.auth0.com"
    clientId="xHHqmMBVyUoqPvH8bJBeZnnb1MFCmWzR"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
          <App />
          </Auth0Provider>

        </ConfigProvider>
      </QueryClientProvider>
    </React.StrictMode>

);
