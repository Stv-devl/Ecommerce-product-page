/***********************************************************************************************/
/*****************************Nav popup, Cart popup, and order cart*****************************/
/***********************************************************************************************/

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

// Function for display the order item on the cart
const activateOrder = () => {
  popupNumber.classList.add("active");
  popupContainer.classList.add("orderactive");
};

// Function for display the price and number of item on the cart
const priceDisplay = () => {
  totalNumberDisplay.textContent = `${totalNumber} `;
  totalPriceDisplay.textContent = `$${(totalNumber * 125.0).toFixed(2)}`;

  console.log(totalNumber);
};

//reset number display after send to cart
const reset = () => {
  numberDisplay.textContent = "0";
  orderNumber = 0;
};

//First time we click to add to cart we will start the functions activateOrder() & priceDisplay();. Second time++, we additionate old number and new number and display in the functions totalDisplay() & priceDisplay();
const calculateOrder = () => {
  if (orderNumber >= 1 && totalNumber <= 0) {
    totalNumber = orderNumber;
    popupNumber.textContent = orderNumber;
    activateOrder();
    priceDisplay();
    reset();
  } else {
    totalNumber = totalNumber + orderNumber;
    popupNumber.textContent = totalNumber;
    priceDisplay();
    reset();
  }
};

/********************************addEventListener*******************************/
//click for delete orders
deleteOrder.addEventListener("click", () => {
  popupNumber.classList.remove("active");
  popupContainer.classList.remove("orderactive");
  totalNumber = 0;
});

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

//toggle popup cart
pricePopup.addEventListener("click", () => {
  popupContainer.classList.toggle("active");
});

// popup nav mobile
navMobileIcone.addEventListener("click", () => {
  navMobileContainer.classList.add("active");
  overlay.classList.add("activate");
});

navCloseIcon.addEventListener("click", () => {
  navMobileContainer.classList.remove("active");
  overlay.classList.remove("activate");
});

/***********************************************************************************************/
/*********************************change images and lightbox************************************/
/***********************************************************************************************/

/*************functions for change images (desktop and lightbox)****************/

//variables
const img = document.querySelectorAll(".img");
const displayPicture = document.querySelector(".display-picture");
const nextContainer = document.querySelectorAll(".next-container");
const previousContainer = document.querySelectorAll(".previous-container");
const displayPicture02 = document.querySelector(".display-picture02");
const lightbox = document.querySelector(".lightbox");
const overlay = document.querySelector(".overlay");
let i = 1;

//when we click on 1 of the small images we change displayPicture and imgclicked is added. If classlist = "lightbox activate" display images on lightbox if not display on mobile
img.forEach((image) => {
  image.addEventListener("click", (e) => {
    img.forEach((image) => {
      image.classList.remove("imgclicked");
    });
    if (e.target.classList.contains("img")) {
      e.target.classList.add("imgclicked");
    }
    if (lightbox.classList == "lightbox activate") {
      displayPicture02.src = `./images/${e.target.id}.jpg`;
    } else {
      displayPicture.src = `./images/${e.target.id}.jpg`;
    }
  });
});

/**********************************Image mobile and lightbox***************************************/

//functions for change images => if classlist = "lightbox activate" display images on lightbox if not display on mobile
const displayImgSlider = () => {
  if (lightbox.classList == "lightbox activate") {
    displayPicture02.src = `./images/image-product-${i}.jpg`;
  } else {
    displayPicture.src = `./images/image-product-${i}.jpg`;
  }
};

//button next for lightbox or mobile,i is the number of images from 1 to 4. We send the number i to the function displayImgSlider() to display the next picture.
nextContainer.forEach((button) => {
  button.addEventListener("click", () => {
    i = ++i;
    if (i >= 5) {
      i = 1;
    }
    displayImgSlider();
  });
});

//button previous for lightbox or mobile,i is the number of images from 1 to 4. We send the number i to the function displayImgSlider() to display the next picture.
previousContainer.forEach((button) => {
  button.addEventListener("click", () => {
    i = --i;
    if (i <= 0) {
      i = 4;
    }
    displayImgSlider();
  });
});

/********************************open and close lightbox & overlay********************************/

//if window width < 870 we will close automatically the lightbox & overlay
function closeLightbox() {
  if (window.innerWidth <= 870) {
    lightbox.classList.remove("activate");
  }
  if (
    window.innerWidth <= 870 &&
    navMobileContainer.classList == "nav-mobile-container"
  ) {
    overlay.classList.remove("activate");
  }
  return;
}

//if window width > 870 we will allow to open lightbox and overlay at click
const allowLightbox = () => {
  if (window.innerWidth >= 870) {
    overlay.classList.add("activate");
    lightbox.classList.add("activate");
  }
  return;
};

//listen window and activate closeLightbox
window.addEventListener("resize", closeLightbox);

//activate lightbox at click
displayPicture.addEventListener("click", (e) => {
  allowLightbox();
});

//add overlay at click at click
overlay.addEventListener("click", (e) => {
  overlay.classList.remove("activate");
  lightbox.classList.remove("activate");
});

//remove lightbox at click
closeLogo.addEventListener("click", (e) => {
  overlay.classList.remove("activate");
  lightbox.classList.remove("activate");
});
