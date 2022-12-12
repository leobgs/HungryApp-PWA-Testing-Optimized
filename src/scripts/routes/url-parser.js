/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    // eslint-disable-next-line quotes
    const urlsSplits = url.split("/");
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (
      // eslint-disable-next-line quotes
      (splitedUrl.resource ? `/${splitedUrl.resource}` : "/") +
      // eslint-disable-next-line quotes
      (splitedUrl.id ? "/:id" : "") +
      // eslint-disable-next-line quotes
      (splitedUrl.verb ? `/${splitedUrl.verb}` : "")
    );
  },
};

export default UrlParser;
