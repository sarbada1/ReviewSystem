import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider } from '@auth0/auth0-react';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { env } from "./config/EnvironmentConfig.js";


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
       <Auth0Provider
  domain={env.DOMAIN_ID}
  clientId={env.CLIENT_ID}
>

          <App />
        
        </Auth0Provider>
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
