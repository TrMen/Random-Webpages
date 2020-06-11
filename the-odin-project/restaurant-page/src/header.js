// Rendering for a header
// I'm trying some different styles of exports for the modules
// This one does one default export of an object containing various methods
// It's nice to import, forces you to import the whole package (aka no lonely functions)
// But this is also far less explicit and double namespaces things, which isn't ideal

export default (function Header() {
  const content = document.getElementById('content');
  const header = document.createElement('header');

  const company = document.createElement('div');
  company.id = 'company';

  const companyLogo = document.createElement('img');
  companyLogo.classList.add('company-logo');

  const companyName = document.createElement('span');
  companyName.classList.add('company-name');
  companyName.textContent = 'Impressive Wraps';

  company.appendChild(companyLogo);
  company.appendChild(companyName);
  header.appendChild(company);
  content.appendChild(header);

  const nav = document.createElement('nav');
  header.appendChild(nav);

  const addToNav = (name, callback) => {
    if (nav.children.length > 4 || name.length > 12) {
      console.warning('too many items in nav, new entry was ignored');
    } else {
      const newEntry = document.createElement('div');
      newEntry.textContent = name;
      newEntry.addEventListener('click', callback);
      newEntry.classList.add('nav-item');
      nav.appendChild(newEntry);
    }
  };

  const hide = () => {
    header.style.display = 'none';
  };
  const show = () => {
    header.style.display = 'initial';
  };

  const getCompanyLogo = () => companyLogo;

  return {
    hide, addToNav, show, getCompanyLogo,
  };
}());
