import DefaultButton from "@components/Button/Default";
import { Dialog } from "@mui/material";

interface Props {
  open: boolean;
  onOpenChange: () => void;
  onYesClick: () => void;
}

export default function LocationAlert({
  open,
  onOpenChange,
  onYesClick,
}: Props) {
  return (
    <Dialog open={open} onClose={() => onOpenChange()}>
      <div className="popup-modal-wrapper is-small">
        <h6 className="heading-style-h6 text-weight-bold">
          This application requires access to your location before proceeding
          further.
        </h6>
        <div className="display-inlineflex is-1">
          {/* <DefaultButton buttonText="Yes"    />
          <DefaultButton  buttonText="No" onClick={()=>onOpenChange()} className="is-gray w-button"/> */}
          <input
            id="w-node-befacf99-6b71-5950-d6d3-82f271354c3c-9bfdddd0"
            className="is-form-submit w-button"
            type="button"
            value="Yes"
            onClick={() => onYesClick()}
          />
          <input
            id="w-node-befacf99-6b71-5950-d6d3-82f271354c3c-9bfdddd0"
            className="is-form-submit w-button"
            type="button"
            value="No"
            onClick={() => onOpenChange()}
          />
        </div>
        <button
          className="popup-close-btn w-inline-block"
          onClick={() => onOpenChange()}
        >
          <div className="icon-1x1-small w-embed">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM10.2803 9.21967C9.98744 8.92678 9.51256 8.92678 9.21967 9.21967C8.92678 9.51256 8.92678 9.98744 9.21967 10.2803L10.9393 12L9.21967 13.7197C8.92678 14.0126 8.92678 14.4874 9.21967 14.7803C9.51256 15.0732 9.98744 15.0732 10.2803 14.7803L12 13.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L13.0607 12L14.7803 10.2803C15.0732 9.98744 15.0732 9.51256 14.7803 9.21967C14.4874 8.92678 14.0126 8.92678 13.7197 9.21967L12 10.9393L10.2803 9.21967Z"
                fill="#0F172A"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </Dialog>
  );
}
