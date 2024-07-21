let teachersArr = JSON.parse(window.localStorage.getItem("techerslist"))
let elRenderTeachersList = document.querySelector(".render-teachers-list")


function renderTeacher(arr, list){
    list.innerHTML = ""
    arr.map(item => {
        let elTR = document.createElement{"tr"}
        elTR.innerHTML = `
        <td>
           <img src=${item.imgUrl} width="30" height="30">
           <span${item.name}></span>
        </td>
        <td>${item.subject}</td>
        <td>${item.subject}</td>
        <td>${item.subject}</td>
        <td>${item.subject}</td>
        `
    })
}