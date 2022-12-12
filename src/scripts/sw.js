/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-restricted-globals */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
import { precacheAndRoute } from "workbox-precaching";

// Do precaching
// eslint-disable-next-line no-underscore-dangle
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("install", () => {
  // eslint-disable-next-line no-console
  console.log("Service Worker: Installed");
  self.skipWaiting();
});

self.addEventListener("push", () => {
  // eslint-disable-next-line no-console
  console.log("Service Worker: Pushed");
});
