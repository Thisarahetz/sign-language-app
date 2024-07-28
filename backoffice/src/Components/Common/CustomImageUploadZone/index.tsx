import { Image, Button } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from "@mantine/dropzone";
import { useRef } from "react";
import "./style.scss";
import { useAppSelector } from "@hooks/Redux";

// import { useAppSelector } from "../../../hooks/useRedux";

interface CustomImageUploadZoneProps {
  files: FileWithPath[];
  setFiles: React.Dispatch<React.SetStateAction<FileWithPath[]>>;
}

function UserImageUploadZone({ files, setFiles }: CustomImageUploadZoneProps) {
  const ProfileImage = useAppSelector(
    (state) => state.auth.data.user.profile_image
  );
  const userImage = import.meta.env.VITE_API_AWS_S3_URL + ProfileImage;

  const openRef = useRef<() => void>(null);
  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file) || userImage;

    return (
      <Image
        key={index}
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      />
    );
  });

  return (
    <div className="dropZoneWrapper">
      <>
        <Dropzone
          openRef={openRef}
          accept={IMAGE_MIME_TYPE}
          onDrop={setFiles}
          children={undefined}
          styles={{
            root: {
              display: "none",
            },
          }}
        ></Dropzone>

        <div className="previewWrapper">
          <div className="preview">
            {/* {userImage && previews.length === 0 && (
              <>
                <img
                  src={
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Button onClick={() => openRef.current?.()}>
                  Change Image
                </Button>
              </>
            )} */}
            {previews}
            <Button onClick={() => openRef.current?.()}>Change Image</Button>
          </div>

          <Button onClick={() => openRef.current?.()}>
            <div className="placeholder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51.5"
                height="39.962"
                viewBox="0 0 51.5 39.962"
              >
                <path
                  id="Path_42"
                  data-name="Path 42"
                  d="M26.25,31.863V14.555m0,0,7.692,7.692M26.25,14.555l-7.692,7.692M12.788,39.555a11.54,11.54,0,0,1-3.614-22.5,13.465,13.465,0,0,1,26.239-5.973,7.7,7.7,0,0,1,9.636,9.866,9.617,9.617,0,0,1-3.414,18.607Z"
                  transform="translate(-0.5 -0.344)"
                  fill="none"
                  stroke="#0f172a"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
              <div className="uploadImage">Upload Profile image</div>
            </div>
          </Button>
        </div>
      </>
    </div>
  );
}

export default UserImageUploadZone;
