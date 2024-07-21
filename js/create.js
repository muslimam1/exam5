renderOptions(subjectOptions,elSelectSubject)


elCreateForm.addEventListener("submit", function(e){
    e.preventDefault()
    const data = {
        id:elRenderTeachersList.length ? techerslist(techerslist.length - 1).id + 1 : 1,
        name:e.target.fullName.value,
        
    }
})