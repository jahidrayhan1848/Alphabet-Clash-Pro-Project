// function play (){
//     const home=document.getElementById('home-screen');
//     // console.log(home.classList);
//     home.classList.add('hidden');
//     const play=document.getElementById('play-ground');
//     play.classList.remove('hidden')

// }
function continueGame(){
    // get the random alphabet 
    const alphabet=getARandomAlphabet();
    console.log(alphabet);

    // display random alphabet 
    const showRandomAlphabet=document.getElementById('random-alphabet');
    showRandomAlphabet.innerText=alphabet;
    // background color add 
    selectAlphabetColor(alphabet)

}
function play (){
    hideElementById('home-screen')
    showElementById('play-ground')
    
    continueGame()
}