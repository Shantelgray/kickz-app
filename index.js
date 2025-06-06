const url = "http://localhost:3000/shoes";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const name = document.getElementById("shoeName");
  const style = document.getElementById("shoeStyle");
  const color = document.getElementById("shoeColor");
  const size = document.getElementById("shoe-size");
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchButton.click();
    }
  });

  searchButton.addEventListener("click", (event) => {
    event.preventDefault();

    fetch(url)
      .then((response) => response.json())
      .then((shoes) => {
        const filteredShoes = shoes.filter((shoe) =>
          shoe.name.toLowerCase().includes(searchInput.value.toLowerCase())
        );
        displaySneakers(filteredShoes);
      });
  });

  sneakerDetail();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newShoe = {
      name: name.value,
      style: style.value,
      color: color.value,
      size: size.value,
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
      });
  });
});

const sneakerDetail = () => {
  fetch(url)
    .then((response) => response.json())
    .then((sneakers) => {
      displaySneakers(sneakers);
    });
};

const displaySneakers = (sneakers) => {
  const container = document.getElementById("output") || document.body;
  container.innerHTML = "";

  const scrollBar = document.createElement("div");
  scrollBar.className = "sneaker-scroll-bar";

  const ol = document.createElement("ol");
  ol.className = "sneaker-list";

  sneakers.forEach((shoe) => {
    const li = document.createElement("li");
    const name = shoe.name;
    const style = shoe.style;
    const color = shoe.color;
    const size = shoe.size;

    li.innerHTML = `${shoe.name} - ${shoe.style} - ${shoe.color} - size ${shoe.size}`;

    ol.appendChild(li);
  });

  scrollBar.appendChild(ol);

  container.appendChild(scrollBar);
};
