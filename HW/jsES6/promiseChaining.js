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

//Promise chaining. Daraalsan huseltuudiig ilgeeh
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


 //Zereg ajillauulay gevel:
 getRecipes()
 .then(r => {
    console.log(r); 
    return getRecipe(r[0]);
 });

 getRecipe()
 .then(r => {
    console.log(r);
    return getAuthorRecipe(r.author);
 });

 getAuthorRecipe()
 .then(r => {
    console.log(r);
 });




 //ES8 -Ecmascript2017 async, await
async function getInfo() {
    try {
        const ids = await getRecipes();
        console.log(ids);
        const recipe = await getRecipe(ids[0]);
        console.log(recipe);
        const nextRecipe = await getAuthorRecipe(recipe.author);
        console.log(nextRecipe);
    } catch(error) {
        console.log(`Aldaa garlaa.`);
    }   
}

getInfo();