var btnTranslate = document.querySelector('.btn-translate');
var textInput = document.querySelector('.text-input');
var sectionOutput = document.querySelector('.section-output');
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" +input
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with the serever! try again after some time");
}

function clickEventHandler(){
    var inputText = textInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        sectionOutput.innerText = translatedText; //output
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler);

