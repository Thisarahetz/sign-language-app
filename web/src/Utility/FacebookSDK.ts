// Define the structure for the Facebook SDK response objects
interface FBResponse {
  status: string;
  authResponse?: {
    accessToken: string;
    expiresIn: string;
    reauthorize_required_in: string;
    signedRequest: string;
    userID: string;
  };
}

interface FBInitParams {
  appId: string;
  cookie: boolean;
  xfbml: boolean;
  version: string;
}

// Declare the 'fbAsyncInit' property on the 'Window' interface
declare global {
  interface Window {
    fbAsyncInit?: () => void;
    FB: any; // Declare the 'FB' property on the 'Window' interface
  }
}

// Initialize the Facebook SDK
//   export const initFacebookSdk = (): Promise<void> => {
//     return new Promise<void>((resolve, reject) => {
//       // Load the Facebook SDK asynchronously
//       window.fbAsyncInit = () => {
//         window.FB.init({
//           appId: '421424200305191',
//           cookie: true,
//           xfbml: true,
//           version: 'v20.0'
//         } as FBInitParams);
//         // Resolve the promise when the SDK is loaded
//         resolve();
//       };
//     });
//   };

// Get the current Facebook login status
export const getFacebookLoginStatus = (): Promise<FBResponse> => {
  return new Promise<FBResponse>((resolve, reject) => {
    window.FB.getLoginStatus((response: FBResponse) => {
      resolve(response);
    });
  });
};

// Handle the Facebook login
export const fbLogin = (): Promise<FBResponse> => {
  return new Promise<FBResponse>((resolve, reject) => {
    window.FB.login(
      (response: FBResponse) => {
        resolve(response);
      },
     
    );
  });
};

//FB.api get fb_id email and name
export const getFacebookProfile = (): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    window.FB.api("/me", { fields: "id,name,email" }, (response: any) => {
      resolve(response);
    });
  });
};
