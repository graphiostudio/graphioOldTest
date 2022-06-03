import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";

const MapComponent = () => {
  const ref = useRef(null);
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({
    lat: 18.799191385356014,
    lng: 98.96627047540154,
  });

  useEffect(() => {
    if (ref.current && !map) setMap(new window.google.maps.Map(ref.current));
  }, [ref, map]);

  const createMarker = () => {
    return new window.google.maps.Marker({
      position: center,
      map,
      optimized: true,
    });
  };

  useEffect(() => {
    if (map) {
      map.setOptions({ center, zoom: 16 });
      const marker = createMarker();
    }
  }, [center, map]);

  return <div ref={ref} style={{ width: "100%", height: "100%" }}></div>;
};

const GoogleMaps = () => {
  const render = (status) => {
    if (status === Status.LOADING) return <div>Loading...</div>;
    if (status === Status.FAILTURE) return <div>Failed to load</div>;
    return <div>{status}</div>;
  };
  return (
    <div className="container mx-auto h-[500px] md:h-[670px] md:rounded-lg overflow-hidden">
      <Wrapper
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        render={render}
      >
        <MapComponent />
      </Wrapper>
    </div>
  );
};

export default GoogleMaps;
