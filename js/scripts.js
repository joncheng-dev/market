//Business Logic
function discountStatus (epicodusRank) {
    let price;
    if (epicodusRank === "teacher") {
        price = "You get it for free!";
    } else {
        price = "You pay $5";
    }
    return price;
}











//User Logic

function determinePrice (event) {

    const ranking = document.querySelector("input[name='rank']:checked").value;
    let price = discountStatus(ranking);
    document.getElementById("result").innerText = price;

    event.preventDefault();
}

function formSubmissionHandler () {
    let form = document.querySelector("user-entry-form");
    form.addEventListener("submit", determinePrice);
}


window.addEventListener("load", formSubmissionHandler)



