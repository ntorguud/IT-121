uploadImage(() => console.log(`Upload hiigdej duuslaa. Based amjilttai hadgalagdlaa`)); //this is closure
console.log(`North Korean president...`);
console.log(`US president...`);

function uploadImage(fn) {
    setTimeout(fn, 3000);
}



//Closure / callback hereglej hiih arga
function getRecipe() {
    setTimeout(() => {
        const ids = [12, 332, 121, 87];
        console.log(ids);

        setTimeout(id => {
            const recipe = {
                name: "Noodles",
                author: "Nara"
            };

            setTimeout(author => {
                const nextRecipe = {
                    name: "Chicken Alfredo",
                    author: "Nara"
                };

                console.log(nextRecipe);
            }, 2000, recipe.author);

            console.log(recipe);
        }, 2000, ids[0]);
    }, 1500);
}
console.log(`App ajillaj ehellee.`);
getRecipe();





///PROMISE!!!!! Solution of Closure Hell