import { useQuery } from "@tanstack/react-query";
import Card from "../../Components/Card";
import { GetAllLearn } from "../../Api/Services/learn";
import { useEffect } from "react";

function Learn() {
  const query = useQuery({
    queryKey: ["get-all-module"],
    queryFn: GetAllLearn,
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
            <div className="container-large">
              <div className="padding-section-small">
                <div className="section_component">
                  <h2 className="heading-style-h2">සම්පත්</h2>
                  <div className="spacer-3"></div>
                  <div className="resource-item-warapper">
                    <h3 className="heading-style-h3">මාතෘකාව </h3>
                    <div className="spacer-2"></div>
                    <div className="w-layout-grid grid-3-column is-resources-items-wrapper">
                      {query?.data?.data
                        ?.filter((data: any) => {
                          return data.category === "topic";
                        })
                        .map((item: any) =>
                          item?.module?.map((item: any) => (
                            <Card
                              title={item?.title}
                              description={item?.overview}
                              isTopic
                              module_id={item?.id}
                            />
                          ))
                        )}
                    </div>
                  </div>
                  <div className="resource-item-warapper">
                    <div className="spacer-2"></div>
                    <h3 className="heading-style-h3"> අක්ෂර මාලාව   </h3>
                    <div className="spacer-2"></div>
                    <div className="w-layout-grid grid-3-column is-resources-items-wrapper">
                      {query?.data?.data
                        ?.filter((data: any) => {
                          return data.category === "grammar";
                        })
                        .map((item: any) =>
                          item?.module?.map((item: any) => (
                            <Card
                              title={item?.title}
                              description={item?.overview}
                              isGrammar
                              module_id={item?.id}
                            />
                          ))
                        )}
                    </div>
                  </div>
                  <div className="resource-item-warapper">
                    <div className="spacer-2"></div>
                    <h3 className="heading-style-h3">පැන විසඳුම් </h3>
                    <div className="spacer-2"></div>
                    <div className="w-layout-grid grid-3-column is-resources-items-wrapper">
                      {query?.data?.data
                        ?.filter((data: any) => {
                          return data.category === "game";
                        })
                        .map((item: any) =>
                          item?.module?.map((item: any) => (
                            <Card
                              title={item?.title}
                              description={item?.overview}
                              isTools
                              module_id={item?.id}
                            />
                          ))
                        )}
                    </div>
                  </div>
                  {/* <div className="resource-item-warapper">
                    <div className="spacer-2"></div>
                    <h3 className="heading-style-h3">Tools</h3>
                    <div className="spacer-2"></div>
                    <div className="w-layout-grid grid-3-column is-resources-items-wrapper">
                      <div className="resources-item-wrapper is-4">
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
                          <div className="text-size-medium text-weight-semibold">
                            Faces: Level 1
                          </div>
                        </div>
                        <div className="text-size-regular">
                          Learn conversational ASL by topic
                        </div>
                      </div>
                      <div
                        id="w-node-_5a08167e-2de7-fae0-406f-373eadd881f1-9b43f523"
                        className="resources-item-wrapper is-4"
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
                          <div className="text-size-medium text-weight-semibold">
                            Faces: Level 1
                          </div>
                        </div>
                        <div className="text-size-regular">
                          Learn conversational ASL by topic
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Learn;
