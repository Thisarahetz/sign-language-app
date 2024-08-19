import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { SignUpApiCall } from "../../Api/Services/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useUserStore from "../../Store";

export default function SignUp() {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    reenterpassword: "",
  });

  //mutation reactquray SignUpApiCall
  const signUpmutaion = useMutation({
    mutationFn: (values: any) => SignUpApiCall(values),
    onSuccess: (data: any) => {
      console.log(data);
      navigate('/dashboard');
      toast.success(data.message);

      setUser({
        success: true,
        data: {
          id: data.data.id,
          name: data.data.username,
        },
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  const signUp = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault(); 
    //check if password and reenterpassword are the same
    if (state.password !== state.reenterpassword) {
      toast.error("Password does not match");
      return;
    }


    signUpmutaion.mutateAsync({
      first_name: state.firstname,
      last_name: state.lastname,
      email: state.email,
      password: state.password,
    });
  }


 
  return (
    <main className="main-wrapper">
      <div
        data-barba-namespace="home"
        data-barba="container"
        className="page-content homepage"
      >
        <div className="section is-height-100vh">
          <div className="padding-global">
            <div className="container-medium">
              <div className="padding-section-medium">
                <div className="section_component is-signin">
                  <div className="form-wrapper">
                    <div className="header-wrapper">
                      <div className="text-size-large text-weight-semibold">
                        Sign Up
                      </div>
                    </div>
                    <div className="login-wrapper">
                      <div>
                        <div className="form_component is-sign-in">
                          <form className="form_form is-grid">
                            <div
                              id="w-node-bb27abd8-2b7f-624e-870b-72a354c1d2af-2109bf4a"
                              className="form_field-wrapper"
                            >
                              <label htmlFor="firstname" className="form_label">
                                First name
                              </label>
                              <input
                                id="w-node-bb27abd8-2b7f-624e-870b-72a354c1d2b2-2109bf4a"
                                type="text"
                                name="firstname"
                                placeholder="First name"
                                className="form_input"
                                value={state.firstname}
                                onChange={(e) =>
                                  setState({
                                    ...state,
                                    firstname: (e.target as HTMLInputElement)
                                      .value,
                                  })

                                }
                                
                              />
                            </div>
                            <div
                              id="w-node-ccc4e299-3a5d-ccde-193f-0460ecad0425-2109bf4a"
                              className="form_field-wrapper"
                            >
                              <label htmlFor="lastname" className="form_label">
                                Last name
                              </label>
                              <input
                                id="w-node-ccc4e299-3a5d-ccde-193f-0460ecad0428-2109bf4a"
                                type="text"
                                name="lastname"
                                placeholder="Last name"
                                className="form_input"
                                value={state.lastname}
                                onChange={(e) =>
                                  setState({
                                    ...state,
                                    lastname: (e.target as HTMLInputElement)
                                      .value,
                                  })
                                }
                              />
                            </div>
                            <div
                              id="w-node-_4f1eb827-3e92-b995-cafe-b0227e6b93ab-2109bf4a"
                              className="form_field-wrapper"
                            >
                              <label htmlFor="email" className="form_label">
                                Email
                              </label>
                              <input
                                id="w-node-_4f1eb827-3e92-b995-cafe-b0227e6b93ae-2109bf4a"
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form_input"
                                value={state.email}
                                onChange={(e) =>
                                  setState({
                                    ...state,
                                    email: (e.target as HTMLInputElement).value,
                                  })
                                }
                              />
                            </div>
                            <div
                              id="w-node-bb27abd8-2b7f-624e-870b-72a354c1d2b3-2109bf4a"
                              className="form_field-wrapper"
                            >
                              <label htmlFor="password" className="form_label">
                                Password
                              </label>
                              <input
                                id="w-node-bb27abd8-2b7f-624e-870b-72a354c1d2b6-2109bf4a"
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form_input"
                                value={state.password}
                                onChange={(e) =>
                                  setState({
                                    ...state,
                                    password: (e.target as HTMLInputElement)
                                      .value,
                                  })
                                }
                              />
                            </div>
                            <div
                              id="w-node-_80754c38-4b0e-ffa7-dd15-e01f368b4758-2109bf4a"
                              className="form_field-wrapper"
                            >
                              <label htmlFor="password" className="form_label">
                                Re-enter Password
                              </label>
                              <input
                                id="w-node-_80754c38-4b0e-ffa7-dd15-e01f368b475b-2109bf4a"
                                type="password"
                                name="reenterpassword"
                                placeholder="Re-enter password"
                                className="form_input"
                                value={state.reenterpassword}
                                onChange={(e) =>
                                  setState({
                                    ...state,
                                    reenterpassword: (
                                      e.target as HTMLInputElement
                                    ).value,
                                  })
                                }
                              />
                            </div>
                            <div
                              id="w-node-bb27abd8-2b7f-624e-870b-72a354c1d2bb-2109bf4a"
                              className="button-wrapper is-left"
                            >
                              {/* <button
                                id="w-node-bb27abd8-2b7f-624e-870b-72a354c1d2bc-2109bf4a"
                                type="submit"
                                className="button is-form"
                                value="Sign Up"
                                onClick={signUp}
                              /> */}
                              <button
                                id="w-node-bb27abd8-2b7f-624e-870b-72a354c1d2bc-2109bf4a"
                               
                                className="button is-form"
                             
                                onClick={signUp}
                              >
                                Sign Up
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div id="w-node-bb27abd8-2b7f-624e-870b-72a354c1d2bd-2109bf4a">
                        - Or -
                      </div>
                      <div className="buttons-wrapper">
                        <a
                          data-w-id="bb27abd8-2b7f-624e-870b-72a354c1d2c0"
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
                              <g clipPath="url(#clip0_301_8205)">
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
                          data-w-id="bb27abd8-2b7f-624e-870b-72a354c1d2c4"
                          href="#"
                          className="link-block is-social w-inline-block"
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
                        id="w-node-bb27abd8-2b7f-624e-870b-72a354c1d2c8-2109bf4a"
                        className="cta-wrapper"
                      >
                        <div>Already have an account?</div>
                        <a
                          href="#"
                          data-w-id="bb27abd8-2b7f-624e-870b-72a354c1d2cb"
                          className="sign-up_button w-inline-block"
                        >
                          <div>Sign Up</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
