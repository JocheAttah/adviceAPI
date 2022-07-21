const adviceId = document.getElementById("adviceId");
const quote = document.getElementById("quote");
const btn = document.getElementById("btn");

btn.addEventListener("click", getQuote);

function getQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      adviceId.innerHTML = `${data.slip.id}`;
      quote.innerHTML = `"${data.slip.advice}"`;
    });
}
