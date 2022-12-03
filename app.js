"use strict";

let price = 16.0;
let pageview = document.querySelector(".selected-pageview");
let slider = document.getElementById("slider");
let monthly = document.querySelector(".monthly");
let yearly = document.querySelector(".monthly-1");
let checkBox = document.getElementById("checkk");

checkBox.addEventListener("click", function () {
  checkBox.classList.toggle("active");
  if (checkBox.classList[1] == "active") {
    let yearlyPrice = (price * 12 * 0.75).toFixed(2);
    monthly.innerText = "$" + yearlyPrice;
    yearly.innerText = "/year";
  } else {
    monthly.innerText = "$" + price.toFixed(2);
    yearly.innerText = "/month";
  }
});

slider.addEventListener("input", () => {
  let x = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  let color = `linear-gradient(to right, hsl(174, 77%, 80%) ${x}%, hsl(174, 77%, 80%) ${x}%,
    hsl(224, 65%, 95%) ${x}%, hsl(224, 65%, 95%) ${x}%)`;
  slider.style.background = color;
  viewRanges(slider.value);
});

function viewRanges(value) {
  switch (value) {
    case "0":
      price = 8;
      changeRanges("10K PAGEVIEWS");
      break;
    case "1":
      price = 12;
      changeRanges("50K PAGEVIEWS");
      break;
    case "2":
      price = 16;
      changeRanges("100K PAGEVIEWS");
      break;
    case "3":
      price = 24;
      changeRanges("500K PAGEVIEWS");
      break;
    case "4":
      price = 36;
      changeRanges("1M PAGEVIEWS");
      break;
  }
}

function changeRanges(pageviews) {
  pageview.innerText = pageviews;
  if (checkBox.classList[1] == "active") {
    monthly.innerText = `$${price * 12 * 0.75}.00`;
  } else {
    monthly.innerText = `$${price}.00`;
  }
}
