import { useAppDispatch } from "@hooks/Redux";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { coordinates, setIsDropDown } from "@redux/OrderSlice";
import { getGeocode } from "use-places-autocomplete";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

interface IGoogleMapViewProps {
  lat: number;
  lng: number;
  setLocationUpdate: (coords: coordinates) => void;
  setAddresUpdate: (address: google.maps.GeocoderResult) => void;
}

export default function GoogleMapView({
  lat,
  lng,
  setLocationUpdate,
  setAddresUpdate,
}: IGoogleMapViewProps) {
  const dispatch = useAppDispatch();
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return (
      <div>
        {" "}
        <svg
          width="56"
          height="57"
          viewBox="0 0 56 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.75 23.25C43.75 19.0728 42.0906 15.0668 39.1369 12.1131C36.1832 9.15937 32.1772 7.5 28 7.5C23.8228 7.5 19.8168 9.15937 16.8631 12.1131C13.9094 15.0668 12.25 19.0728 12.25 23.25C12.25 29.711 17.4195 38.132 28 48.219C38.5805 38.132 43.75 29.711 43.75 23.25ZM28 53C15.1655 41.3345 8.75 31.4155 8.75 23.25C8.75 18.1446 10.7781 13.2483 14.3882 9.6382C17.9983 6.02812 22.8946 4 28 4C33.1054 4 38.0017 6.02812 41.6118 9.6382C45.2219 13.2483 47.25 18.1446 47.25 23.25C47.25 31.4155 40.8345 41.3345 28 53Z"
            fill="#FF6060"
          ></path>
          <path
            d="M28 28.5C29.3924 28.5 30.7277 27.9469 31.7123 26.9623C32.6969 25.9777 33.25 24.6424 33.25 23.25C33.25 21.8576 32.6969 20.5223 31.7123 19.5377C30.7277 18.5531 29.3924 18 28 18C26.6076 18 25.2723 18.5531 24.2877 19.5377C23.3031 20.5223 22.75 21.8576 22.75 23.25C22.75 24.6424 23.3031 25.9777 24.2877 26.9623C25.2723 27.9469 26.6076 28.5 28 28.5ZM28 32C25.6794 32 23.4538 31.0781 21.8128 29.4372C20.1719 27.7962 19.25 25.5706 19.25 23.25C19.25 20.9294 20.1719 18.7038 21.8128 17.0628C23.4538 15.4219 25.6794 14.5 28 14.5C30.3206 14.5 32.5462 15.4219 34.1872 17.0628C35.8281 18.7038 36.75 20.9294 36.75 23.25C36.75 25.5706 35.8281 27.7962 34.1872 29.4372C32.5462 31.0781 30.3206 32 28 32Z"
            fill="#FF6060"
          ></path>
        </svg>{" "}
      </div>
    );
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={{
          lat: lat,
          lng: lng,
        }}
        options={{
          minZoom: 9,
          styles: [
            {
              elementType: "geometry",
              stylers: [
                {
                  color: "#f5f5f5",
                },
              ],
            },
            {
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#616161",
                },
              ],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#f5f5f5",
                },
              ],
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "labels",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#bdbdbd",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                {
                  color: "#eeeeee",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [
                {
                  color: "#e5e5e5",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                {
                  color: "#ffffff",
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [
                {
                  color: "#dadada",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#616161",
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "labels",
              stylers: [],
            },
            {
              featureType: "road.local",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e",
                },
              ],
            },
            {
              featureType: "transit.line",
              elementType: "geometry",
              stylers: [
                {
                  color: "#e5e5e5",
                },
              ],
            },
            {
              featureType: "transit.station",
              elementType: "geometry",
              stylers: [
                {
                  color: "#eeeeee",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#c9c9c9",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e",
                },
              ],
            },
          ],
          // restriction:{
          //   latLngBounds: {
          //     north: 113.338953078,
          //     south: -43.6345972634,
          //     west: 153.569469029,
          //     east: -10.6681857235,
          //   },
          //   strictBounds: true
          // }
        }}
      >
        {isLoaded && (
          <MarkerF
            draggable
            // icon={svgMarker}
            onDragEnd={(e: any) => {
              getGeocode({ location: e.latLng }).then((results) => {
                dispatch(setIsDropDown(false));
                setAddresUpdate(results[0]);
              });
              setLocationUpdate({ lat: e.latLng.lat(), lng: e.latLng.lng() });
            }}
            position={{
              lat: lat,
              lng: lng,
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
}
