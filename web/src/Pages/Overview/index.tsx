import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getResourceId } from "../../Api/Services/learn";
import { useQuery } from "@tanstack/react-query";


function Overview() {
    const location = useLocation();
    const navigator = useNavigate();
    const { state } = location;
  
    const resourse_id = state?.module_id
  
    const query = useQuery({
      queryKey: ["get-all-module"],
      queryFn: () => getResourceId(resourse_id),
    });
  
    useEffect(() => {
      query.refetch();
    }, []);


  return (
    <main className="main-wrapper">
      <div
        data-barba-namespace="home"
        data-barba="container"
        className="page-content homepage"
      >
        <div className="section is-height-100vh">
          <div className="padding-global">
            <div className="container-medium">
              <div className="padding-section-small">
                <div className="section_component">
                  <div className="button-wrapper is-space-between">
                    <button onClick={
                      () => {
                        navigator(-1);
                      }
                    } className="back-button-wrapper w-inline-block">
                      <div className="icon-1x1-small w-embed">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 12.5L5 12.5M5 12.5L12 19.5M5 12.5L12 5.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div>Back</div>
                    </button>
                    <button className="back-button-wrapper w-inline-block" onClick={
                      () => {
                        navigator("practice", { state: { module_id: resourse_id } });
                      }
                    }>
                      <div>Next</div>
                      <div className="icon-1x1-small w-embed">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div className="spacer-2"></div>
                  <h5 className="heading-style-h5">Overview</h5>
                  <h2 className="heading-style-h3">{query?.data?.data?.overview}</h2>
                  <div className="spacer-3"></div>
                  <div className="text-size-medium text-color-grey">
                    In this lesson, you will learn the following signs:
                    <br />
                    <br />
                    <strong>
                      Signs
                      <br />‍
                    </strong>
                    {query?.data?.data?.description?.sign}
                    <br />
                    <br />‍
                    <strong>
                      Phrases
                      <br />‍
                    </strong>
                    {query?.data?.data?.description?.Phrases}
                    <br />
                  </div>
                  <div className="spacer-3"></div>
                  <div className="button-wrapper is-center">
                    <button 
                    onClick={
                      () => {
                        navigator("practice", { state: { module_id: resourse_id } });
                      }
                    }
                     className="button is-secondary w-button">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Overview;
