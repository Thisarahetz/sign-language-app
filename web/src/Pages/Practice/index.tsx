import React, { useEffect, useRef, useState } from "react";
import VideoButton from "../../Components/Icon/videoButton";
import SlowSpeedButton from "../../Components/Icon/SlowSpeedButton";
import MediumSpeedButton from "../../Components/Icon/MediumSpeedButton";
import NormalButton from "../../Components/Icon/NormalButton";
import { ReactMediaRecorder } from "react-media-recorder";
import playCircle from "../../assets/icon/play-circle-svgrepo-com.svg";
import stopVideoIcon from "../../assets/icon/stop-circle-svgrepo-com.svg";
import dawnlodIcon from "../../assets/icon/save-svgrepo-com.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getResourceId } from "../../Api/Services/learn";
import { uploadFile } from "../../firebase";
import CustomizedDialogs from "../../Components/Model";
import { GetDetection, response } from "../../Api/Services/Detection";
import { toast } from "sonner";

const VideoPreview = (props: { stream: MediaStream }) => {
  const stream = props.stream;
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current && stream) {
      (videoRef.current as HTMLVideoElement).srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      Live Preview
      <video id="livePreview" ref={videoRef} width="390vw" autoPlay />
    </div>
  );
};
function liveStream(stream: any) {
  const previewStream = stream;
  if (previewStream != null) {
    return <VideoPreview stream={previewStream} />;
  }
}

function Dwn() {
  useEffect(() => {
    const a = document.getElementById("mediaDownload");
    if (a) {
      a.click();
    }
  });
  return <></>;
}
function stopRecordingWrapper(fn: () => void) {
  //document.getElementById("livePreview").style.display='hidden'
  fn();
}
function liveStreamWrapper(previewStream: any, fn: any, status: any) {
  //console.log(status)
  if (status != "stopped") {
    return fn(previewStream);
  }
}
function recordedVideo(mediaBlob: any, status: string) {
  //console.log(status)
  if (status == "stopped") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Recorded Video
        <p />
        <video width="390vw" height="auto" src={mediaBlob} controls></video>
      </div>
    );
  }
}

function Practice() {
  let [audioOnOff, setAudio] = useState(true);
  const [isLoader, setIsLoader] = useState(false);
  const [isPredicted, setIsPredicted] = useState(false);
  const [predictedResult, setPredictedResult] = useState<response>(
    {} as response
  );

  const location = useLocation();
  const navigator = useNavigate();
  const { state } = location;

  const resourse_id = state?.module_id;

  const query = useQuery({
    queryKey: ["resource", resourse_id],
    queryFn: () => getResourceId(resourse_id),
  });

  useEffect(() => {
    query.refetch();
  }, []);

  console.log(query?.data?.data);

  // Refs to store the start/stop recording functions
  const startRecordingRef = useRef(() => {});
  const stopRecordingRef = useRef(() => {});
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null as any);

  const [volumOfVideo, setVolumOfVideo] = useState<number>(100);
  const [durationOfVideo, setDurationOfVideo] = useState<number>(0);
  const [currentDurationOfVideo, setCurrentDurationOfVideo] =
    useState<number>(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const getDurationOfVideo = () => {
    const videoIntervalTime = setInterval(() => {
      if (videoRef.current) {
        setCurrentDurationOfVideo(
          parseFloat(videoRef.current.currentTime.toString())
        );

        if (
          parseFloat(videoRef.current.currentTime.toString()) >= durationOfVideo
        ) {
          clearVideoInterval();
        }
      }
    }, 1000);

    const clearVideoInterval = () => {
      clearInterval(videoIntervalTime);
    };
  };

  const volumebar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valumValue = parseFloat(e.target.value) / 100;
    setVolumOfVideo(parseFloat(e.target.value));

    if (videoRef.current) {
      videoRef.current.volume = parseFloat(valumValue.toFixed(1));
    }
  };

  const videoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setDurationOfVideo(videoRef.current.duration);
      getDurationOfVideo();
    }
  };

  const videoStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const videoReplay = () => {
    if (videoRef.current) {
      setDurationOfVideo(videoRef.current.duration);
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      getDurationOfVideo();
    }
  };

  const videoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  const videoUnMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
  };

  const setVideoSpeed = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = parseFloat(e.target.value);
    }
  };

  const videoDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentDurationOfVideo(parseFloat(e.target.value));
    if (videoRef.current) {
      videoRef.current.currentTime = parseFloat(e.target.value);
    }
  };

  const stopRecordingWrapper = () => {
    if (stopRecordingRef.current) {
      stopRecordingRef.current();
    }
  };

  const startRecordingWrapper = () => {
    if (startRecordingRef.current) {
      startRecordingRef.current();
    }
  };

  const dawnloadWrapper = async () => {
    if (mediaBlobUrl) {
     setIsLoader(true);
     setIsPredicted(true);
      const fileName = `video-${new Date().getTime()}.webm`;

      // Upload the file to Firebase Storage
      const file = await fetch(mediaBlobUrl).then((res) => res.blob());

      //tosat
      toast.success("Video Uploaded Successfully");

      const url = await uploadFile(file, fileName);



      const data = await GetDetection({
        image_url: url,
        answer: predictedResult.predicted || "",
      });

      if (data.result) {
        setIsPredicted(false);
        setPredictedResult(data);
      
      
      } else {
       ;
        toast.error("Something went wrong");
      }
    }
  };

  const slowDownVideo = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = Math.max(
        0.1,
        videoRef.current.playbackRate - 0.1
      );
    }
  };

  const speedUpVideo = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = Math.min(
        5.0,
        videoRef.current.playbackRate + 0.1
      );
    }
  };

  const resetSpeed = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  };

  return (
    <main className="main-wrapper">
      {isLoader && (
        <CustomizedDialogs
          open={isLoader}
          handleClose={() => setIsLoader(false)}
          videoUrl={mediaBlobUrl}
          predicted={predictedResult.predicted}
          result={predictedResult.result}
          isLoader={isPredicted}
        />
      )}

      <div
        data-barba-namespace="home"
        data-barba="container"
        className="page-content homepage"
      >
        <div className="section is-height-100vh">
          <div className="padding-global">
            <div className="container-medium">
              <div className="padding-section-small">
                <div className="section_component">
                  <div className="button-wrapper is-space-between">
                    <button
                      onClick={() => {
                        navigator(-1);
                      }}
                      className="back-button-wrapper w-inline-block"
                    >
                      <div className="icon-1x1-small w-embed">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 12.5L5 12.5M5 12.5L12 19.5M5 12.5L12 5.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div>Back</div>
                    </button>
                    <a
                      href="/dashboard"
                      className="back-button-wrapper w-inline-block"
                    >
                      <div>Finish Lesson</div>
                      <div className="icon-1x1-small w-embed">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="spacer-2"></div>
                  <h5 className="heading-style-h5">Lesson: 01</h5>
                  <h2 className="heading-style-h3">
                    Review : Practice &quot;
                    {query?.data?.data?.description?.sign}&quot;
                  </h2>
                  <div className="spacer-xsmall"></div>
                  <div className="text-size-regular">
                    {query?.data?.data.overview}
                  </div>
                  <div className="spacer-3"></div>
                  <div className="w-layout-grid grid-2-column is-practice">
                    <div
                      id="w-node-f1604792-fd16-ab48-7fbc-32b3249c9014-2e5c2cb1"
                      className="grid-content-left"
                    >
                      <div className="video-wrapper">
                        <video
                          width="100%"
                          height="100%"
                          src={query?.data?.data.video}
                          ref={videoRef}
                        ></video>
                      </div>
                      <div className="spacer-2"></div>
                      <div className="video-buttons-wrapper">
                        <button
                          onClick={videoReplay}
                          className="video-button-wrapper w-inline-block"
                        >
                          <div className="icon-1x1-small w-embed">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.00001V10M1 10H7M1 10L5.64 5.64001C7.02091 4.26143 8.81245 3.36898 10.7447 3.09713C12.6769 2.82527 14.6451 3.18874 16.3528 4.13277C18.0605 5.0768 19.4152 6.55025 20.2126 8.33111C21.0101 10.112 21.2072 12.1038 20.7742 14.0064C20.3413 15.909 19.3017 17.6194 17.8121 18.8798C16.3226 20.1402 14.4637 20.8824 12.5157 20.9945C10.5677 21.1066 8.63598 20.5826 7.01166 19.5014C5.38734 18.4202 4.15839 16.8404 3.51 15"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </button>
                        <button
                          onClick={videoStop}
                          className="video-button-wrapper w-inline-block"
                        >
                          <div className="icon-1x1-small w-embed">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 4H14V20H10V4ZM16 4H20V20H16V4Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </button>
                        <button
                          onClick={videoPlay}
                          className="video-button-wrapper w-inline-block"
                        >
                          <div className="icon-1x1-small w-embed">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 18L18 12L6 6V18Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </button>

                        <SlowSpeedButton onClick={slowDownVideo} />
                        <NormalButton onClick={speedUpVideo} />
                        <MediumSpeedButton onClick={resetSpeed} />
                      </div>
                    </div>
                    <div
                      id="w-node-f1604792-fd16-ab48-7fbc-32b3249c9015-2e5c2cb1"
                      className="grid-content-right"
                    >
                      <div className="video-wrapper">
                        <ReactMediaRecorder
                          video
                          blobPropertyBag={
                            {
                              type: "video/webm",
                              duration: 1000,
                            } as BlobPropertyBag
                          }
                          audio={audioOnOff}
                          render={({
                            status,
                            startRecording,
                            stopRecording,
                            mediaBlobUrl,
                            previewStream,
                          }) => (
                            <div className="App__mediaRecorderWrapper">
                              {/* <div className="mediaRecorderWrapper__buttons">
                                <div>Status : {status}</div>
                                <div>Keep Mic On: {"" + audioOnOff} </div>
                                <button onClick={startRecording}>
                                  Start Recording
                                </button>
                                <button
                                  onClick={() =>
                                    stopRecordingWrapper(stopRecording)
                                  }
                                >
                                  Stop Recording
                                </button>
                                <button onClick={() => setAudio(!audioOnOff)}>
                                  Mic On or Off
                                </button>
                                {download(mediaBlobUrl)}
                              </div> */}
                              {/* {download(mediaBlobUrl)} */}
                              {(startRecordingRef.current = startRecording)}
                              {(stopRecordingRef.current = stopRecording)}
                              {setMediaBlobUrl(mediaBlobUrl)}

                              {recordedVideo(mediaBlobUrl, status)}
                              {/* {Dwn()} */}
                              {liveStreamWrapper(
                                previewStream,
                                liveStream,
                                status
                              )}
                            </div>
                          )}
                        />
                      </div>
                      <div className="spacer-2"></div>
                      <div className="video-buttons-wrapper">
                        <button
                          onClick={() => startRecordingWrapper()}
                          className="video-button-wrapper w-inline-block"
                        >
                          <div className="icon-1x1-small w-embed">
                            <img src={playCircle} alt="start" />
                          </div>
                        </button>
                        {
                          <button
                            onClick={() => stopRecordingWrapper()}
                            className="video-button-wrapper w-inline-block"
                          >
                            <div className="icon-1x1-small w-embed">
                              <img src={stopVideoIcon} alt="stop" />
                            </div>
                          </button>
                        }
                        {
                         
                            <input 
                            type="text" 
                            placeholder="Enter your prediction"
                            style={{
                              padding: "10px",
                              borderRadius: "5px",
                              border: "1px solid #000",
                              margin: "10px",
                            }}
                           
                            onChange={(e) => {
                              setPredictedResult({
                                ...predictedResult,
                                predicted: e.target.value,
                              });
                            }}
                          />
                 
                          
                        }
                

                        {/* <button
                          onClick={videoReplay}
                          className="video-button-wrapper w-inline-block"
                        >
                          <div className="icon-1x1-small w-embed">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.00001V10M1 10H7M1 10L5.64 5.64001C7.02091 4.26143 8.81245 3.36898 10.7447 3.09713C12.6769 2.82527 14.6451 3.18874 16.3528 4.13277C18.0605 5.0768 19.4152 6.55025 20.2126 8.33111C21.0101 10.112 21.2072 12.1038 20.7742 14.0064C20.3413 15.909 19.3017 17.6194 17.8121 18.8798C16.3226 20.1402 14.4637 20.8824 12.5157 20.9945C10.5677 21.1066 8.63598 20.5826 7.01166 19.5014C5.38734 18.4202 4.15839 16.8404 3.51 15"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </button> */}
                        <button
                          onClick={() => dawnloadWrapper()}
                          style={{
                            cursor: "pointer",
                            backgroundColor: "green",
                            color: "white",
                            padding: "10px",
                            borderRadius: "5px",
                          }}
                          // className="video-button-wrapper w-inline-block"
                        >
                          <div>Submit</div>
                          {/* <div className="icon-1x1-small w-embed">
                            <img src={dawnlodIcon} alt="stop" />
                          </div> */}
                        </button>
                      </div>
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

export default Practice;
