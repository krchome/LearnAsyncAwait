async function fetchProductDetails() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = { productId: 101, productName: 'Laptop', price: 1200 };
      resolve(product);
    }, 1000);
  });
}

async function calculateDiscount(product) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const discount = product.price * 0.1;
      resolve(`Discounted price for ${product.productName}: $${product.price - discount}`);
    }, 1000);
  });
}

async function displayDiscountedPrice() {
  const product = await fetchProductDetails();
  const discountInfo = await calculateDiscount(product);
  console.log(discountInfo);
}

displayDiscountedPrice();
