const cartBtn = document.querySelector(".cart-button");

cartBtn.addEventListener("click", () => {
  cartBtn.classList.add("clicked");

  setTimeout(() => {
    cartBtn.classList.remove("clicked");
  }, 5000);
});
