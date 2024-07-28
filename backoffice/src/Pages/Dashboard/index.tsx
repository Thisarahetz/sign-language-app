import Topbar from "@components/Common/Topbar";
import Icon from "@assets/home.svg";
import CustomBarChart from "@components/Common/customCharts/customBarChart";
import CustomPieChart from "@components/Common/customCharts/customPieChart";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import moment from "moment-timezone";
import TableLoader from "@components/Loaders/Table";
import * as changeCase from "change-case";
type Props = {};

const data = {
  barChartData: [
    { topic: "Topic1", count: 10 },
    { topic: "Topic2", count: 20 },
    { topic: "Topic3", count: 30 },
    { topic: "Topic4", count: 40 },
    { topic: "Topic5", count: 50 },
  ],
};

const pieChartData = {
  pieChartdata: [
    { province: "Province1", percentage: 10 },
    { province: "Province2", percentage: 20 },
    { province: "Province3", percentage: 30 },
    { province: "Province4", percentage: 40 },
    { province: "Province5", percentage: 50 },
  ],
};

export default function Dashboard({}: Props) {
  const [searchQuery, setSearchQuery] = useState({
    start_date: "" as string | null,
    end_date: "" as string | null,
  });




  //define the state for the bar this week and month
  useEffect(() => {
    // fetch data for the bar chart

    //use moment to get the current week start date
    const currentWeekStartDate = moment().startOf("week").format("YYYY-MM-DD");
    //use moment to get the current week end date
    const currentWeekEndDate = moment().endOf("week").format("YYYY-MM-DD");

    setSearchQuery({
      start_date: currentWeekStartDate,
      end_date: currentWeekEndDate,
    });
  }, []);



  const handleBarChartChecked = (e: any) => {
    if (e.target.checked) {
      //use moment to get the current month start date
      const currentMonthStartDate = moment()
        .startOf("month")
        .format("YYYY-MM-DD");
      //use moment to get the current month end date
      const currentMonthEndDate = moment().endOf("month").format("YYYY-MM-DD");

      setSearchQuery({
        start_date: currentMonthStartDate,
        end_date: currentMonthEndDate,
      });
    } else {
      //use moment to get the current week start date
      const currentWeekStartDate = moment()
        .startOf("week")
        .format("YYYY-MM-DD");
      //use moment to get the current week end date
      const currentWeekEndDate = moment().endOf("week").format("YYYY-MM-DD");

      setSearchQuery({
        start_date: currentWeekStartDate,
        end_date: currentWeekEndDate,
      });
    }
  };

  return (
    <>
      <Topbar title={"Dashboard"} icon={Icon} />
      <div className="full_grid_wrapper is_dashboard">
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: " 0rem 2rem 2rem 0rem",
            justifyContent: "center",
          }}
        >
          <div className="chart_swap_custom w-embed">
            <div className="chart_swap_wrapper">
              <div className="button b2 chart_swap_btn">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="bar_chart"
                  onChange={handleBarChartChecked}
                />
                <div className="knobs">
                  <span>Week</span>
                </div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}
