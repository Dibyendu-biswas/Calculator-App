let values = document.getElementById("values")
let btn = document.querySelectorAll("button")
let showItems = '';
Array.from(btn).forEach((btns) => {
    btns.addEventListener("click", (e) => {
        let allButtons = e.target.innerHTML

        if (allButtons == 'C') {
            showItems += allButtons
            values.value = showItems
            showItems = ""
            values.value = showItems;
        } else if (allButtons == '=') {
            values.value = eval(showItems)
        } else {
            showItems += allButtons
            values.value = showItems
        }
    })
})
