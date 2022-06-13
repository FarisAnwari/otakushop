function pay() {
    var getSelectedValue = document.querySelector('input[name="emoney"]:checked');
    if (getSelectedValue == null) {
        alert('Please select an e-money first!');
    } else {
        let emoney = getSelectedValue.value;
        let page = 'payment-' + emoney + '.html';
        // alert(page + ' woohoo');
        window.location.replace(window.location.origin + "/" + page);
    }
}