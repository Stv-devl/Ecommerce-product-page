/********************************Variables*******************************/
const pricePopup = document.querySelector(".price-popup");
const popupContainer = document.querySelector(".popup-container");
const navMobileContainer = document.querySelector(".nav-mobile-container");
const navMobileIcone = document.querySelector(".nav-mobile-icone");
const navCloseIcon = document.querySelector(".nav-close-icon");
const popupNumber = document.querySelector(".popup-number");
let orderNumber = 0;
let totalNumber = 0;

/********************************functions*******************************/

//function for display number when we click on minus and plus
const displayNumber = () => {
  numberDisplay.textContent = orderNumber;
};

//Display the order item on the cart
const activateOrder = () => {
  popupNumber.classList.add("active");
  popupContainer.classList.add("orderactive");
};

//Display the price and number of item on the cart
const totalDisplay = () => {
  totalNumberDisplay.textContent = `${totalNumber} `;
  totalPriceDisplay.textContent = `$${(totalNumber * 125.0).toFixed(2)}`;
};

//calculate
const calculateOrder = () => {
  if (orderNumber >= 1 && totalNumber <= 0) {
    totalNumber = orderNumber;
    popupNumber.textContent = orderNumber;
    activateOrder();
    totalDisplay();
    //display back to 0
    numberDisplay.textContent = "0";
    return (orderNumber = 0);
  } else {
    totalNumber = totalNumber + orderNumber;
    popupNumber.textContent = totalNumber;
    totalDisplay();
    //display back to 0
    numberDisplay.textContent = "0";
  }
  return (orderNumber = 0);
};

//click for delete orders
deleteOrder.addEventListener("click", () => {
  popupNumber.classList.remove("active");
  popupContainer.classList.remove("orderactive");
  totalNumber = 0;
});

/********************************addEventListener*******************************/
//click minus
minus.addEventListener("click", () => {
  if (orderNumber <= 0) return;
  else {
    orderNumber = --orderNumber;
  }
  displayNumber();
});
//click plus
plus.addEventListener("click", () => {
  orderNumber = ++orderNumber;
  displayNumber();
});

//click sumbit
submit.addEventListener("click", (e) => {
  calculateOrder();
});

/********************************popups toggles*******************************/
//toggle popup cart
pricePopup.addEventListener("click", () => {
  popupContainer.classList.toggle("active");
});

// popup nav mobile
navMobileIcone.addEventListener("click", () => {
  navMobileContainer.classList.add("active");
});
navCloseIcon.addEventListener("click", () => {
  navMobileContainer.classList.remove("active");
});

/********************************functions for change images (desktop)*******************************/

const img = document.querySelectorAll(".img");
const displayPicture = document.querySelector(".display-picture");

img.forEach((image) => {
  image.addEventListener("click", (e) => {
    img.forEach((image) => {
      image.classList.remove("imgclicked");
    });
    if (e.target.classList.contains("img")) {
      e.target.classList.add("imgclicked");
    }
    displayPicture.src = `./images/${e.target.id}.jpg`;
  });
});
/********************************functions for change images (mobile)*******************************/

const nextContainer = document.querySelector(".next-container");
const previousContainer = document.querySelector(".previous-container");
let i = 1;

const displayImg = () => {
  console.log(i);
  displayPicture.src = `./images/image-product-${i}.jpg`;
};
//next
nextContainer.addEventListener("click", () => {
  i = ++i;
  if (i >= 5) {
    i = 1;
  }
  displayImg();
});

previousContainer.addEventListener("click", () => {
  i = --i;
  if (i <= 0) {
    i = 4;
  }
  displayImg();
});
