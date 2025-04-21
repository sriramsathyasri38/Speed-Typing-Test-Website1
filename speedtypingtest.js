let spinnerEl = document.getElementById("spinner");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let counter = 0;

spinnerEl.classList.toggle("d-none");

function startCounting() {
    counter += 1;
    timerEl.textContent = counter;
    console.log(counter);
}
let counterVal = setInterval(startCounting, 1000);

function getQuotation() {
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");

            let quote = jsonData.content;
            quoteDisplayEl.textContent = quote;
            console.log(jsonData.content);
        });

}

getQuotation();
startCounting();
resetBtnEl.onclick = function() {
    spinnerEl.classList.remove("d-none");
    getQuotation();
    startCounting();
    counter = 0;
    resultEl.textContent = "";
    quoteInputEl.textContent = "";
};
submitBtnEl.onclick = function() {
    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        clearInterval(counterVal);
        resultEl.textContent = "You typed In " + counter + " Seconds ";
    } else {
        resultEl.textContent = "You typed Incorrect sentence";

    }
};