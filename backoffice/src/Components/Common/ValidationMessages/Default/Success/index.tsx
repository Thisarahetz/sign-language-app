interface SuccessMessageProps {
    message: string;
  }
  
  function SuccessMessage({ message }: SuccessMessageProps) {
    return (
      <div className="alert_msg_wrapper drop-in">
        <div className="alert_msc_body">
          <div className="alert_icon_wrapper">
            <div className="alert_icon_left w-embed">
              <svg
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6ZM2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14Z"
                  fill="#0E8C43"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071L8.29289 14.7071C7.90237 14.3166 7.90237 13.6834 8.29289 13.2929C8.68342 12.9024 9.31658 12.9024 9.70711 13.2929L11 14.5858L14.2929 11.2929C14.6834 10.9024 15.3166 10.9024 15.7071 11.2929Z"
                  fill="#0E8C43"
                ></path>
              </svg>
            </div>
          </div>
          <div className="alert_text">
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
                    fill="#0E8C43"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default SuccessMessage;
  