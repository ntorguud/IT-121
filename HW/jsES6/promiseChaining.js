let getRecipes = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([12, 332, 121, 87]);
        }, 2000)
    });
}

let getRecipe = recipeId => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            resolve({
                name: "Noodles",
                author: "Nara"
            });
        }, 2000, recipeId)
    });
}

let getAuthorRecipe = author => {
    return new Promise((resolve, reject) => {
        setTimeout(name => {
            resolve({
                name: "Chicken Alfredo",
                author: "Nara"
            });
            reject(`Internet tasarla.`);
        }, 2000, author)
    });
}


getRecipes()
.then(r => console.log(r));
getRecipe(12)
.then(r => console.log(r));

//Promise chaining
getRecipes()
.then(ids => {
    console.log(ids);
    return getRecipe(ids[0]);
})
.then(recipe => {
    console.log(recipe);
    return getAuthorRecipe(recipe.author);
})
.then(recipe => console.log(recipe))
.catch(error => {
    console.log(`Aldaa garlaa. ${error}`);
 });