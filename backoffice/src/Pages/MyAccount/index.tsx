import PrimeryButton from "@components/Button/Primary";
import Topbar from "@components/Common/Topbar";
import MyAccountForm from "@components/Forms/MyAccount";
import { useAppDispatch, useAppSelector } from "@hooks/Redux";
import { FileWithPath } from "@mantine/dropzone";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "sonner";
import Icon from "@assets/user.svg";
import { ChnagePasswordApiCall } from "@src/Api/Services/Auth";
interface initialValues {
  newPassword: string;
  currentPassword: string;
}

function MyAccount() {
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const dispatch = useAppDispatch();

  const userData = useAppSelector((state) => state.auth.data.user);

  const initialValues: initialValues = {
    newPassword: "",
    currentPassword: "",
  };

  //   const uploadFile = useMutation({
  //     mutationFn: (file: FileWithPath) => filesUpload(file),
  //     onSuccess: (data) => {
  //     //   toast.success(data.message);
  //     //   dispatch(setUserImage(data.data[0].key));
  //     //   setFiles([]);

  //     //   const mappedUploadContent = data?.data.map((item: any) => {
  //     //     return {
  //     //       key: item.key,
  //     //     };
  //     //   });

  //     //   const profileData = {
  //     //     image_url: mappedUploadContent[0].key || null,
  //     //     new_password: values.newPassword || null,
  //     //     old_password: values.currentPassword || null,
  //     //   };

  //     //   {
  //     //     values.newPassword !== "" &&
  //     //       values.currentPassword !== "" &&
  //     //       editProfile.mutate(profileData);
  //     //   }
  //     },
  //     onError: (error: any) => {
  //       toast.error(error.response.data.message);
  //     },
  //   });

  const editProfile = useMutation({
    mutationFn: (values: any) => ChnagePasswordApiCall(values),
    onSuccess: (data: any) => {
      toast.success(data.message);
      setValues(initialValues);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  const onSubmit = (values: initialValues) => {
    if (files.length > 0) {
      //   uploadFile.mutate(files as any);
    }
    if (
      values.newPassword !== "" &&
      values.currentPassword !== "" &&
      files.length === 0
    ) {
      const profileData = {
        password: values.currentPassword,
        new_password: values.newPassword,
      };
      editProfile.mutate(profileData);
    }
  };

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    handleBlur,
    setValues,
  } = useFormik({
    initialValues,
    validationSchema: "",
    onSubmit,
  });

  return (
    <>
      <Topbar
        icon={Icon}
        title="My Account"
        ButtonWrapper={
          <PrimeryButton
            onClick={handleSubmit}
            title={"Save"}
            loading={editProfile.isPending}
          />
        }
      />
      <div className="full_grid_wrapper">
        <MyAccountForm
          userName={userData?.first_name + " " + userData?.last_name}
          email={userData?.email}
          values={values}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          files={files}
          setFiles={setFiles}
        />
      </div>
    </>
  );
}

export default MyAccount;
