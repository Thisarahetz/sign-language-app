import React from "react";
import { useNavigate } from "react-router-dom";

//props
interface CardProps {
  title: string;
  description: string;
  icon?: string;
  isTopic?: boolean;
  isGrammar?: boolean;
  isTools?: boolean;
  module_id: number;
  isResources?: boolean;
}

function Card({
  title,
  description,
  isGrammar,
  isTopic,
  isTools,
  module_id,
  isResources = false,
}: CardProps) {
  const navigate = useNavigate();
  return (
    <button
      style={{
        border: "none",
        background: "none",
        padding: "0",
        margin: "0",
        cursor: "pointer",
        outline: "none",
      }}
      onClick={() => {
        if (!isResources) {
          navigate("resource", { state: { module_id } });
        } else {
          navigate("practice", { state: { module_id } });
        }
      }}
    >
      <div
        className={`resources-item-wrapper ${
          isTopic
            ? "is-topics"
            : isGrammar
            ? "is-grammer"
            : isTools
            ? "is-tools"
            : "is-tools"
        }`}
      >
        <div className="resources-item-top-wrapper">
          <div className="icon-1x1-medium w-embed">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 14V0C19.8958 0 21.7083 0.369792 23.4375 1.10938C25.1667 1.84896 26.6562 2.84375 27.9062 4.09375C29.1562 5.34375 30.151 6.83333 30.8906 8.5625C31.6302 10.2917 32 12.1042 32 14H18ZM14 32C12.1042 32 10.2917 31.6302 8.5625 30.8906C6.83333 30.151 5.34375 29.1562 4.09375 27.9062C2.84375 26.6562 1.84896 25.1667 1.10938 23.4375C0.369792 21.7083 0 19.8958 0 18C0 16.1042 0.369792 14.2917 1.10938 12.5625C1.84896 10.8333 2.84375 9.34375 4.09375 8.09375C5.34375 6.84375 6.83333 5.84896 8.5625 5.10938C10.2917 4.36979 12.1042 4 14 4V18H28C28 19.8958 27.6302 21.7083 26.8906 23.4375C26.151 25.1667 25.1562 26.6562 23.9062 27.9062C22.6562 29.1562 21.1667 30.151 19.4375 30.8906C17.7083 31.6302 15.8958 32 14 32Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="text-size-medium text-weight-semibold">{title}</div>
        </div>
        <div className="text-size-regular">{description}</div>
      </div>
    </button>
  );
}

export default Card;
