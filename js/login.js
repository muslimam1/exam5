letLoginForm = document.querySelector(".login-form")


elLoginForm.addEventListener("submit", function(e){
    e.preventDefault()
    const data = {
        login:e.targe.login.value,
        password:e.target.value
    }
    e.target.reset()
    const isRegistered = JSON.parse(window.localStorage.getItem("isRegistered"))
    if(isRegistered){
        if(data.login.trim() == isRegistered.newLogin && data.password.trim().toLowerCase() == isRegistered.newPassword){
            window.localStorage.setItem("loginedUser", JSON.stringify(data))
            location.pathname = "./teachers.html"
        }
    }
    else{
        if(data.login.trim() == isRegistered.newLogin && data.password.trim().toLowerCase() == isRegistered.newPassword){
            window.localStorage.setItem("loginedUser", JSON.stringify(data))
            location.pathname = "./teachers.html"
        }else{
            alert("xatolik bor")
        }
    }
})