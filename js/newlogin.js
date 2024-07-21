let elRegisterForm = document.querySelector(".register-form");

elRegisterForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = {
        newLogin: e.target.login.value,
        newPassword: e.target.password.value
    };

    const signUpButton = e.target.querySelector(".in-btn");
    signUpButton.innerHTML = '<img class="mx-auto" src="./img/loading.png" width="25" height="25"/>';

    window.localStorage.setItem("isRegistered", JSON.stringify(data));
    
    setTimeout(() => {
        signUpButton.innerHTML = "SIGN UP";
        location.pathname = "./index.html";
    }, 500);
});
