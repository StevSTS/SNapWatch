import { atom } from "recoil";


let watchList = []

if (localStorage.getItem("Favourite")) {
    watchList = JSON.parse(localStorage.getItem("Favourite"))
}

const FavouriteMovies = atom({
    key: 'Cart',
    default: watchList,
});

export default FavouriteMovies