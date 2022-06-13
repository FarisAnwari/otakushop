// if (document.readyState == "loading") {
//     document.addEventListener("DOMContentLoaded", ready);
// } else {
//     ready();
// }

// function ready() {
//     var addToCartButtons = document.getElementsByClassName("shop-item-button");
//     for (var i = 0; i < addToCartButtons.length; i++) {
//         var button = addToCartButtons[i];
//         button.addEventListener("click", addToCartClicked);
//     }
// }

function purchase(data) {
    document.getElementsByClassName("item-image").src = data.picture;
    document.getElementsByClassName("item-name").innerText = data.name;
    document.getElementsByClassName("item-price").innerText = data.price;
    document.getElementsByClassName("item-stock").innerText = data.stock;
}



function loadProducts(data) {

    var li = document.createElement('li');

    li.innerHTML = '<div class="col-md-auto">' +
        '<div class="card">' +
        '<div class=""> <img src="' + data.picture + '" class="card-img-top shop-item-picture" /> </div>' +
        '<div class="card-body" style="background-color: #faa4bd">' +
        '<h6 class="card-title shop-item-name">' + data.name + '</h6>' +
        '<p class="card-text shop-item-price">Rp. ' + data.price + '</p>' +
        '<div class="mt-3 info shop-item-stock">Stock: ' + data.stock + '</div>' +
        // '<br><button class="btn btn-light btn-sm shop-item-button" onclick="store(data)">Purchase</button>' +
        '<input type="radio" id="' + data.name + '" name="item" value="' + data.name + '">' +
        // '<label for="' + data.name + '">' + data.name + '</label><br>' +
        '</div>' +
        '</div>' +
        '</div>';
    document.getElementById("items").appendChild(li);
}

function store() {
    selected = document.querySelector('input[name="item"]:checked');
    item = selected.parentNode.parentNode;
    let name = item.getElementsByClassName("shop-item-name")[0].innerText;
    let price = item.getElementsByClassName("shop-item-price")[0].innerText;
    let stock = item.getElementsByClassName("shop-item-stock")[0].innerText;
    var imageSrc = item.getElementsByClassName("shop-item-picture")[0].src;
    // alert(name + price + stock + imageSrc)
    // alert(item)

    localStorage.setItem("name", name);
    localStorage.setItem("price", price);
    localStorage.setItem("stock", stock);
    localStorage.setItem("image", imageSrc);
    window.location.replace(window.location.origin + "/checkout.html");
}

// function addToCartClicked(event) {
//     var button = event.target;
//     var shopItem = button.parentElement.parentElement.parentElement;
//     var name = shopItem.getElementsByClassName("shop-item-name")[0].innerText;
//     var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
//     var stock = shopItem.getElementsByClassName("shop-item-stock")[0].innerText;
//     var imageSrc = shopItem.getElementsByClassName("shop-item-picture")[0].src;
//     addItemToCart(name, price, stock, imageSrc);
// }

// function addItemToCart(name, price, stock, imageSrc) {
//     document.getElementsByClassName("item-image").src = imageSrc;
//     document.getElementsByClassName("item-name").innerText = name;
//     document.getElementsByClassName("item-price").innerText = price;
//     document.getElementsByClassName("item-stock").innerText = stock;
// }