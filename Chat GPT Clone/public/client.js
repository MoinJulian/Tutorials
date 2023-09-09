// HTML Elements
const formElement = document.querySelector("form");
const outputElement = document.getElementById("output");
const textArea = document.querySelector("textarea");

// handle form submission
formElement.addEventListener("submit", async (e) => {
  // prevent from reload
  e.preventDefault();

  outputElement.innerHTML = "Loading...";

  const response = await fetch("/completion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: textArea.value,
    }),
  });
});
