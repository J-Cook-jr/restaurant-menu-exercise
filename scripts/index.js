function getCategories(menu){
    return Object.keys(menu);
}

function nameToListItem(categoryName){
    const listItem = document.createElement('li');
    listItem.textContent = categoryName;
    return listItem;
}

console.log(nameToListItem(''));