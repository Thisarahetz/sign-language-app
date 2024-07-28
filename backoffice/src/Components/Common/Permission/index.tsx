"use client";
import React, { useEffect } from "react";
import LocationAlert from "../Alert/Location";
import { getGeocode } from "use-places-autocomplete";
import { coordinates, setIsDropDown } from "@redux/OrderSlice";
import { useAppDispatch } from "@hooks/Redux";
import { toast } from "sonner";

interface Props {
  defaultRequestPermission?: boolean;
  requestPermissionOnRequest?: boolean;
  setLocation: (location: coordinates) => void;
  setAddresUpdate: (address: google.maps.GeocoderResult) => void;
  closePopup: () => void;
}

export default function PermissionRequest({
  defaultRequestPermission = true,
  requestPermissionOnRequest = false,
  setLocation,
  setAddresUpdate,
  closePopup,
}: Props) {
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  //   const {setIsDropDown} = useLocationStore((state) => state);
  const [isDenied, setIsDenied] = React.useState(false);
  const setLocationDetails = (coords: coordinates) => {
    getGeocode({ location: coords }).then((results) => {
      if (results.length > 0) {
        dispatch(setIsDropDown(false));
        setLocation(coords);
        setAddresUpdate(results[0]);
      }
    });
  };

  const checkPermission = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            setIsDenied(false);
            navigator.geolocation.getCurrentPosition((position) => {
              setLocationDetails({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            });
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition((position) => {
              setLocationDetails({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            });
          } else if (result.state === "denied") {
            setIsDenied(true);

            toast.error(
              "Location access is required for the full functionality of this web application. Please enable location services in your browser settings and try again. "
            );
            closePopup();
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (defaultRequestPermission) {
      checkPermission();
      // setIsAlertOpen(true);
    }
    if (requestPermissionOnRequest) {
      checkPermission();
    }

    if (isDenied) {
      closePopup();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestPermissionOnRequest, isDenied]);

  return (
    <LocationAlert
      onYesClick={() => {
        setIsAlertOpen(false);
      }}
      onOpenChange={() => setIsAlertOpen(false)}
      open={isAlertOpen}
    />
  );
}
