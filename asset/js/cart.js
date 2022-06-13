// alert('hello');
const name = localStorage.getItem("name");
const price = localStorage.getItem("price");
const stock = localStorage.getItem("stock");
const image = localStorage.getItem("image");

// alert(price, stock, image);

document.querySelector(".item-name").innerHTML = name;
document.querySelector(".item-price").innerHTML = price;
document.querySelector(".item-stock").innerHTML = stock;
document.querySelector(".item-image").src = image;