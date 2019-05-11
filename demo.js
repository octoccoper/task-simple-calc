window.addEventListener("load", () => {
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries([...fd.entries()]);
    const result = document.querySelector("[data-result]");
    if (window.calc(data.first, data.second, data.operation, data.result)) {
      result.textContent = "Именно так!";
    } else {
      result.textContent = "Реультат иной!";
    }
  });
});
