import CustomMiniLoader from "@components/Loaders/Mini";

interface CustomButtonProps {
  onClick: (() => void) | undefined;
  buttonText: any;
  isIcon?: boolean;
  buttonColor: "gray" | "black" | "red";
  style?: any;
  isLoading?: boolean;
}

function DefaultButton({
  onClick,
  buttonText,
  isIcon,
  buttonColor,
  style,
  isLoading = false,
}: CustomButtonProps) {
  return (
    <a
      href="#"
      className={
        buttonColor === "gray"
          ? `btn_base is_secondary w-inline-block ${style} ${
              isLoading ? "is_disabled" : ""
            }`
          : buttonColor === "red"
          ? `btn_base is_danger w-inline-block ${style} ${
              isLoading ? "is_disabled" : ""
            }`
          : `btn_base  w-inline-block ${style} ${
              isLoading ? "is_disabled" : ""
            }`
            
      }
      onClick={onClick}
    >
      {isLoading && <CustomMiniLoader />}
      {!isLoading && <div>{buttonText}</div>}
      {!isLoading && isIcon && (
        <div className="btn_icon w-embed">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.125,13.125a.875.875,0,0,0,1.75,0V7.875h5.25a.875.875,0,0,0,0-1.75H7.875V.875a.875.875,0,0,0-1.75,0v5.25H.875a.875.875,0,0,0,0,1.75h5.25Z"
              fill="currentcolor"
            ></path>
          </svg>
        </div>
      )}
    </a>
  );
}

export default DefaultButton;
