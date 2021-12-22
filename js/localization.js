const localizationBtn = document.getElementById('language-toggle');
let ruData = document.getElementsByClassName('ru');
let enData = document.getElementsByClassName('en');
for (let i = 0; i < ruData.length; i++) {
    ruData[i].hidden = true;
}

function switchingLanguage() {

    if (ruData[0].hidden == true) {
        for (let i = 0; i < ruData.length; i++) {
            ruData[i].hidden = false;
            enData[i].hidden = true;
        }
    } else {
        for (let i = 0; i < ruData.length; i++) {
            ruData[i].hidden = true;
            enData[i].hidden = false;
        }
    }
}
localizationBtn.addEventListener('click', switchingLanguage);