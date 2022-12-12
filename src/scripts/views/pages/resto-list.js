/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import RestaurantDbSource from "../../data/restaurantdb-source";
import {
  createRestaurantItem,
  createSkeletonTemplate,
} from "../templates/template-creator";

const RestoList = {
  async render() {
    return `
    <section class="hero">
    <div class="hero__inner">
    <h1 class="hero__title">Find a Restaurants To Your Liking</h1>
    <p class="hero__tagline">
      Make a restaurant where you spend your money and a place to work, the
      guest is the king but the owner is the emperor
    </p>
  </div>
    </section>
    <section class="list">
      <div class="list-title">
        <h2>Explore Restaurants</h2>
      </div>
      <div class="container">${createSkeletonTemplate(21)}</div>
    </section>
  `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restoContainer = document.querySelector(".container");
    restoContainer.innerHTML = "";
    restaurants.forEach((restaurant) => {
      restoContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default RestoList;
