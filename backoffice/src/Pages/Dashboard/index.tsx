
import Icon from "@assets/home.svg";
import Topbar from "@components/Common/Topbar";
import { getAllScoresUser } from "@src/Api/Services/dashboard";
import { useQuery } from "@tanstack/react-query";





export default function Dashboard() {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["getAllScoresUser"],
    queryFn: () => getAllScoresUser(),
  });

  return (
    <>
      <Topbar title={"Dashboard"} icon={Icon} />
      <div className="full_grid_wrapper is_dashboard">
        {
          isLoading && <div>Loading...</div>
        }
        {
          isError && <div>Error</div>
        }
        {
          isSuccess && <div
          style={{
            display: "flex",
            width: "100%",
            padding: " 0rem 2rem 2rem 0rem",
            justifyContent: "center",
            color: "green"
          }}
          >User Scores Loaded Successfully</div>
        }
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: " 0rem 2rem 2rem 0rem",
            justifyContent: "center",
          }}
        >
          <div className="table-wrapper" style={{ padding: "20px" }}>
            <table
              className="dashboard-table"
              style={{
                border: "1px solid #ddd",
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>User ID</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Score</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Given Answer</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Correct Answer</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Is Correct</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Total Time Spent</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Created At</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Updated At</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((item:any) => (
                  <tr key={item.id}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.id}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.user_id}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.score}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.history.given_answer}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.history.correct_answer}</td>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        color: item.history.is_correct ? "green" : "red",
                      }}
                    >
                      {item.history.is_correct ? "Yes" : "No"}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.status}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.total_time_spent}</td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {new Date(item.createdAt).toLocaleString()}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {new Date(item.updatedAt).toLocaleString()}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <button style={{ padding: "5px", marginRight: "5px" }}>view</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
       
      </div>
    </>
  );
}
