import { GET_LOCATION_COORDINATES } from "@/actionTypes/map";
import { ILocation } from "@/interfaces/map";

interface IInitialState {
    loading: boolean;
    location: ILocation;
    searchHistory: string[];
}

interface IAction {
    type: string;
    payload: any;
}

const initialState: IInitialState = {
    loading: false,
    location: { lat: 19.422278109361613, lng: 72.81292141003995 },
    searchHistory: []
};
  
export function getMapDetails(state: IInitialState = initialState, action: IAction) {
    switch (action.type) {
        case GET_LOCATION_COORDINATES:
            return {
                location: action.payload,
                loading: true,
                searchHistory: [...state.searchHistory, action.payload?.formatted_address],
            };
  
        default:
            return state;
    }
}