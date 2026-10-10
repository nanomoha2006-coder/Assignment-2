
import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Load every order from the database.
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Return orders from Cairo that are cancelled.
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Cairo" && order.status === "cancelled"
  );
}

// 3. Add up the quantity of every order.
export function summarize(orders) {
  return orders.reduce((total, order) => total + order.quantity, 0);
}

// 4. Find one order and return its description.
// If the lookup fails, return the required error message.
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch (error) {
    return `Order ${id} not found`;
  }
}

// 5. Keep only item and price, then convert the array to JSON text.
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({
      item: order.item,
      price: order.price
    }))
  );
}