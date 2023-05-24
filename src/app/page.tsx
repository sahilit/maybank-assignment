"use client";
import { Provider } from "react-redux";
import Grid from "@mui/material/Grid";
import store from "@/store";

import LayOut from "@/components/LayOut";
import SearchBar from "@/components/SearchBar";
import MapComponent from "@/components/Map";
import SearchHistory from "@/components/SearchHistory";

export default function Home() {
  return (
    <Provider store={store}>
      <LayOut text={"Google Places"}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <SearchBar />
            <SearchHistory />
          </Grid>
          <Grid item md={8} xs={12}>
            <MapComponent />
          </Grid>
        </Grid>
      </LayOut>
    </Provider>
  );
}
