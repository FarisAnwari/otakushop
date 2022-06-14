function check() {
    choice = document.querySelector('#emoney').value;
    // alert(choice);

    var div = document.createElement('div');

    div.innerHTML = '<div class="card my-5" style="border-style: solid; border-width: medium; width: 25rem">' +
        '<div class="card-body cardbody-color p-lg-5 emoneyauth-form">' +
        '<div class="mb-3">' +
        '<input type="text" class="form-control" id="username" placeholder="Username">' +
        '</div>' +
        '<div class="mb-3">' +
        '<input type="password" class="form-control" id="password" placeholder="Password">' +
        '</div>' +
        '<div class="text-center">' +
        '<button id="auth" class="btn btn-success px-5 mb-5 w-100">Confirm</button>' +
        '</div>' +
        '</div>';

    document.querySelector("#emoneyauth").appendChild(div);
}