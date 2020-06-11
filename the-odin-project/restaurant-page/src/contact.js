// Render a contact page
// Same style as about

export default function renderContact(container) {
  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info');
  contactInfo.textContent = 'Sorry buddy, we closed last week :c';
  container.appendChild(contactInfo);
}
