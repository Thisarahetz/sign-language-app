import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDashbordTabelById } from "../../Api/Services/dashbord";
import CustomizedDialogs from "../../Components/Model";
import "./TableStyles.css";
import { getSinhalaLetter } from "../../Utility/helpers";

function Dashboard() {
  const [modelOpen, setModelOpen] = useState({
    open: false,
    videoUrl: "",
    predicted: "",
    result: false,
    isLoading: false,
  });
  const { data, isLoading, error, isError, isSuccess, refetch } = useQuery({
    queryKey: ["get-tabel"],
    queryFn: getDashbordTabelById,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="main-wrapper">
      <CustomizedDialogs
        open={modelOpen.open}
        handleClose={() => setModelOpen({ ...modelOpen, open: false })}
        videoUrl={modelOpen.videoUrl}
        predicted={modelOpen.predicted}
        result={modelOpen.result}
        isLoader={modelOpen.isLoading}
      />

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
                  <h2 className="heading-style-h3">උපකරණ පුවරුව</h2>
                  <div className="spacer-3"></div>
                  <div className="dashborad-wrapper">
                    <div className="w-layout-grid grid-repeat-column is-dashboard">
                      <div
                        id="w-node-e77db49f-3e45-a7de-bf35-c24760b9486e-58145c5d"
                        className="grid-content-repeate is-dashboard-top"
                      >
                        <div className="dashboard-main-wrapper">
                          <div className="text-size-large">Level</div>
                          <div className="dashboard-circle">
                            <div className="text-size-xlarge text-weight-medium">
                              68pts/100pts
                            </div>
                          </div>
                          <div className="text-size-large text-weight-semibold text-color-grey">
                            Novice
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-e77db49f-3e45-a7de-bf35-c24760b9486f-58145c5d"
                        className="grid-content-repeate is-dashboard-top"
                      >
                        <div className="heading-style-h2 text-color-orange">
                          1 day
                          <br />
                        </div>
                        <div className="text-size-medium text-color-grey">
                          Current Streak
                        </div>
                      </div>
                      <div
                        id="w-node-a6d90ad3-66ee-131b-20e1-389ebf82e7bc-58145c5d"
                        className="grid-content-repeate is-dashboard-top"
                      >
                        <div className="heading-style-h2 text-color-orange">
                          345
                          <br />
                        </div>
                        <div className="text-size-medium text-color-grey">
                          Signing Game
                          <br />
                          High Score
                        </div>
                      </div>
                      <div
                        id="w-node-e0b9c19c-37f6-df26-412e-401515e675d0-58145c5d"
                        className="grid-content-repeate is-dashboard-top"
                      >
                        <div className="heading-style-h2 text-color-orange">
                          40 days
                          <br />
                        </div>
                        <div className="text-size-medium text-color-grey">
                          Record Streak
                          <br />
                        </div>
                      </div>
                      <div
                        id="w-node-_450b9360-7b7a-05fc-f45d-d459810cec62-58145c5d"
                        className="grid-content-repeate is-dashboard-top"
                      >
                        <div className="heading-style-h2 text-color-orange">
                          560
                          <br />
                        </div>
                        <div className="text-size-medium text-color-grey">
                          Fingerspelling Game
                          <br />
                          High Score
                        </div>
                      </div>
                    </div>
                    <div className="spacer-3"></div>
                    <div className="w-layout-grid grid-3-column is-dashboard-bottom">
                      <div
                        id="w-node-_31ae7be3-b272-0e33-996d-113538abbace-58145c5d"
                        className="dashboard-bottom-single-wrapper"
                      >
                        <div className="heading-style-h2 text-color-orange">
                          75%
                          <br />
                        </div>
                        <div className="text-size-medium text-color-grey">
                          Fingerspelling Accuracy
                          <br />
                        </div>
                      </div>
                      <div
                        id="w-node-_06c2512a-f0eb-2e1f-d496-0f8dbf133da4-58145c5d"
                        className="dashboard-bottom-single-wrapper"
                      >
                        <div className="heading-style-h2 text-color-orange">
                          89%
                          <br />
                        </div>
                        <div className="text-size-medium text-color-grey">
                          Lesson Accuracy
                          <br />
                        </div>
                      </div>
                      <div
                        id="w-node-_8192b705-b6f3-179f-bb1a-45c2cc21c61c-58145c5d"
                        className="dashboard-bottom-single-wrapper"
                      >
                        <div className="heading-style-h2 text-color-orange">
                          56%
                          <br />
                        </div>
                        <div className="text-size-medium text-color-grey">
                          Signing Game Accuracy
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-3"></div>
                <div className="table-wrapper">
                  <table className="dashboard-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Score</th>
                        <th>Given Answer</th>
                        <th>Correct Answer</th>
                        <th>Is Correct</th>
                        <th>Status</th>
                        <th>Total Time Spent</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.data?.map((item: any) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.user_id}</td>
                          <td>{item.score}</td>
                          <td>{getSinhalaLetter(item.history.given_answer)}</td>
                          <td>{getSinhalaLetter(item.history.correct_answer)}</td>
                          <td
                            className={
                              item.history.is_correct
                                ? "is-correct"
                                : "is-incorrect"
                            }
                          >
                            {item.history.is_correct ? "Yes" : "No"}
                          </td>
                          <td>{item.status}</td>
                          <td>{item.total_time_spent}</td>
                          <td>{new Date(item.createdAt).toLocaleString()}</td>
                          <td>{new Date(item.updatedAt).toLocaleString()}</td>
                          <td>
                            <button
                              onClick={() => {
                                setModelOpen({
                                  open: true,
                                  videoUrl: item.history?.url,
                                  predicted: item.history?.correct_answer,
                                  result: item.history?.is_correct,
                                  isLoading: false,
                                });
                              }}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
