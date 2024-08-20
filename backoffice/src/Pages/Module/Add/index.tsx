import Topbar from "@components/Common/Topbar";
import { useAppSelector } from "@hooks/Redux";
import { CreateNewAdminUser } from "@src/Api/Services/User";
import { useFormik } from "formik";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import APP_ROUTES from "@src/Constants/route";
import DefaultButton from "@components/Button/Default";
import CustomMiniLoader from "@components/Loaders/Mini";
import AddUserSchema from "@components/Schemas/User";
import UserForm from "@components/Forms/User";
import { DASHBOARD_CONTENTS } from "@constants/dashboard";
import Icon from "@assets/doc.svg";
import { useMutation } from "@tanstack/react-query";
import { CreateNewModule } from "@src/Api/Services/Module";
import ModuleForm from "@components/Forms/Module";

interface initialValues {
  title: string;
  overview: string;
  category: "topic" | "grammar" | "game";
}

export default function ModuleAddPage() {
  const navigate = useNavigate();

  const createModule = useMutation({
    mutationFn: (values: any) => CreateNewModule(values),
    onSuccess: (data: any) => {
      toast.success(data.message);
      navigate(APP_ROUTES.MODULE);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
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
    createModule.mutateAsync(value);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit,setFieldValue } =
    useFormik({
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
