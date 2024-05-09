const dev = {
  API_ENDPOINT_URL: "http://localhost:8080",
  MEDIA_ENDPOINT_URL: "", 
 CLIENT_ID:'xHHqmMBVyUoqPvH8bJBeZnnb1MFCmWzR',
 DOMAIN_ID:'dev-ceffpcgty5q0173w.us.auth0.com',
};

const prod = {
  API_ENDPOINT_URL: "",
  MEDIA_ENDPOINT_URL: "",
  CLIENT_ID:'xHHqmMBVyUoqPvH8bJBeZnnb1MFCmWzR',
  DOMAIN_ID:'dev-ceffpcgty5q0173w.us.auth0.com',
};

const NODE_ENV = "development";


const getEnv = () => {
  switch (NODE_ENV) {
    case "development":
      return dev;
    case "production":
      return prod;
    default:
      break;
  }
  
};

export const env = getEnv();
