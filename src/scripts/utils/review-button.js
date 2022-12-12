/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import { createCustumerReviews } from "../views/templates/template-creator";

const ReviewButtonInitiator = {
  init({ button, panel, arrow, reviews }) {
    button.addEventListener("click", (event) => {
      // eslint-disable-next-line no-underscore-dangle
      this._toggle(event, panel, arrow);
    });

    createCustumerReviews(reviews, panel);
  },

  // eslint-disable-next-line no-underscore-dangle
  _toggle(event, panel, arrow) {
    event.stopPropagation();
    panel.classList.toggle("hide");
    arrow.classList.toggle("arrowup");
  },
};

export default ReviewButtonInitiator;
