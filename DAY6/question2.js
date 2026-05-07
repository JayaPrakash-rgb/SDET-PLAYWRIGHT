const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" }
];

const isEligible = (product) => {                                                  //Callback (isEligible)
  return product.category === "Electronics" && product.price > 200;
};

function applyPromo(cartArray, promoCallback) {                                                   //aplypromo pipline
  let discountCount = 0;
  let totalSavings = 0;
  const updatedCart = cartArray.map(item => {
    if (promoCallback(item)) {
      const originalPrice = item.price;
      const newPrice = originalPrice * 0.9; // Reduce by 10%
      discountCount++;
      totalSavings += (originalPrice - newPrice);                                            //price transformation

      return { 
        ...item, 
        price: newPrice, 
        isDiscounted: true 
      };
    }
    return {                                                                                 // For non-eligible items
      ...item, 
      isDiscounted: false 
    };
  });

  console.log(`Promotion applied! ${discountCount} items were discounted for a total saving of $${totalSavings}.`); //(Template Literal)
  setTimeout(() => {
    console.log("Server calculation complete. Returning updated cart.");
    return updatedCart;}, 1000);
}

applyPromo(cart, isEligible);