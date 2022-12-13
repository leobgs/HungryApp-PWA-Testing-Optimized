const assert = require("assert");

Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorites");
});

Scenario("showing empty favorite restaurant", ({ I }) => {
  I.seeElement(".list");
  I.see("Not Found. Please add your favorite restaurant!", ".empty-db");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.see("Not Found. Please add your favorite restaurant!", ".empty-db");

  I.amOnPage("/");
  I.waitForElement(".resto-detail", 15);
  I.seeElement(".resto-detail");

  const firstRestaurant = locate("a.resto-detail").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorites");
  I.seeElement(".restoran");
  const likedRestaurantTitle = await I.grabTextFrom("a.resto-detail");
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario("Unliking one restaurant", async ({ I }) => {
  I.amOnPage("/");
  I.waitForElement(".resto-detail", 15);
  I.seeElement(".resto-detail");
  const firstRestaurant = locate("a.resto-detail").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorites");
  I.seeElement(".list");
  const likedRestaurantTitle = await I.grabTextFrom("a.resto-detail");
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.seeElement(".restoran");
  const likedTitle = await I.grabTextFrom(".resto-detail");
  I.click(likedTitle);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorites");
  I.seeElement(".list");
  I.see("Not Found. Please add your favorite restaurant!", ".empty-db");
});
