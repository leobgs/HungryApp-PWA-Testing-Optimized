import LikeButtonInitiator from "../src/scripts/utils/like-button-initiator";
import FavoriteRestoIdb from "../src/scripts/data/favaorite-restaurant-idb";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe("Unliking A Restaurant", () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteRestaurant(1);
  });

  fit("should display unlike widget when the restaurant has been liked", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="unlike this resto"]')
    ).toBeTruthy();
  });

  fit("should not display like widget when the restaurant has been liked", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="like this resto"]')
    ).toBeFalsy();
  });

  fit("should be able to remove liked restaurant from the list", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: 1,
      },
    });

    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([]);
  });

  fit("should not throw error if the unliked restaurant is not in the list", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: 1,
      },
    });

    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestoIdb.deleteRestaurant(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestoIdb.getAllRestaurants()).toEqual([]);
  });
});
