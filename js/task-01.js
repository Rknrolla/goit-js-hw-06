// get the ul#categories element
const categoriesList = document.querySelector('#categories');

// get all li.item elements within the ul#categories
const categories = categoriesList.querySelectorAll('li.item');

// log the number of categories
console.log(`Number of categories: ${categories.length}`);

// loop through each category and log the header text and number of items
categories.forEach(category => {
  // get the header text
  const header = category.querySelector('h2').textContent;

  // get the number of items
  const items = category.querySelectorAll('li').length;

  // log the header text and number of items
  console.log(`${header}: ${items} items`);
});
