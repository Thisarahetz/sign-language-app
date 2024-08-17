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

interface initialValues {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
}

export default function UsersAddPage() {
  const navigate = useNavigate();
  const moduleList = useAppSelector((state) => state.module.modules);
  const actions = useAppSelector((state) => state.action.actions);
  console.log(moduleList, actions);
  const moduleData = moduleList.map((module: any) => {
    return {
      moduleId: module.moduleId,
      moduleName: module.moduleName,
      actions: actions.map((action: any) => {
        return {
          actionId: action.actionId,
          actionName: action.actionName,
          isChecked: false,
        };
      }),
    };
  });
  const [modules, setModules] = useState<any>(moduleData);

  const createUser = useMutation({
    mutationFn: (values: any) => CreateNewAdminUser(values),
    onSuccess: (data: any) => {
      toast.success(data.message);
      navigate(APP_ROUTES.USERS);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  const initialValues: initialValues = {
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
  };

  const getModuleWithPermission = () => {
    const data = modules
      .filter((item: any) =>
        item.actions.some((action: any) => action.isChecked)
      )
      .map((item: any) => ({
        module: item.moduleId.toString(),
        actions: item.actions
          .filter((action: any) => action.isChecked)
          .map((action: any) => action.actionId),
      }));

    return data;
  };

  const onSubmit = (values: initialValues) => {
    const value = {
      email: values.email,
      first_name: values.first_name,
      last_name: values.last_name,
      phone_number: values.phone_number,
      country_code: "+61",
      permission: getModuleWithPermission(),
    };
    createUser.mutateAsync(value);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: AddUserSchema,
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
                navigate(APP_ROUTES.USERS);
              }}
              buttonText={"Cancel"}
              buttonColor={"gray"}
            />
            <DefaultButton
              onClick={() => {
                handleSubmit();
              }}
              buttonText={createUser.isPending ? <CustomMiniLoader /> : "Add"}
              buttonColor={"black"}
            />
          </>
        }
      />
      <div className="full_grid_wrapper">
        <UserForm
          isEdit={false}
          values={values}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
         
        />
      </div>
    </>
  );
}
