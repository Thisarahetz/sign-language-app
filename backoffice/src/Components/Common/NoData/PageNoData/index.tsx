interface PageNoDataProps {
  message?: string;
}

function PageNoData(props: PageNoDataProps) {
  return (
    <div className="page-no-data-wrapper">
      <div className="no-data-inner-wrapper">
        <div className="no-data-content">
          <div className="page-no-data-icon-wrapper">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2_5667)">
                <path
                  d="M2.52667 2.49333L1.58667 3.43333L3.41334 5.26L3.33334 5.34V14H12.18L13.2333 15.08L14.1733 14.14L2.52667 2.49333ZM12.6667 10.74V2H6.67334L5.3 3.37333L12.6667 10.74Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_5667">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="detail_value">{props.message || "No data found"}</p>
        </div>
      </div>
    </div>
  );
}

export default PageNoData;
