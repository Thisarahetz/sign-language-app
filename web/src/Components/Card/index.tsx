import React from "react";
import { useNavigate } from "react-router-dom";
import icon1 from "../../assets/randaomicon/basketball-svgrepo-com.svg";
import icon2 from "../../assets/randaomicon/battery-svgrepo-com.svg";
import icon3 from "../../assets/randaomicon/book-closed-svgrepo-com.svg";
import icon4 from "../../assets/randaomicon/building-svgrepo-com.svg";
import icon5 from "../../assets/randaomicon/comment-svgrepo-com.svg";
import icon6 from "../../assets/randaomicon/compass-svgrepo-com.svg";
import icon7 from "../../assets/randaomicon/film-camera-svgrepo-com.svg";
import icon8 from "../../assets/randaomicon/macbook-pro-svgrepo-com.svg";
import icon9 from "../../assets/randaomicon/medal-svgrepo-com.svg";
import icon10 from "../../assets/randaomicon/printer-svgrepo-com.svg";
import icon11 from "../../assets/randaomicon/ribbon-svgrepo-com.svg";
import icon12 from "../../assets/randaomicon/rocket-svgrepo-com.svg";
import icon13 from "../../assets/randaomicon/shorts-svgrepo-com.svg";

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

  const iconsArray = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
    icon11,
    icon12,
    icon13,
  ];

  function getRandomIcon() {
    return iconsArray[Math.floor(Math.random() * iconsArray.length)];
}

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
          navigate("overview", { state: { module_id } });
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
            <img src={getRandomIcon()} alt="icon" />
          </div>
          <div className="text-size-medium text-weight-semibold">{title}</div>
        </div>
        <div className="text-size-regular">{description}</div>
      </div>
    </button>
  );
}

export default Card;
