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
    case "SetFavorite":
      return { ...state, isFavorite: action.payload };
    default:
      return state;
  }
};
export default reducer;