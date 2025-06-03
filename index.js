document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("shoeSizeSlider");
  const output = document.getElementById("shoeSizeValue");

  slider.addEventListener("input", function () {
    output.textContent = this.value;
  });
});
