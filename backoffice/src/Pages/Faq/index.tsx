import { useAppDispatch } from "@hooks/Redux";
import { useNavigate } from "react-router-dom";



function FAQs() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    // <>
    //   <Topbar
    //     title={MANAGEMENT_CONTENTS_FAQ}
    //     icon={Icon}
    //     ButtonWrapper={
    //       hasCreatePermission(CREATE) && (
    //         <CustomButton
    //           onClick={() => {
    //             navigate(ROUTE_ADD_FAQ);
    //             dispatch(setFormStatus("create"));
    //           }}
    //           buttonText={"Add FAQ"}
    //           buttonColor={"black"}
    //         />
    //       )
    //     }
    //   />
    //   <div className="full_grid_wrapper">
    //     <FAQTable />
    //   </div>
    // </>
    <div>FAQ</div>
  );
}

export default FAQs;
