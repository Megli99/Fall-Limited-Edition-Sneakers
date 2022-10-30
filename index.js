let image1 = $(".immage1");
let image2 = $(".immage2");
let image3 = $(".immage3");
let image4 = $(".immage4");

$(document).ready(function () {
  $("#hide").addClass("hide");
});

$(".shop").on("click", function () {
  $(".hide").toggle();
});

image1.on("click", function () {
  $(".firstPhoto").attr(
    "src",
    "https://yasertarek.github.io/ecommerce-product-page/images/image-product-1.jpg"
  );
  image1.css({ opacity: "0.5", border: "2px solid rgb(247, 162, 5)" });
  image4.css({ opacity: "1", border: "2px solid transparent" });
  image2.css({ opacity: "1", border: "2px solid transparent" });
  image3.css({ opacity: "1", border: "2px solid transparent" });
});

image2.on("click", function () {
  $(".firstPhoto").attr(
    "src",
    "https://yasertarek.github.io/ecommerce-product-page/images/image-product-2.jpg"
  );
  image2.css({ opacity: "0.5", border: "2px solid rgb(247, 162, 5)" });
  image1.css({ opacity: "1", border: "2px solid transparent" });
  image4.css({ opacity: "1", border: "2px solid transparent" });
  image3.css({ opacity: "1", border: "2px solid transparent" });
});

image3.on("click", function () {
  $(".firstPhoto").attr(
    "src",
    "https://yasertarek.github.io/ecommerce-product-page/images/image-product-3.jpg"
  );
  image3.css({ opacity: "0.5", border: "2px solid rgb(247, 162, 5)" });
  image1.css({ opacity: "1", border: "2px solid transparent" });
  image2.css({ opacity: "1", border: "2px solid transparent" });
  image4.css({ opacity: "1", border: "2px solid transparent" });
});

image4.on("click", function () {
  $(".firstPhoto").attr(
    "src",
    "https://yasertarek.github.io/ecommerce-product-page/images/image-product-4.jpg"
  );
  image4.css({ opacity: "0.5", border: "2px solid rgb(247, 162, 5)" });
  image1.css({ opacity: "1", border: "2px solid transparent" });
  image2.css({ opacity: "1", border: "2px solid transparent" });
  image3.css({ opacity: "1", border: "2px solid transparent" });
});

let input = document.querySelector(".input");
let numberInside = document.querySelector(".numberInside");
let number = document.querySelector(".number");
let up = document.querySelector(".up");
let span = document.querySelector("span");
let strong = document.querySelector("strong");
let ccount = 0;
let trash = $(".trash");

$(".add").click(function () {
  if (input.innerHTML > 0) {
    number.style.display = "inline";
    numberInside.innerHTML = input.innerHTML;
    up.style.display = "inline";
    span.innerHTML = numberInside.innerHTML;
    strong.innerHTML = ccount = "$" + 125 * numberInside.innerHTML;
  } else {
    alert("You cant buy 0 of this product");
    number.style.display = "none";
    up.style.display = "none";
  }
});

trash.click(function () {
  up.style.display = "none";
  number.style.display = "none";
});

let increase = document.querySelector(".plus");
let vlera = document.querySelector(".input");
let dicrement = document.querySelector(".minus");
let count = 0;

function display() {
  vlera.innerHTML = count;
}

display();

increase.addEventListener("click", function () {
  count++;
  display();
  dicrement.disabled = false;
});

dicrement.addEventListener("click", function () {
  count--;
  display();

  if (input.innerHTML == 0) {
    dicrement.disabled = true;
  }
});
