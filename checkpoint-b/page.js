
import { items } from "./items.js";
/**
 * Draws items into the list, replacing the old items.
 * @param {Array} list
 */
export function renderItems(list) {
  const container = document.querySelector("#list");

  container.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");

    li.classList.add("goods-item");
    li.textContent = `${item.name} - ${item.price} EGP`;

    container.append(li);
  });
}

/**
 * Returns only stationery items.
 * @returns {Array}
 */
export function matching() {
  return items.filter((item) => item.category === "stationery");
}

/**
 * Displays all items and sets up the button.
 */
export function start() {
  renderItems(items);

  document.querySelector("#select").addEventListener("click", () => {
    renderItems(matching());
  });
}

