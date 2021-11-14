//ES5
function translate(question, lang) {
    if(lang === undefined) lang = "en"; //This is i default parameter. ES5 deer manually hiij ugdug bsan.

    switch(lang) {
        case "mn": console.log(`Daraah uguulberiig orchuul: ${question}`); break;
        case "en": console.log(`Translate following sentence: ${question}`); break;
    }
}
translate("Taniig hen gedeg ve?", "en");
translate("What's your job?", "mn");
translate("Namaig Sarnai gedeg.", "en");
translate("Taniig hen gedeg ve?");
translate("Bi UB-t amidardag.");



//ES6
function translate6(question = "Ta asuultaa damjuulna uu?", lang = "en") {

    switch(lang) {
        case "mn": console.log(`Daraah uguulberiig orchuul: ${question}`); break;
        case "en": console.log(`Translate following sentence: ${question}`); break;
    }
}
translate("Taniig hen gedeg ve?", "en");
translate("What's your job?");
translate("Namaig Sarnai gedeg.");
translate(); // "Daraah uguulberiig orchuul: Ta asuultaa damjuulna uu?" gej garch irne.
