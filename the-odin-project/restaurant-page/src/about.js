// Render an about page
// The export style here is a default export, but of a single function

const DEFAULT_NAME = 'Lorem ipsum';
const DEFAULT_MESSAGE = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Morbi enim nunc faucibus a pellentesque sit. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Feugiat vivamus at augue eget arcu dictum varius duis. Enim facilisis gravida neque convallis a cras semper auctor. Tortor at auctor urna nunc id cursus. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet cursus sit amet. Sagittis orci a scelerisque purus semper eget. Sed arcu non odio euismod lacinia at quis. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Et leo duis ut diam quam nulla.';

export default function renderAbout(container, name, message) {
  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('about-div');

  const nameDiv = document.createElement('div');
  nameDiv.classList.add('name-div');
  nameDiv.textContent = `About ${name ?? DEFAULT_NAME}:`;
  aboutDiv.appendChild(nameDiv);

  const messageParagraph = document.createElement('p');
  messageParagraph.classList.add('message');
  messageParagraph.textContent = `${message ?? DEFAULT_MESSAGE}`;
  aboutDiv.appendChild(messageParagraph);

  container.appendChild(aboutDiv);
}
