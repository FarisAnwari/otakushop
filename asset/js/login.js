// $(document).ready(function () {

// })

function login() {
    // e.preventDefault();
    // alert('button works');
    // const user = document.querySelector("#username").value;
    // const pass = document.querySelector("#password").value;
    var user = $("#username").val();
    var pass = $("#password").val();
    // alert(user + pass);
    var settings = {
        url: "https://otakufrn.herokuapp.com/auth/login",
        method: "POST",
        timeout: 0,
        headers: {
            "Content-Type": "application/json",
        },
        dataType: "json",
        data: JSON.stringify({
            username: user,
            password: pass,
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response.msg);
        if (response.msg == "Logged in!") {
            localStorage.setItem("token", response.token);
            window.location.replace(window.location.origin + "/index.html");
            // alert(response.msg);
            // var tok = localStorage.getItem("token");
            // alert('token: ' + tok);
        }
        // if (response.msg == "Username or password is incorrect!") {
        //     document.querySelector("#response").innerHTML = "username/password salah!";
        // }
        else {
            document.querySelector(".response").innerHTML = response.msg;
        }
        const resp = JSON.parse(response);
        console.log(resp.msg);
    });
}