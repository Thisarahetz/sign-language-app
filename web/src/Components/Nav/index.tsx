export default function Nav() {
  return (
    <div className="nav">
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="200"
        data-easing="ease-in-out"
        data-easing2="ease-in-out"
        role="banner"
        className="nav_component w-nav"
      >
        <div className="page-padding">
          <div className="nav_container">
            <a href="index.html" className="nav_logo-link w-nav-brand">
              <img
                src="images/solidcore-logo-360x250-1.png"
                loading="lazy"
                sizes="64.40625px"
                srcSet="images/solidcore-logo-360x250-1-p-500.png 500w, images/solidcore-logo-360x250-1.png 577w"
                alt=""
                className="nav_logo"
              />
            </a>
            <nav role="navigation" className="nav_menu w-nav-menu">
              <div className="nav_link-wrapper">
                <div className="nav_link-list">
                  <a href="#" className="nav_link w-nav-link">
                    Learn
                  </a>
                  <a href="#" className="nav_link w-nav-link">
                    Dashboard
                  </a>
                  <div
                    data-hover="false"
                    data-delay="0"
                    className="nav_dropdown w-dropdown"
                  >
                    <div className="nav_dropdown-toggle w-dropdown-toggle">
                      <div className="icon w-icon-dropdown-toggle"></div>
                      <div>Thisara</div>
                    </div>
                    <nav className="nav_drop-list w-dropdown-list">
                      <div className="deopdown-list-wrapper">
                        <a
                          href="#"
                          className="dropdown-content-wrapper w-inline-block"
                        >
                          <h6 className="heading-style-h6">Settings</h6>
                        </a>
                        <a
                          href="#"
                          className="dropdown-content-wrapper w-inline-block"
                        >
                          <h6 className="heading-style-h6">Support</h6>
                        </a>
                        <a
                          href="#"
                          className="dropdown-content-wrapper w-inline-block"
                        >
                          <h6 className="heading-style-h6">Signout</h6>
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </nav>
            <div className="nav_menu-button w-nav-button">
              <div className="nav_menu-icon w-embed">
                <svg
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="7" width="24" height="2" fill="currentColor"></rect>
                  <rect x="8" width="16" height="2" fill="currentColor"></rect>
                  <rect
                    x="12"
                    y="14"
                    width="12"
                    height="2"
                    fill="currentColor"
                  ></rect>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
