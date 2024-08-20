import Topbar from "@components/Common/Topbar";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import APP_ROUTES from "@src/Constants/route";
import DefaultButton from "@components/Button/Default";
import Icon from "@assets/doc.svg";
import { useMutation } from "@tanstack/react-query";
import { CreateNewResource, UpdateResource } from "@src/Api/Services/Module";
import ResourceForm from "@components/Forms/Resource";
import { useEffect } from "react";

export default function ResourceEditPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const resource_Id = location.state.id

  const CreateResource = useMutation({
    mutationFn: (values: any) => UpdateResource(resource_Id, values),
    onSuccess: (data: any) => {
      toast.success(data.message);
      navigate(APP_ROUTES.MODULE);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  useEffect(() => {
    if (location.state) {
      const { title, name, overview, video, description } = location.state;
      setFieldValue("title", title);
      setFieldValue("name", name);
      setFieldValue("overview", overview);
      setFieldValue("video", video);
      setFieldValue("sign", description.sign);
      setFieldValue("Phrases", description.Phrases);
    }
  }, [location.state]);

  type initialValues = {
    title: string;
    name: string;
    overview: string;
    video: string;
    sign: string;
    Phrases: string;
  };

  const initialValues: initialValues = {
    title: "",
    name: "",
    overview: "",
    video: "",
    sign: "",
    Phrases: "",
  };

  const onSubmit = (values: initialValues) => {
    const value = {
      title: values.title,
      name: values.name,
      overview: values.overview,
      video: values.video,
      description: {
        sign: values.sign,
        Phrases: values.Phrases,
      },
    };
    CreateResource.mutateAsync(value);
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
        title={'Add Resource'}
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
        <ResourceForm
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
