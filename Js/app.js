console.log("app4");
var addBtn = document.getElementById("btn");
console.log(addBtn);
addBtn.addEventListener("click", click);
displayNotes();


var search = document.getElementById("searchText");
console.log("search " + search)
search.addEventListener("input", function () {
    let inputValue = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (element) {
        let titleText=element.getElementsByTagName("h5")[0].innerText.toLowerCase();
        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        let date = element.getElementsByClassName("m-0 text-center")[0].innerText;
        if (cardTxt.includes(inputValue) || date.includes(inputValue)||titleText.includes(inputValue)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})

