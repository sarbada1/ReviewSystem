const dev = {
  API_ENDPOINT_URL: "http://localhost:8080",
  MEDIA_ENDPOINT_URL: "",
};

const prod = {
  API_ENDPOINT_URL: "",
  MEDIA_ENDPOINT_URL: "",
};

const NODE_ENV = "development";
const REACT_APP_FB_APP_ID='779131100856874';
const REACT_APP_GG_APP_ID='214562830543-ansop247kn34gotphasuh29poq5jdrob.apps.googleusercontent.com';


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
