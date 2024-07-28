interface TopbarProps {
  ButtonWrapper?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
  icon: any;
  nestedTitle?: string[];
}

function Topbar({
  ButtonWrapper,
  title,
  children,
  icon,
  nestedTitle,
}: TopbarProps) {
  return (
    <div className="main_header_wrapper">
      <div className="breadcrumb_wrapper">
        <div className="breadcrumb_icon w-embed"></div>
        <img src={icon} alt="Icon" />

        {nestedTitle && nestedTitle?.length > 0 ? (
          <>
            <div className="breadcrumb_arrow w-embed">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.292986 0.292893C-0.097538 0.683417 -0.097538 1.31658 0.292986 1.70711L4.58588 6L0.292986 10.2929C-0.097538 10.6834 -0.097538 11.3166 0.292986 11.7071C0.68351 12.0976 1.31668 12.0976 1.7072 11.7071L7.41431 6L1.7072 0.292893C1.31668 -0.0976311 0.68351 -0.0976311 0.292986 0.292893Z"
                  fill="#D8DAE6"
                ></path>
              </svg>
            </div>
            {nestedTitle.map((title, index) => (
              <>
                {index > 0 && (
                  <div className="breadcrumb_arrow w-embed">
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.292986 0.292893C-0.097538 0.683417 -0.097538 1.31658 0.292986 1.70711L4.58588 6L0.292986 10.2929C-0.097538 10.6834 -0.097538 11.3166 0.292986 11.7071C0.68351 12.0976 1.31668 12.0976 1.7072 11.7071L7.41431 6L1.7072 0.292893C1.31668 -0.0976311 0.68351 -0.0976311 0.292986 0.292893Z"
                        fill="#D8DAE6"
                      ></path>
                    </svg>
                  </div>
                )}
                <div className="text_14 weight_500">{title}</div>
              </>
            ))}
          </>
        ) : (
          <>
            <div className="breadcrumb_arrow w-embed">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.292986 0.292893C-0.097538 0.683417 -0.097538 1.31658 0.292986 1.70711L4.58588 6L0.292986 10.2929C-0.097538 10.6834 -0.097538 11.3166 0.292986 11.7071C0.68351 12.0976 1.31668 12.0976 1.7072 11.7071L7.41431 6L1.7072 0.292893C1.31668 -0.0976311 0.68351 -0.0976311 0.292986 0.292893Z"
                  fill="#D8DAE6"
                ></path>
              </svg>
            </div>
            <div className="text_14 weight_500">{title}</div>
          </>
        )}
      </div>
      {children}
      <div className="action_wrapper">{ButtonWrapper}</div>
    </div>
  );
}

export default Topbar;
