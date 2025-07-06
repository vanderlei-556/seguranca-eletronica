function validarFormulario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (!nome || !email || !mensagem) {
    alert("Preencha todos os campos!");
    return false;
  }

  alert("Mensagem enviada com sucesso!");
  return true;
}

window.onscroll = function () {
  const btn = document.getElementById("btnTopo");
  if (document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function voltarTopo() {
  document.documentElement.scrollTop = 0;
}
