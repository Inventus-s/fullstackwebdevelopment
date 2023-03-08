const inventory = {
    "item1": 24, // price in USD
    "item2": 10,
    "item3": 15
}

const exchange = 80; // 1 USD = 80 Rupees

const inventoryInRupees = Object.fromEntries(
    Object.entries(inventory).map(([item, price])=> [item, price * exchange]));

console.log(inventoryInRupees);