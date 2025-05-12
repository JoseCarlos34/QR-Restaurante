setTimeout(() => {
  const confirmar = confirm("¿Deseas registrarte para recibir un descuento en tu próxima visita?");
  if (confirmar) {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeHtaKN7-218pPcd7ZuuqJTFGOEZZLDFhHDdqhDMMMFLHBGJg/viewform";
  }
}, 3000);
