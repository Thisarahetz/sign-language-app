import DefaultButton from "@components/Button/Default";
import Topbar from "@components/Common/Topbar";
import CustomMiniLoader from "@components/Loaders/Mini";
import { useAppSelector } from "@hooks/Redux";
import { GetUserById, UpdateAdminUser } from "@src/Api/Services/User";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import APP_ROUTES from "@src/Constants/route";
import AddUserSchema from "@components/Schemas/User";
import UserForm from "@components/Forms/User";
import { DASHBOARD_CONTENTS } from "@constants/dashboard";
import Icon from "@assets/doc.svg";
import { useMutation, useQuery } from "@tanstack/react-query";
import TableLoader from "@components/Loaders/Table";
interface initialValues {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  is_admin_disabled: boolean;
}

export default function UsersEditPage() {
  const userId = useLocation().state;
  const navigate = useNavigate();
  const moduleList = useAppSelector((state) => state.module.modules);
  const actions = useAppSelector((state) => state.action.actions);
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

  const { data, isLoading } = useQuery({
    queryKey: ["edit-user", userId],
    queryFn: () => GetUserById(userId),
  });

  function getModuleData() {
    if (!data) return modules;

    const UpdatedModuleData = data?.data.permission
      .map((item: any) => {
        return item.module.map(
          (moduleItem: {
            module_id: any;
            module_name: any;
            module_route: any;
            action: any;
          }) => {
            return {
              moduleId: moduleItem.module_id,
              moduleName: moduleItem.module_name,
              actions: moduleItem.action,
            };
          }
        );
      })
      .flat();

    const mergedmodule = modules.map((module: any) => {
      const data = UpdatedModuleData.find(
        (item: any) => Number(item.moduleId) === Number(module.moduleId)
      );
      if (data) {
        module.actions = module.actions.map((action: any) => {
          const actionData = data.actions.find(
            (item: any) => Number(item) === Number(action.actionId)
          );

          if (actionData) {
            return {
              ...action,
              isChecked: true,
            };
          }

          return action;
        });
      }

      const isChecked = module.actions.every(
        (action: any) => action.isChecked === true
      );

      return {
        ...module,
        isChecked: isChecked,
      };
    });

    setModules(mergedmodule);
  }

  useEffect(() => {
    if (data) getModuleData();
    setValues({
      email: data?.data.email,
      first_name: data?.data.first_name,
      last_name: data?.data.last_name,
      phone_number: data?.data.phone_number,
      is_admin_disabled: data?.data.is_admin_disabled,
    });
  }, [data]);

  const initialValues: initialValues = {
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    is_admin_disabled: false,
  };

  const getModuleWithPermission = () => {
    const moduleData = modules
      .filter((item: any) =>
        item.actions.some((action: any) => action.isChecked)
      )
      .map((item: any) => ({
        module: item.moduleId.toString(),
        actions: item.actions
          .filter((action: any) => action.isChecked)
          .map((action: any) => action.actionId),
      }));

    return moduleData;
  };

  const editUser = useMutation({
    mutationFn: (values: any) => UpdateAdminUser(userId, values),
    onSuccess: (data: any) => {
      toast.success(data.message);
      navigate(APP_ROUTES.USERS);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  const onSubmit = (values: initialValues) => {
    const value = {
      email: values.email,
      first_name: values.first_name,
      last_name: values.last_name,
      phone_number: values.phone_number,
      country_code: "+61",
      is_admin_disabled: values.is_admin_disabled,
      permission: getModuleWithPermission(),
    };

    editUser.mutateAsync(value);
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: AddUserSchema,
    onSubmit,
  });

  if (isLoading)
    return (
      <div className="full_grid_wrapper">
        <TableLoader />
      </div>
    );

  return (
    <>
      <Topbar
        title={DASHBOARD_CONTENTS.CONFIGURATIONS_USER_EDIT}
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
              buttonText={editUser.isPending ? <CustomMiniLoader /> : "Save"}
              buttonColor={"black"}
            />
          </>
        }
      />
      <div className="full_grid_wrapper">
        <UserForm
        
          values={values}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          isEdit={true}
        
        />
      </div>
    </>
  );
}
