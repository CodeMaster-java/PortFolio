// Loader animado: esconde após carregamento
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('hide');
    setTimeout(() => loader.style.display = 'none', 700); // Remove do fluxo após transição
  }
});

// Script para formulário de contato (index.html)
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada! (Funcionalidade de envio pode ser implementada posteriormente)');
});

// Script para formulário de contato (contact.html)
document.getElementById('contactFormPage')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada! (Funcionalidade de envio pode ser implementada posteriormente)');
});
