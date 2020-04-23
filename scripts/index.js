//define a function getCategories that accepts a menu
function getCategories(menu) {
    //returns the object keys from the parameter menu
    return Object.keys(menu);
}

//define a function nameToListItem that accepts categoryName
function nameToListItem(categoryName) {
    // create the 'li' element using the const declaration
    const listItem = document.createElement('li');
    //Identifies the menu category names as list items
    listItem.textContent = categoryName;
    //returns the menu category names as list Items
    return listItem;
}

//define a function categoriesToListItems that accepts arrayOfStrings as a parameter
function categoriesToListItems(arrayOfStrings) {
    //returns the nameToListItem argument as the new key-value of the arrayOfStrings parameter
    return arrayOfStrings.map(nameToListItem);
}

//define a function appendToMenu that accepts listItem as a parameter
function appendToMenu(listItem){
    //creates an unordered list and passes .js-menu class as the value of listItem parameter
    const ul = document.querySelector('.js-menu');
    //Identifies the listItem 'li' element as an unordered 'ul' list item. The menu categories are now unordered listItems
    ul.appendChild(listItem);
}
//Assigns the value getCategories(menu) to a read only reference named categories
const categories = getCategories(menu);
//Assigns the value categoriesToListItems(categories) to a read only reference named categoryListItems
const categoryListItems = categoriesToListItems(categories);
//Appends or adds each categorized list item to the menu
categoryListItems.forEach(appendToMenu);