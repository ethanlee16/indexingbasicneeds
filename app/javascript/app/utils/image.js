import LoadingPlaceholder from "images/placeholder-square.jpg";
import Placeholder from "images/bear.png";

/**
 * `getResourceImage` returns the `src` of an open-graph image at the
 * desired url, or the default placeholder if it can't be found.
 *
 * @param {string} url
 */
async function getResourceImage(url) {
  let html;
  try {
    let response = await fetch(url, {
      mode: "no-cors",
    });
    if (!response.ok) {
      throw response;
    }
    html = await response.text();
  } catch (error) {
    return Placeholder;
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Parse the HTML for the possible image tags
  let element = doc.querySelector('meta[property~="og:image"]');
  if (!element) {
    element = doc.querySelector('meta[property~="twitter:image"]');
  }
  if (!element) {
    return Placeholder;
  }
  return element.getAttribute("content") || Placeholder;
}

export { getResourceImage };
