setTimeout(() => {
  document.getElementById("modal").style.display = "flex";
}, 3000);

document.getElementById("aceptarBtn").addEventListener("click", () => {
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeHtaKN7-218pPcd7ZuuqJTFGOEZZLDFhHDdqhDMMMFLHBGJg/viewform";
});

document.getElementById("cancelarBtn").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});
