const getCartStored = () => {
  const storeCartString = localStorage.getItem("cart");
  if (storeCartString) {
    return JSON.parse(storeCartString);
  }
  return [];
};

const saveCardLS = (cart) => {
  const cardStringify = JSON.stringify(cart);
  localStorage.setItem("card", cardStringify);
};

const addCardLS = (id) => {
  const cart = getCartStored();
  cart.push(id);
  saveCardLS(cart);
};
export { addCardLS, getCartStored };
