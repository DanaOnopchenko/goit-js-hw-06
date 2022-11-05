const inputRefs = document.querySelector("#font-size-control");
const spanRefs = document.querySelector("#text");


// spanRefs.classList.add("font-size");
inputRefs.addEventListener('input', onInputChange);

function onInputChange(event){ 
    spanRefs.style.fontSize = `${(event.currentTarget.value)}px`
}
console.log(spanRefs)
