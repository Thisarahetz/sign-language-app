interface ErrorMessageProps {
  message: string;
}
function AuthErrorMessage({ message }: ErrorMessageProps) {
  return (
    <>
      <div className="validation-error-message">
        <div className="icon-wrapper">
          <div className="icon is-error w-embed">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_838_3976)">
                <path
                  d="M8.43819 2.01644C8.45779 2.00569 8.47984 2.00018 8.50219 2.00044C8.52421 2.00035 8.54588 2.00586 8.56519 2.01644C8.58806 2.03015 8.60673 2.04987 8.61919 2.07344L15.4762 13.7404C15.5122 13.8004 15.5112 13.8644 15.4782 13.9234C15.4655 13.9477 15.4469 13.9683 15.4242 13.9834C15.4044 13.9956 15.3814 14.0015 15.3582 14.0004H1.64619C1.62298 14.0016 1.59997 13.9956 1.58019 13.9834C1.55744 13.9683 1.53887 13.9477 1.52619 13.9234C1.50971 13.8957 1.50118 13.8639 1.50153 13.8317C1.50189 13.7994 1.51111 13.7678 1.52819 13.7404L8.38419 2.07344C8.39669 2.0499 8.41536 2.03019 8.43819 2.01644ZM9.48219 1.56644C9.3832 1.394 9.24047 1.25074 9.0684 1.15111C8.89633 1.05149 8.70102 0.999023 8.50219 0.999023C8.30336 0.999023 8.10805 1.05149 7.93598 1.15111C7.76391 1.25074 7.62118 1.394 7.52219 1.56644L0.66519 13.2334C0.20819 14.0114 0.75619 15.0004 1.64519 15.0004H15.3582C16.2472 15.0004 16.7962 14.0104 16.3382 13.2334L9.48219 1.56644Z"
                  fill="#ff2b2b"
                ></path>
              </g>
              <path
                d="M8.892 10.2355C9.02 9.06842 9.1 8.91499 9.1 6.77801V5H7.9V6.77801C7.9 8.89856 7.964 9.06842 8.092 10.2355H8.892ZM8.508 12.9999C9.036 12.9999 9.5 12.5232 9.5 11.9643C9.5 11.4054 9.036 10.9451 8.508 10.9451C7.948 10.9451 7.5 11.4054 7.5 11.9643C7.5 12.5232 7.948 12.9999 8.508 12.9999Z"
                fill="#ff2b2b"
              ></path>
              <defs>
                <clipPath id="clip0_838_3976">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.5)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div>{message}</div>
      </div>
    </>
  );
}

export default AuthErrorMessage;
