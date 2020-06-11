// Generate all of a restaurant page dynamically using javascript
// This is also used to practice modules, imports and exports with different styles
// so don't get confused about the inconsistent import style

import Header from './header';
import { renderMenu } from './menu';
import renderAbout from './about';
import renderContact from './contact';

const content = document.getElementById('content');
const tabContent = document.createElement('div');
tabContent.classList.add('tab-content');
content.appendChild(tabContent);

function reRender(renderCallBack, ...args) {
  tabContent.innerHTML = '';
  renderCallBack(...args);
}

Header.addToNav('Menu', () => reRender(renderMenu, tabContent));
Header.addToNav('About', () => reRender(renderAbout, tabContent, 'Impressive Wraps'));
Header.addToNav('Contact', () => reRender(renderContact, tabContent));
Header.getCompanyLogo().addEventListener('click', () => reRender(() => {}));
