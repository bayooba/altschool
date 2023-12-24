const switchParagraph = document.querySelector(".change--paragraph");
const originalText = switchParagraph.innerHTML;

const header = document.querySelector(".header");
const main = document.getElementById("container");

const newParagraph = document.createElement("p");
const firstNewSpan = document.createElement("span");
const secondNewSpan = document.createElement("span");

newParagraph.className = "add-policy";

firstNewSpan.textContent = "Terms of Use";
firstNewSpan.className = secondNewSpan.className = "new-terms-and-policy";
secondNewSpan.textContent = "Privacy Policy";

function changeParagraph() {
  if (window.innerWidth <= 375) {
    switchParagraph.innerHTML =
      "Inspiring wholesome harmony for the mind, body and spirit, for everyone, everywhere.";
    header.classList.add("show--header");
    newParagraph.classList.add("add-policy");
    newParagraph.classList.remove("policy");
  } else if (window.innerWidth > 375) {
    switchParagraph.innerHTML = originalText;
    newParagraph.classList.remove("add-policy");
    newParagraph.classList.add("policy");
  }
}

function switchFooter() {
  if (newParagraph.classList.contains("add-policy")) {
    main.appendChild(newParagraph);

    newParagraph.append(
      "By clicking Register, you agree to our ",
      firstNewSpan,
      " and our ",
      secondNewSpan
    );
  }
}

switchFooter();

window.addEventListener("resize", () => changeParagraph());
