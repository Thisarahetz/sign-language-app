interface SuccessMessageProps {
    message: string;
  }
  
  function ErrorMessage({ message }: SuccessMessageProps) {
    return (
      <div className="alert_msg_wrapper drop-in">
        <div className="alert_msc_body_error">
          <div className="alert_icon_wrapper">
            <div className="alert_icon_left w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  id="Path_26"
                  data-name="Path 26"
                  d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm0-2a8,8,0,1,0-8-8A8,8,0,0,0,12,20Zm0-9.414,2.828-2.828,1.414,1.414L13.414,12l2.828,2.828-1.414,1.414L12,13.414,9.172,16.243,7.757,14.828,10.586,12,7.757,9.172,9.172,7.757Z"
                  transform="translate(-2 -2)"
                  fill="#e52e2e"
                />
              </svg>
            </div>
          </div>
          <div className="alert_text_error">
            <div className="text_14 weight_500">{message}</div>
          </div>
          <div className="alert_close">
            <a href="#" className="link-block w-inline-block">
              <div className="alert_icon w-embed">
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L13.4142 14L17.7071 18.2929C18.0976 18.6834 18.0976 19.3166 17.7071 19.7071C17.3166 20.0976 16.6834 20.0976 16.2929 19.7071L12 15.4142L7.70711 19.7071C7.31658 20.0976 6.68342 20.0976 6.29289 19.7071C5.90237 19.3166 5.90237 18.6834 6.29289 18.2929L10.5858 14L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289Z"
                    fill="#E52E2E"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default ErrorMessage;
  