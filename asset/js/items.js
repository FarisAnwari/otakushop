var settings = {
    "url": "https://otakufrn.herokuapp.com/item/all",
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response) {
    var list = response;
    list.items.forEach((i) => loadProducts(i));
});