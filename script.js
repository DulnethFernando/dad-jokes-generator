// getting all the elements needed
const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .card .joke h1");


// Event listeners
document.addEventListener("DOMContentLoaded", getJoke);
button.addEventListener("click", getJoke);

// Connect with the api and get a joke
async function getJoke() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });
  const jokeObj = await jokeData.json();
  jokeDiv.innerHTML = jokeObj.joke;
}