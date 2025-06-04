const url = "http://localhost:3000/shoes";
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const style = document.querySelector("#shoeStyle");
  const name = document.getElementById("shoeName");
  const shoeColor = document.getElementById("shoeColor");
  const size = document.getElementById("shoe-size");

  form.addEventListener("submit", function (submitEvent) {
    submitEvent.preventDefault();

    // get all form input values
    // function sneakerDetail(details) {
    //   const form = document.querySelector("form[name=myForm]");
    //   const shoeName = document.querySelector('input[name="shoeName"]').value;
    //   const style = document.querySelector('select[name="shoeStyle"]').value;
    //   const color = document.querySelector('select[name="shoeColor"]').value;
    //   const size = document.querySelector('select[name="shoe-size"]').value;
    // }
    // send POST request with values to save in db.json
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        style: style.value,
        color: shoeColor.value,
        size: size.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
});

// fetch("http://localhost:3000/shoes")
//
