
function calc() {
    var itemprice = document.querySelector(".item-price").value;

    selected = document.querySelector('#amount');
    var amount = selected.value;
    var totprice = amount * itemprice;
    document.querySelector('#totprice').innerHTML = totprice;
}

// var itemprice = document.querySelector(".item-price").innerHTML;
// $("#amount").keyup(function () {
//     selected = document.querySelector('#amount');
//     var amount = selected.value;
//     var totprice = amount * itemprice;
//     document.querySelector('#totprice').innerHTML = totprice;
// });

function pay() {
    var getSelectedValue = document.querySelector('input[name="emoney"]:checked');
    if (getSelectedValue == null) {
        alert('Please select an e-money first!');
    } else {
        let emoney = getSelectedValue.value;
        let page = 'payment-' + emoney + '.html';
        // alert(page + ' woohoo');
        alert("Purchase succesful, thank you!");
        window.location.replace(window.location.origin + "/index.html");
    }
}