const initialState = {
  favoriteLocations: [],
  name: "Tel Aviv",
  cityKey: "215854",
  isFavorite: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SetName":
      return { ...state, name: action.payload };
    case "SetLocationKey":
      return { ...state, cityKey: action.payload };
    case "setFavorite":
      return {
        ...state,
        favoriteLocations: [
          ...state.favoriteLocations.filter((favoriteLocation) => {
            return favoriteLocation.cityKey !== action.payload.cityKey;
          }),
          action.payload,
        ],
      };
    case "isFavorite":
      return { ...state, isFavorite: action.payload };
    case "delFavorite":
      return {
				...state,
				favoriteLocations: action.payload,
			};
    default:
      return state;
  }
};
export default reducer;
