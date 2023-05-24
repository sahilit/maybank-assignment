"use client";
import React, { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import { getMapDetails } from "@/actions/map";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const options = {
  fields: ["address_components", "geometry", "formatted_address", "name"],
  types: ["geocode", "establishment"],
};

function SearchBar() {
  const dispatch: any = useDispatch();
  const [query, setQuery] = useState("");

  const autoCompleteRef = useRef<any>(null);
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handlePlaceChanged = async () => {
    const place = await autoCompleteRef.current.getPlace();
    setQuery(place.formatted_address);
    if (place.formatted_address) {
      dispatch(getMapDetails(place));
    }
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );

    autoCompleteRef.current.addListener("place_changed", handlePlaceChanged);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TextField
      style={{ maxWidth: 500, width: "100%" }}
      inputRef={inputRef}
      onChange={(event) => setQuery(event.target.value)}
      value={query}
      label="Search a Location"
      variant="outlined"
    />
  );
}

const mapDispatchToProps = {
  getMapDetails,
};

export default connect(null, mapDispatchToProps)(SearchBar);
