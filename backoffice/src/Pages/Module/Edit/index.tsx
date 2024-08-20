import Topbar from "@components/Common/Topbar";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import APP_ROUTES from "@src/Constants/route";
import DefaultButton from "@components/Button/Default";
import { DASHBOARD_CONTENTS } from "@constants/dashboard";
import Icon from "@assets/doc.svg";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  CreateNewModule,
  GetModuleById,
  UpdateModule,
} from "@src/Api/Services/Module";
import ModuleForm from "@components/Forms/Module";
import { useEffect } from "react";

interface initialValues {
  title: string;
  overview: string;
  category: "topic" | "grammar" | "game";
}

export default function ModuleEditPage() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      const { title, overview, category } = location.state;
      setFieldValue("title", title);
      setFieldValue("overview", overview);
      setFieldValue("category", category);
    }
  }, [location.state]);

  //update the module
  const updateModule = useMutation({
    mutationFn: (values: initialValues) =>
      UpdateModule(location.state.id, values),
    onSuccess: () => {
      toast.success("Module updated successfully");
      navigate(-1);
    },
    onError: () => {
      toast.error("Failed to update module");
    },
  });

  const initialValues: initialValues = {
    title: "",
    overview: "",
    category: "topic",
  };

  const onSubmit = (values: initialValues) => {
    const value = {
      title: values.title,
      overview: values.overview,
      category: values.category,
    };
    updateModule.mutateAsync(value);
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    // validationSchema: AddUserSchema,
    onSubmit,
  });

  return (
    <>
      <Topbar
        title={DASHBOARD_CONTENTS.CONFIGURATIONS_USER_ADD}
        icon={Icon}
        ButtonWrapper={
          <>
            <DefaultButton
              onClick={() => {
                navigate(-1);
              }}
              buttonText={"Cancel"}
              buttonColor={"gray"}
            />
            <DefaultButton
              onClick={() => {
                handleSubmit();
              }}
              buttonText={"Save"}
              buttonColor={"black"}
            />
          </>
        }
      />
      <div className="full_grid_wrapper">
        <ModuleForm
          values={values}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          isEdit={false}
          setFieldValue={setFieldValue}
        />
      </div>
    </>
  );
}
