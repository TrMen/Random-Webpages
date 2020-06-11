// Render a restaurant menu
// The style for this is exporting named functions

let menu = {
  Breakfast: ['Chicken Teriyaki Wraps', 'Mexico Wraps', 'Fish Wraps', 'Coffee in a Wrap', 'Veggie Wraps'],
  Lunch: ['Ham Wrap', 'Beef Wrap', 'Wine Wrap', 'Beer Wrap', 'Grilled Wrap', 'Wrap without Bread'],
  Dinner: ['The Best Wrap', 'A Slightly Mouldy Wrap', "You Definitely Shouldn't Eat This One"],
};

export function renderMenu(container) {
  const main = document.createElement('div');
  container.appendChild(main);
  main.classList.add('menu-main');
  Object.keys(menu).forEach((category) => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');
    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');
    categoryTitle.textContent = category;
    categoryDiv.appendChild(categoryTitle);

    menu[category].forEach((menuItem) => {
      const menuItemDiv = document.createElement('div');
      menuItemDiv.classList.add('menu-item');
      menuItemDiv.textContent = menuItem;
      categoryDiv.appendChild(menuItemDiv);
    });

    main.appendChild(categoryDiv);
  });
}

export function setMenu(newMenu) {
  menu = newMenu ?? menu;
}
