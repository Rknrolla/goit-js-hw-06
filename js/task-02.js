const ingredientsList = document.querySelector('#ingredients');

const fragment = document.createDocumentFragment();

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  fragment.appendChild(li);
});

ingredientsList.appendChild(fragment);
