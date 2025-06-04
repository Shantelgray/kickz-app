document.addEventListener("DOMContentLoaded", () => {
  const submitForm = document.querySelector("#shoeName");
  submitForm.addEventListener("submit", function (submitEvent) {
    submitEvent.preventDefault();
    const shoeSizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];
    const selectSize = document.getElementsById("shoe-size");
  });
});
fetch("http://localhost:3000/shoes")
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
