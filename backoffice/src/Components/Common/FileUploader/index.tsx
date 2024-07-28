import { Dropzone, FileWithPath } from "@mantine/dropzone";
// import mimeTypeToSimpleName from "../CustomData/MimeTypes";
interface FileUploaderProps {
  files: FileWithPath[];
  setFiles: React.Dispatch<React.SetStateAction<FileWithPath[]>>;
}

function FileUploader({ files, setFiles }: FileUploaderProps) {
  const handleUpload = (file: FileWithPath[]) => {
    setFiles((prev) => [...prev, ...file]);
  };

  const handlePreview = () => {
    return files?.map((file, index) => {
      const fileName = file.name;
      const fileSizeMB = file.size / 1000000;
      const fileSize = fileSizeMB.toFixed(2) + " MB";
      const fileType = file.type;
      // const mashedType = mimeTypeToSimpleName[file.type] || fileType;
      const mashedType = fileType;

      return (
        <div key={index}>
          <div className="media_list_item is_flex">
            <div className="uploaded_file_left" onClick={() => {}}>
              <div className="media_icon is_mp3">{mashedType}</div>
            </div>
            <div className="uploaded_file_middle" onClick={() => {}}>
              <div className="media_file_name">{fileName}</div>
              <div className="file_size_wrapper">
                <div className="text_12 weight_500 color_gray_1">
                  {fileSize}
                </div>
              </div>
            </div>
            <div
              className="uploaded_file_right"
              onClick={() => {
                setFiles((prev) =>
                  prev.filter((item) => item.name !== fileName)
                );
              }}
            >
              <div className="file_close_wrapper">
                <div className="w-embed">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7929 0.292893C11.1834 -0.0976311 11.8166 -0.0976311 12.2071 0.292893C12.5976 0.683417 12.5976 1.31658 12.2071 1.70711L7.91421 6L12.2071 10.2929C12.5976 10.6834 12.5976 11.3166 12.2071 11.7071C11.8166 12.0976 11.1834 12.0976 10.7929 11.7071L6.5 7.41421L2.20711 11.7071C1.81658 12.0976 1.18342 12.0976 0.792894 11.7071C0.402369 11.3166 0.402369 10.6834 0.792894 10.2929L5.08579 6L0.792894 1.70711C0.402369 1.31658 0.402369 0.683417 0.792894 0.292893C1.18342 -0.0976311 1.81658 -0.0976311 2.20711 0.292893L6.5 4.58579L10.7929 0.292893Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Dropzone
        accept={[""]}
        name="files"
        onDrop={handleUpload}
        styles={{
          root: {
            backgroundColor: "#f8f8fa",
          },
        }}
      >
        <div className="file_uploader_wrapper">
          <div className="uploader_left">
            <div className="file_uploader_icon_wrapper">
              <img
                src="../images/file.svg"
                loading="lazy"
                alt=""
                className="file_uploader_icon"
              />
            </div>
            <div className="file_uploader_text_wrapper">
              <div className="text_14 weight_500 color_gray_1">
                select or drag and drop your file here
              </div>
              <div className="text_13 weight_500 color_gray_1">
                PNG, JPG or MP4
              </div>
            </div>
          </div>
          <a href="#" className="btn_base is_secondary w-inline-block">
            <div>Add file</div>
            <div className="btn_icon w-embed">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7H9V1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1V7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H7V15Z"
                  fill="currentcolor"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </Dropzone>
      <br />
      {handlePreview()}
    </div>
  );
}

export default FileUploader;
