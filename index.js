document.addEventListener("DOMContentLoaded", () => {
  const shoeSizes = [6, 6.5, 7, 7.5];
  const selectSize = document.getElementsById("shoe-size");
});
fetch("http://localhost:3000")
  .then((res) => res.json())
  .then((sneakers) => {
    sneakers.forEach((sneaker) => {
      const options = shoeSizes.map((size) => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        return option;
      });
    });
  });
