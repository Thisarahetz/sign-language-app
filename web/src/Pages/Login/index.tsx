import { useEffect, useState } from "react";
import {
  fbLogin,
  getFacebookLoginStatus,
  getFacebookProfile,
} from "../../Utility/FacebookSDK";
import { useUserStore } from "../../Store";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { SignInApiCall } from "../../Api/Services/Auth";

export default function Login() {
  
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    getFacebookLoginStatus().then((response) => {
      if (response == null) {
        console.log("No login status for the person");
      } else {
        console.log(response);
      }
    });
  }, []);
  function login() {
    fbLogin().then((response) => {
      if (response.status === "connected") {
        getFacebookProfile().then((profile) => {
          console.log(profile);
          useUserStore.getState().setUser({
            success: true,
            data: {
              id: profile.id,
              name: profile.name,
            },
          });

          navigate("/dashboard");
        });
        console.log("Person is connected");
      } else {
        // something
      }
    });
  }

  const signIn = useMutation({
    mutationFn: (data: any) => SignInApiCall(data.email, data.password),
    onSuccess: (data) => {
      console.log(data);
      useUserStore.getState().setUser({
        success: true,
        data: {
          id: data.id,
          name: data.email
        },
      });
      navigate("/dashboard");
    },

    onError: (error) => {
      console.log(error);
    },
  });




  
  





  
  

  
  return (
    <div className="section is-height-100vh">
      <div className="padding-global">
        <div className="container-small">
          <div className="padding-section-medium">
            <div className="section_component is-signin">
              <div className="form-wrapper">
                <div className="header-wrapper">
                  <div className="text-size-large text-weight-semibold">
                    Sign In
                  </div>
                </div>
                <div className="login-wrapper">
                  <div>
                    <div className="form_component is-sign-in">
                      <form className="form_form">
                        <div
                          id="w-node-cef6fd50-ab24-7047-dbe2-617c323b4b7b-77be8be7"
                          className="form_field-wrapper"
                        >
                          <label htmlFor="email" className="form_label">
                            Email
                          </label>
                          <input
                            id="w-node-cef6fd50-ab24-7047-dbe2-617c323b4b7e-77be8be7"
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="form_input"
                            value={state.email}
                            onChange={(e) =>
                              setState({ ...state, email: e.target.value })
                            }
                            
                          />
                        </div>
                        <div
                          id="w-node-_6e9beaa3-4373-370b-d651-dfc1269126d0-77be8be7"
                          className="form_field-wrapper"
                        >
                          <label htmlFor="password" className="form_label">
                            Password
                          </label>
                          <input
                            id="w-node-_6e9beaa3-4373-370b-d651-dfc1269126d3-77be8be7"
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form_input"
                            value={state.password}
                            onChange={(e) =>
                              setState({ ...state, password: e.target.value })
                            }
                          />
                        </div>
                        <div className="form_field-wrapper is-right">
                          <a
                            href="#"
                            data-w-id="ac68d640-6ab6-0f7a-bbee-ecf68e2548b2"
                            className="text-link w-inline-block"
                          >
                            <div>Forgot password?</div>
                          </a>
                        </div>
                        <div
                          id="w-node-be264cfd-317d-b986-1fde-c5916904e9d3-77be8be7"
                          className="button-wrapper is-left"
                        >
                          <input
                            id="w-node-be264cfd-317d-b986-1fde-c5916904e9d4-77be8be7"
                            type="submit"
                            className="button is-form"
                            value="Sign In"
                            onClick={(e) => {
                              e.preventDefault();
                              signIn.mutate(state);
                              
                             
                            }}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div id="w-node-_42cf8c61-9fa4-4d60-6e00-090d8b3d5aa3-77be8be7">
                    - Or -
                  </div>
                  <div className="buttons-wrapper">
                    <a
                      data-w-id="42cf8c61-9fa4-4d60-6e00-090d8b3d5aaa"
                      href="#"
                      className="link-block is-social w-inline-block"
                    >
                      <div className="social-icon-2 w-embed">
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_301_8205)">
                            <path
                              d="M20.305 10.2302C20.305 9.55044 20.2499 8.86699 20.1323 8.19824H10.7V12.0491H16.1014C15.8773 13.291 15.1571 14.3897 14.1025 15.0878V17.5864H17.325C19.2173 15.8448 20.305 13.2726 20.305 10.2302Z"
                              fill="#4285F4"
                            ></path>
                            <path
                              d="M10.6999 20.0008C13.397 20.0008 15.6714 19.1152 17.3286 17.5867L14.1061 15.088C13.2096 15.698 12.0521 16.0434 10.7036 16.0434C8.09474 16.0434 5.88272 14.2833 5.08904 11.917H1.76367V14.4928C3.46127 17.8696 6.91892 20.0008 10.6999 20.0008Z"
                              fill="#34A853"
                            ></path>
                            <path
                              d="M5.0854 11.9172C4.66651 10.6753 4.66651 9.33044 5.0854 8.08848V5.5127H1.7637C0.345367 8.33834 0.345367 11.6674 1.7637 14.493L5.0854 11.9172Z"
                              fill="#FBBC04"
                            ></path>
                            <path
                              d="M10.6999 3.95805C12.1256 3.936 13.5035 4.47247 14.536 5.45722L17.3911 2.60218C15.5833 0.904587 13.1838 -0.0287217 10.6999 0.000673888C6.91892 0.000673888 3.46126 2.13185 1.76367 5.51234L5.08537 8.08813C5.87537 5.71811 8.09106 3.95805 10.6999 3.95805Z"
                              fill="#EA4335"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_301_8205">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="text-size-regular text-weight-medium">
                        Sign In with Gmail
                      </div>
                    </a>
                    <a
                      data-w-id="42cf8c61-9fa4-4d60-6e00-090d8b3d5ab0"
                      href="#"
                      className="link-block is-social w-inline-block"
                      onClick={login}
                    >
                      <div className="social-icon-2 w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
                            fill="rgba(10,102,194,1)"
                          ></path>
                        </svg>
                      </div>
                      <div className="text-size-regular text-weight-medium">
                        Facebook
                      </div>
                    </a>
                  </div>
                  <div
                    id="w-node-_42cf8c61-9fa4-4d60-6e00-090d8b3d5ab5-77be8be7"
                    className="cta-wrapper"
                  >
                    <div>Don&#x27;t have an account?</div>
                    <a
                      href="#"
                      data-w-id="42cf8c61-9fa4-4d60-6e00-090d8b3d5ab8"
                      className="sign-up_button w-inline-block"
                    >
                      <div data-w-id="42cf8c61-9fa4-4d60-6e00-090d8b3d5ab9">
                        Sign Up
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
