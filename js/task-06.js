const inputRefs = document.querySelector("#validation-input")


const onRemovefocus = event => { 
    if (event.currentTarget.value.length === Number(inputRefs.dataset.length))  {
        inputRefs.classList.add("valid")
        inputRefs.classList.remove("invalid")
    }
    else { 
        inputRefs.classList.remove("valid")
        inputRefs.classList.add("invalid")
    }
}
inputRefs.addEventListener("blur",onRemovefocus)