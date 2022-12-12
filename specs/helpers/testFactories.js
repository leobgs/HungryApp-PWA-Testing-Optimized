import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";
import FavoriteRestoIdb from "../../src/scripts/data/favaorite-restaurant-idb";

const createLikeButtonInitiatorWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteRestaurants: FavoriteRestoIdb,
    restaurant,
  });
};

export { createLikeButtonInitiatorWithRestaurant };
