import { useQuery } from "@tanstack/react-query";
import Card from "../../Components/Card";
import { GetAllLearn, getResourceByModuleId } from "../../Api/Services/learn";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Resource() {

  const location = useLocation();


  const query = useQuery({
    queryKey: ["get-all-resource-by-module-id", location.state.module_id],
    queryFn: () => getResourceByModuleId(location.state.module_id),
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
                  <h2 className="heading-style-h2">Resources</h2>
                  <div className="spacer-3"></div>
                  <div className="resource-item-warapper">
                    <h3 className="heading-style-h3">Chose a topic</h3>
                    <div className="spacer-2"></div>
                    <div className="w-layout-grid grid-3-column is-resources-items-wrapper">
                      {
                        query?.data?.data?.map((item: any) => (
                          <Card
                            title={item?.title}
                            description={item?.overview}
                            isResources={true}
                            module_id={item?.id}
                          />
                        ))
                      }
                       
                    </div>
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

export default Resource;
