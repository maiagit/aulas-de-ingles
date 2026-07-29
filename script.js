/* DADOS FÁCEIS DE EDITAR */
const whatsappNumber = "554796507237"; // Ex.: 5511999999999 (código do país + DDD + número)
const instagramUrl = "https://www.instagram.com/katiiamachado"; // Ex.: https://instagram.com/seuperfil
const whatsappMessage = "Olá! Conheci seu trabalho pelo site e gostaria de saber mais sobre as aulas particulares de inglês.";

document.addEventListener('DOMContentLoaded', () => {
  const isPlaceholder = value => value.includes('SEU_');
  const whatsAppUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  document.querySelectorAll('.whatsapp-link').forEach(link => {
    link.href = isPlaceholder(whatsappNumber) ? '#contato' : whatsAppUrl;
    if (!isPlaceholder(whatsappNumber)) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    else link.title = 'Insira seu número de WhatsApp no arquivo script.js';
  });
  document.querySelectorAll('.instagram-link').forEach(link => {
    link.href = isPlaceholder(instagramUrl) ? '#contato' : instagramUrl;
    if (!isPlaceholder(instagramUrl)) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    else link.title = 'Insira seu Instagram no arquivo script.js';
  });

  const header = document.querySelector('.site-header');
  addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 16), { passive: true });

  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => { const open = menu.classList.toggle('open'); toggle.classList.toggle('open', open); toggle.setAttribute('aria-expanded', open); toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); toggle.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }));

  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


});
