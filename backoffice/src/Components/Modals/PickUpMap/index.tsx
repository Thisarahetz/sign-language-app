import CustomModal from "@components/Common/Modals";
import PermissionRequest from "@components/Common/Permission";
import LocationDropDown from "@components/LocationSuggestion";
import GoogleMapView from "@components/Map";
import { useAppDispatch, useAppSelector } from "@hooks/Redux";
import {
  coordinates,
  setDropOffLocation,
  setLocalDropOffAddress,
  setLocalPickUpAddress,
  setPickUpAddress,
  setPickUpLocation,
} from "@redux/OrderSlice";
import { DefaultLocationLatLng } from "@utils/index";
import { useEffect, useState } from "react";

interface LocationPickupModelProps {
  open: boolean;
  onClose: () => void;
}
export default function LocationPickUpModel({
  open,
  onClose,
}: LocationPickupModelProps) {
  const { pickup_location, local_pickUp_address } = useAppSelector(
    (state) => state.order
  );
  const dispatch = useAppDispatch();
  const [requestPermission, setRequestPermission] = useState(false);
  const handleLocationUpdate = (coords: coordinates) => {
    dispatch(setPickUpLocation(coords));
  };

  const handleAddressUpdate = (address: google.maps.GeocoderResult) => {
    dispatch(setLocalPickUpAddress(address));
  };

  function getLongNamesAsString(data: any): string {
    // Extract long names starting from index 1
    const longNames: string[] = data
      ?.slice(1)
      .map((entry: any) => entry.long_name);

    // Join the long names into a single string
    const longNamesAsString: string = longNames.join(", ");

    return longNamesAsString;
  }

  useEffect(() => {
    dispatch(
      setPickUpAddress(
        local_pickUp_address
          ? getLongNamesAsString(local_pickUp_address?.address_components)
          : ""
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [local_pickUp_address]);

  return (
    <CustomModal close={onClose} open={open} modalTitle="Drop Off">
      <div className="pickup-modal-wrapper">
        <div
          onClick={() => onClose()}
          className="popup-close-btn w-inline-block"
        >
          <div className="icon-1x1-small w-embed">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM10.2803 9.21967C9.98744 8.92678 9.51256 8.92678 9.21967 9.21967C8.92678 9.51256 8.92678 9.98744 9.21967 10.2803L10.9393 12L9.21967 13.7197C8.92678 14.0126 8.92678 14.4874 9.21967 14.7803C9.51256 15.0732 9.98744 15.0732 10.2803 14.7803L12 13.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L13.0607 12L14.7803 10.2803C15.0732 9.98744 15.0732 9.51256 14.7803 9.21967C14.4874 8.92678 14.0126 8.92678 13.7197 9.21967L12 10.9393L10.2803 9.21967Z"
                fill="#0F172A"
              ></path>
            </svg>
          </div>
        </div>
        <div className="w-layout-grid grid-2-column is-modal">
          <div
            id="w-node-_7390eab2-db27-007d-3dcc-7eca5bd3b2fe-9bfdddd0"
            className="grid-content-left is-popup space-between-none"
          >
            <div className="form-inner-wrapper">
              <h5 className="text_24 weight_700">Confirm pick up location</h5>

              <h5 className="13 weight_500">
                We need your location to dispatch the closest service provider.
              </h5>
            </div>
            <form className="form-wrapper">
              <div
                id="w-node-befacf99-6b71-5950-d6d3-82f271354c33-9bfdddd0"
                className="form-inner-wrapper align-center"
              >
                <div
                  id="w-node-befacf99-6b71-5950-d6d3-82f271354c34-9bfdddd0"
                  className="button is-form-inner-button cursor-pointer"
                  onClick={() => setRequestPermission((prev) => !prev)}
                >
                  <div className="flex-horizontal-0-5">
                    <div className="icon-1x1-small w-embed">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.5 4C8.63401 4 5.5 7.13401 5.5 11C5.5 13.2061 6.83607 15.268 8.70492 16.8876L12.1463 19.8702C12.3493 20.0461 12.6507 20.0461 12.8537 19.8702L16.2951 16.8876C18.1639 15.268 19.5 13.2061 19.5 11C19.5 7.13401 16.366 4 12.5 4ZM3.5 11C3.5 6.02944 7.52944 2 12.5 2C17.4706 2 21.5 6.02944 21.5 11C21.5 14.0264 19.6902 16.5918 17.6049 18.399L14.1635 21.3816C13.2088 22.209 11.7912 22.209 10.8365 21.3816L7.39505 18.399C5.30977 16.5918 3.5 14.0264 3.5 11Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M14.5 11C14.5 12.1046 13.6046 13 12.5 13C11.3954 13 10.5 12.1046 10.5 11C10.5 9.89543 11.3954 9 12.5 9C13.6046 9 14.5 9.89543 14.5 11Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <div>Find me</div>
                  </div>
                </div>
                <div className="text-size-regular text-weight-medium">Or</div>

                <LocationDropDown
                is_dropOff={false}
                  setAddresUpdate={handleAddressUpdate}
                  setLocationCoords={handleLocationUpdate}
                  address={
                    local_pickUp_address
                      ? getLongNamesAsString(
                          local_pickUp_address?.address_components
                        )
                      : undefined
                  }
                />
              </div>
              <input
                id="w-node-befacf99-6b71-5950-d6d3-82f271354c3c-9bfdddd0"
                className="btn_base"
                type="button"
                value="Confirm Location"
                onClick={() => onClose()}
              />
            </form>
          </div>
          <div
            id="w-node-_7390eab2-db27-007d-3dcc-7eca5bd3b314-9bfdddd0"
            className="grid-content-right is-popup"
          >
            <div className="map-wrapper">
              <div className="map-default-wrapper">
                <div className="map-location-inner-wrapper">
                  <div className="map-location-outer_border-wrapper">
                    <div className="image-wrapper is-map-location">
                      <div className="icon-1x1-large w-embed">
                        <GoogleMapView
                          lat={
                            pickup_location.lat === 0
                              ? DefaultLocationLatLng.lat
                              : pickup_location.lat
                          }
                          lng={
                            pickup_location.lng === 0
                              ? DefaultLocationLatLng.lng
                              : pickup_location.lng
                          }
                          setLocationUpdate={handleLocationUpdate}
                          setAddresUpdate={handleAddressUpdate}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PermissionRequest
        defaultRequestPermission={true}
        requestPermissionOnRequest={requestPermission}
        setLocation={handleLocationUpdate}
        setAddresUpdate={handleAddressUpdate}
        closePopup={() => {
          onClose();
        }}
      />
    </CustomModal>
  );
}
