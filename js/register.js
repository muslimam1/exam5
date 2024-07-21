let elRegisterForm = document.querySelector(".register-form")

elRegisterForm.addEventListener("submit", function(e){
    e.preventDefault()
    const data = {
        newLogin:e.target.login.value,
        newPassword:e.target.password.value
    }
    e.target[4].innerHTML =  `<img class="mx-auto" src="./img/loading.png" width="25" height="25"/>`
    window.localStorage.setItem("isRegistered", JSON.stringify(data))
    setTimeout(() => {
        e.target[5].innerHtml= "SIGN UP"
        location.pathname = "./index.html"
    },500)
})
