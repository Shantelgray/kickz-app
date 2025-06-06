const url = "http://localhost:3000/shoes";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const name = document.getElementById("shoeName");
  const style = document.getElementById("shoeStyle");
  const color = document.getElementById("shoeColor");
  const size = document.getElementById("shoe-size");

  sneakerDetail();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newShoe = {
      name: "",
      style: "",
      color: "",
      size: "",
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newShoe),
    })
      .then((response) => response.json())
      .then(() => {
        sneakerDetail();

        document.getElementById("shoeName").value = "";
        document.getElementById("shoeStyle").value = "";
        document.getElementById("shoeColor").value = "";
        document.getElementById("shoe-size").value = "";
      })
      .catch(error);
  });
});
function sneakerDetail() {
  fetch(url)
    .then((response) => response.json())
    .then((sneakers) => {
      displaySneakers(sneakers);
    })
    .catch(error);
}
function displaySneakers(sneakers) {
  const container = document.getElementById("output") || document.body;
  container.innerHTML = "";

  const ol = document.createElement("ol");

  for (const shoe of sneakers) {
    const li = document.createElement("li");
    const name = shoe.name;
    const style = shoe.style;
    const color = shoe.color;
    const size = shoe.size;

    li.textContent = `${shoe.name} - ${shoe.style} - ${shoe.color} - size ${shoe.size}`;

    ol.appendChild(li);
  }

  container.appendChild(ol);
}
