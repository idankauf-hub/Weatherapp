
export const storeLocation = (location) => {
    return {
        type:"SetName",
        payload: location
    }
}
export const storeKey = (location) => {
    return{
        type:"SetLocationKey",
        payload: location
        }
}

export const storeFavorite = (location) => {
    return{
        type:"setFavorite",
        payload: location
        }
}
export const deleteFavorite = (location) => {
    return{
        type:"delFavorite",
        payload: location
        }
}

export const isFavorite = (location) => {
    return{
        type:"isFavorite",
        payload: location
        }
}