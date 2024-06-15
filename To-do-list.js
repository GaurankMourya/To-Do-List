const input = document.querySelector("input")
const addbutton = document.querySelector(".add")
const addlist = document.querySelector(".list")
const addcheckanimation = document.querySelector(".check")
const addanimation = document.querySelector("h4")
const warning = document.querySelector("aside")


addbutton.addEventListener("click", function (event) {

    if (input.value === "" || input.value === "@" || input.value === "#" || input.value === "!" || input.value === "&" ||
        input.value === "$" || input.value === "(" || input.value === ")" || input.value === "-" || input.value === "_" || input.value === "+" || input.value === "="
    ) {
        warning.style.display = "flex"
        setTimeout(function () {
            warning.style.display = "none"
        }, 2000)
        input.value = ""
    } else {
        addanimation.style.display = "none"
        addcheckanimation.style.display = "block"
        addcheckanimation.style.height = "60%"
        addcheckanimation.style.width = "60%"
        addcheckanimation.style.color = "#212121"
        setTimeout(function () {
            addanimation.style.display = "block"
            addcheckanimation.style.display = "none"
        }, 1000)
        taskproperties();
    }
})

function taskproperties() {

    let task;
    let taskcontent;
    let taskeditbutton;
    let taskeditcompletebutton;
    let taskdeletebutton;
    let taskbarextend;
    let taskbarresize;

    task = document.createElement("div")
    task.style.position = "relative"
    task.style.width = "92%"
    task.style.height = "45px"
    task.style.borderRadius = "15px"
    task.style.display = "flex"
    task.style.alignItems = "center"
    task.style.justifyContent = "space-evenly"
    task.style.backgroundColor = "grey"
    task.style.marginTop = "8px"
    addlist.appendChild(task)

    taskcontent = document.createElement("p")
    taskcontent.style.width = "50%"
    taskcontent.style.height = "90%"
    taskcontent.style.display = "flex"
    taskcontent.style.fontSize = "1.1rem"
    taskcontent.style.overflow = "hidden"
    taskcontent.textContent = `${input.value}`
    task.appendChild(taskcontent)
    input.value = ""

    taskeditbutton = document.createElement("button")
    taskeditbutton.innerHTML = "Edit"
    taskeditbutton.style.height = "30px"
    taskeditbutton.style.width = "50px"
    taskeditbutton.style.border = "none"
    taskeditbutton.style.borderRadius = "5px"
    taskeditbutton.style.backgroundColor = "aquawhite"
    taskeditbutton.style.fontSize = "1.03rem"
    task.appendChild(taskeditbutton)

    taskeditcompletebutton = document.createElement("button")
    taskeditcompletebutton.innerHTML = "Done"
    taskeditcompletebutton.style.height = "30px"
    taskeditcompletebutton.style.width = "55px"
    taskeditcompletebutton.style.border = "none"
    taskeditcompletebutton.style.borderRadius = "5px"
    taskeditcompletebutton.style.backgroundColor = "aquawhite"
    taskeditcompletebutton.style.fontSize = "1.03rem"
    taskeditcompletebutton.style.display = "none"
    task.appendChild(taskeditcompletebutton)

    taskdeletebutton = document.createElement("button")
    taskdeletebutton.innerHTML = "Delete"
    taskdeletebutton.style.height = "30px"
    taskdeletebutton.style.width = "60px"
    taskdeletebutton.style.border = "none"
    taskdeletebutton.style.borderRadius = "5px"
    taskdeletebutton.style.backgroundColor = "aquawhite"
    taskdeletebutton.style.fontSize = "1.01rem"
    task.appendChild(taskdeletebutton)

    taskbarextend = document.createElement("button")
    taskbarextend.style.height = "30px"
    taskbarextend.style.width = "30px"
    taskbarextend.style.display = "flex"
    taskbarextend.style.alignItems = "center"
    taskbarextend.style.justifyContent = "center"
    taskbarextend.innerHTML = "▽"
    taskbarextend.style.fontSize = "1.25rem"
    taskbarextend.style.fontWeight = "700"
    taskbarextend.style.borderRadius = "50%"
    taskbarextend.style.border = "none"
    taskbarextend.style.backgroundColor = "aquawhite"
    task.appendChild(taskbarextend)

    taskbarresize = document.createElement("button")
    taskbarresize.style.height = "30px"
    taskbarresize.style.width = "30px"
    taskbarresize.style.display = "none"
    taskbarresize.innerHTML = "△"
    taskbarresize.style.fontSize = "1.25rem"
    taskbarresize.style.fontWeight = "700"
    taskbarresize.style.borderRadius = "50%"
    taskbarresize.style.border = "none"
    taskbarresize.style.backgroundColor = "aquawhite"
    task.appendChild(taskbarresize)

    taskeditbutton.addEventListener("click", function (event) {
        taskeditbutton.style.display = "none"
        taskeditcompletebutton.style.display = "block"
        taskcontent.contentEditable = "true";
    })

    taskeditcompletebutton.addEventListener("click", function (event) {
        taskeditbutton.style.display = "block"
        taskeditcompletebutton.style.display = "none"
        taskcontent.contentEditable = "false";
        taskcontent.style.width = "50%"
        taskcontent.style.overflow = "hidden"
    })

    taskdeletebutton.addEventListener("click", function (event) {
        event.target.parentNode.remove();
    })

    taskbarextend.addEventListener("click", function (event) {
        taskbarextend.style.display = "none"
        taskbarresize.style.display = "block"
        taskcontent.style.height = "max-content"
        taskcontent.style.overflow = "visible"
        task.style.height = "max-content"
    })

    taskbarresize.addEventListener("click", function (event) {
        taskbarresize.style.display = "none"
        taskbarextend.style.display = "block"
        taskcontent.style.height = "90%"
        taskcontent.style.overflow = "hidden"
        task.style.height = "45px"
    })
}