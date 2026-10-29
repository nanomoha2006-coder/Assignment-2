
/**
 * The text of the page's main heading.
 * @returns {string}
 */
export function pageHeading() {
  return document.querySelector("h1").textContent.trim();
}

/**
 * How many product cards are on the page.
 * @returns {number}
 */
export function productCount() {
  return document.querySelectorAll(".card").length;
}

/**
 * The name in every card, in the order they appear.
 * @returns {string[]}
 */
export function productNames() {
  const cards = Array.from(document.querySelectorAll(".card"));

  return cards.map((card) => card.querySelector("h3").textContent.trim());
}

/**
 * The price text shown on the card with that name.
 * @param {string} name
 * @returns {string|null}
 */
export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));

  const card = cards.find(
    (item) => item.querySelector("h3").textContent.trim() === name
  );

  if (!card) {
    return null;
  }

  return card.querySelector(".price").textContent.trim();
}

/**
 * Returns the names of products whose cards have the class "sold-out".
 * @returns {string[]}
 */
export function soldOutNames() {
  const cards = Array.from(document.querySelectorAll(".card.sold-out"));

  return cards.map((card) => card.querySelector("h3").textContent.trim());
}
