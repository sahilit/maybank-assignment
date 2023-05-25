import { GET_LOCATION_COORDINATES, GET_LIVE_LOCATION_COORDINATES } from "@/actionTypes/map";
import { ILocation } from "@/interfaces/map";

export const getMapDetails = (data: ILocation) =>  {
    return (dispatch: (arg: { type: string; payload: any; }) => void) => {
        dispatch({
            type: GET_LOCATION_COORDINATES,
            payload: data
        });
    };
}

export const getLiveLocation = (data: ILocation) =>  {
    return (dispatch: (arg: { type: string; payload: any; }) => void) => {
        dispatch({
            type: GET_LIVE_LOCATION_COORDINATES,
            payload: data
        });
    };
}