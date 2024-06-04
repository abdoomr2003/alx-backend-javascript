/*
  10-update_uniq_items.js

  Function that returns an updated map for all items with initial quantity at 1.
*/

export default function updateUniqueItems(groceriesMap) {
  // Check if groceriesMap is an instance of Map
  if (!(groceriesMap instanceof Map)) {
    // Throw an error if groceriesMap is not an instance of Map
    throw new Error('Cannot process');
  }

  // Iterate over the groceriesMap
  groceriesMap.forEach((quantity, item) => {
    // Check if the quantity is equal to 1
    if (quantity === 1) {
      // Update the quantity of the item to 100
      groceriesMap.set(item, 100);
    }
  });

  // Return the updated groceriesMap
  return groceriesMap;
}
