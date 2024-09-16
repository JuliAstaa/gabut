let no = document.getElementById("no");

no.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 10) - Math.floor(Math.random() * 10);
  no.style.left = `${Math.floor(Math.random() * 25 * random)}px`;
  no.style.right = `${Math.floor(Math.random() * 25 * random)}px`;
  no.style.top = `${Math.floor(Math.random() * 25 * random)}px`;
  no.style.bottom = `${Math.floor(Math.random() * 25 * random)}px`;
});
