function login() {
    const user = document.querySelector("#username").value;
    const pass = document.querySelector("#password").value;
    var settings = {
        url: "https://otakufrn.herokuapp.com/auth/login",
        method: "POST",
        timeout: 0,
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify({
            username: user,
            password: pass,
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response.msg);
        if (response.msg == "Logged in!") {
            window.location.replace(window.location.origin + "/index.html");
        }
        if (response.msg == "Username or password is incorrect!") {
            document.querySelector("#msg").innerHTML = "username/password salah!";
        }
        // const resp = JSON.parse(response);
        // console.log(resp.msg);
    });
}