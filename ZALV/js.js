const showNavigator = () => {
  const nav = document.getElementById("navigator");
  if (nav) {
    console.log("Enter");
    if (nav.classList.contains("hide")) nav.classList.remove("hide");
    else nav.classList.add("hide");
  }
};
const showPage = (page) => {
  showNavigator();
  let pages = {};
  let value = 1;
  while (true) {
    if (document.getElementById(`page${value}`))
      pages[`page${value}`] = document.getElementById(`page${value}`);
    else break;
    value++;
  }
  for (let x = 0; x < value; x++) {
    if (!pages[`page${x + 1}`]) continue;
    if (page != x + 1) pages[`page${x + 1}`].classList.add("hidden");
    else pages[`page${x + 1}`].classList.remove("hidden");
  }
};
