"use client";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { connect } from "react-redux";
import { ILocation } from "@/interfaces/map";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const Map: React.FC<{ center: ILocation }> = ({ center }) => {
  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
      {<Marker position={center} />}
    </GoogleMap>
  );
};

const mapStateToProps = (state: any) => {
  const data = JSON.parse(JSON.stringify(state.getMapDetails)).location;
  if (data) {
    const lat = data.lat ? data.lat : data.geometry?.location.lat;
    const lng = data.lng ? data.lng : data.geometry?.location.lng;
    return { center: { lat, lng } };
  }
};

export default connect(mapStateToProps)(Map);
