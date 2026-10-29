
/**
 * Reads what is currently typed into the two boxes.
 * @returns {{ name: string, price: number }}
 */
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

/**
 * Empties both boxes.
 * @returns {void}
 */
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

/**
 * Draws the list from an array of items, replacing whatever was there before.
 * @param {Array<{name: string, price: number}>} items
 * @returns {void}
 */
export function renderList(items) {
  const list = document.querySelector("#list");

  // Remove the old cards first.
  list.innerHTML = "";

  // Create a card for every item.
  items.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceElement = document.createElement("p");
    priceElement.classList.add("price");
    priceElement.textContent = `${item.price} EGP`;

    card.append(heading, priceElement);
    list.append(card);
  });
}

/**
 * Handles the form submission.
 * @returns {void}
 */
export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  // Keep the products in an array.
  const items = [];

  form.addEventListener("submit", (event) => {
    // Stop the browser from reloading the page.
    event.preventDefault();

    // Read the values from the form.
    const { name, price } = readForm();

    // Check that the name is not empty.
    if (!name) {
      error.textContent = "Give the product a name.";
      return;
    }

    // Check that the price is greater than zero.
    if (!document.querySelector("#price").value.trim() ||
        !Number.isFinite(price) ||
        price <= 0) {
      error.textContent = "Give the product a price.";
      return;
    }

    // The information is valid.
    error.textContent = "";

    // Add the new product to the array.
    items.push({ name, price });

    // Redraw the list.
    renderList(items);

    // Empty the form.
    clearForm();
  });
}
