const showPage = (pageEntered) => {
  showNavigator();
  const pages = {};
  const allPages = document.querySelectorAll('main[id^="page"]');

  allPages.forEach((page, index) => {
    const pageId = `page${index + 1}`;
    pages[pageId] = page;
    if (pageId != `page${pageEntered}`) page.classList.add("hidden");
    else page.classList.remove("hidden");
  });
};

const resizeIframe = (iframe) =>
  (iframe.style.height =
    iframe.contentWindow.document.body.scrollHeight + 100 + "px");

window.addEventListener("message", function (event) {
  if (event.origin === window.location.origin) {
    const iframe = document.getElementById("contentFrame");
    iframe.style.height = event.data + "px";
  }
});
