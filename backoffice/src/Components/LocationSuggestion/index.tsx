"use client";

import { useAppDispatch, useAppSelector } from "@hooks/Redux";
import { coordinates, setIsDropDown } from "@redux/OrderSlice";
import { useRef } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

interface IProps {
  is_dropOff?: boolean;
  setLocationCoords: (location: coordinates) => void;
  setAddresUpdate: (address: google.maps.GeocoderResult) => void;
  address?: string;
}

export default function LocationDropDown({
  setLocationCoords,
  address,
  setAddresUpdate,
  is_dropOff,
}: IProps) {
  const ref = useRef(null);
  const dispatch = useAppDispatch();
  const { is_dropDown } = useAppSelector((state) => state.order);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
    cache: 24 * 60 * 60 * 1000,
    requestOptions: {
      componentRestrictions: {
        // country: "aus",
        country: "lk",
      },
    },
  });

  const handleClickOutside = () => {
    console.log("clicked outside");
    clearSuggestions();
  };

  const handleInput = (e: any) => {
    dispatch(setIsDropDown(true));
    // Update the keyword of the input element

    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: any) =>
    () => {
      // When the user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();
      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const coords = getLatLng(results[0]);
        // set location coords
        setLocationCoords({
          lat: coords.lat,
          lng: coords.lng,
        });
        setAddresUpdate(results[0]);
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },

      } = suggestion;

      return (
        <div
          className="dropdown-option-wrapper"
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <div>
            {main_text}
            {secondary_text}
          </div>
        </div>
      );
    });

  //   //clear suggestions when clicked outside of the input
  //   useOnClickOutside(ref, handleClickOutside);

  return (
    <div
      id="w-node-_78f0f0e8-af86-5821-8c4a-b5faa839fc6f-93a7aacb"
      className="form-inner-wrapper"
    >
      <input
        id="w-node-_78f0f0e8-af86-5821-8c4a-b5faa839fc70-93a7aacb"
        className="form_input is-with-bg_img"
        ref={ref}
        type="text"
        name="location"
        placeholder={is_dropOff ? "Enter drop off location" : "Enter pick up location"}
        value={is_dropDown ? value : address}
        disabled={!ready}
        onChange={handleInput}
      />
      {status === "OK" && (
        <div className="dropdown-options-wrapper">{renderSuggestions()}</div>
      )}
    </div>
  );
}
