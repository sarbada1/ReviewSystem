declare module 'reactjs-social-login' {
    export type objectType = {
      [key: string]: any;
    };
  
    export type IResolveParams = {
      provider: string;
      data?: objectType;
    };
  
    export { default as LoginSocialFacebook } from './LoginSocialFacebook';

  }
  