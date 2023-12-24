const switchParagraph = document.querySelector(".change--paragraph");
const originalText = switchParagraph.innerHTML;

const header = document.querySelector(".header");
const main = document.getElementById("container");

const newParagraph = document.createElement("p");
const firstNewSpan = document.createElement("span");
const secondNewSpan = document.createElement("span");

firstNewSpan.textContent = "Terms of Use";
firstNewSpan.className = secondNewSpan.className = "new-terms-and-policy";
secondNewSpan.textContent = "Privacy Policy";

function changeParagraph() {
  if (window.innerWidth <= 375) {
    switchParagraph.innerHTML =
      "Inspiring wholesome harmony for the mind, body and spirit, for everyone, everywhere.";
    header.classList.add("show--header");
    newParagraph.classList.add("add-policy");
    newParagraph.classList.remove("no-display");
  }
}

main.appendChild(newParagraph);
newParagraph.append(
  "By clicking Register, you agree to our ",
  firstNewSpan,
  " and our ",
  secondNewSpan
);

newParagraph.className = "no-display";

window.addEventListener("resize", () => changeParagraph());
