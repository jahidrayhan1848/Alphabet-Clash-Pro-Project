// function play (){
//     const home=document.getElementById('home-screen');
//     // console.log(home.classList);
//     home.classList.add('hidden');
//     const play=document.getElementById('play-ground');
//     play.classList.remove('hidden')

// }
 function handleKeyboard (event){
    // console.log(event.key);
    // user target keyboard pressed 
    const userPressed= event.key;
    console.log('user pressed :', userPressed);

    const previousAlphabet=document.getElementById('random-alphabet');
    // console.log(previousAlphabet.innerText);
    const currentAlphabet=previousAlphabet.innerText;
    const current=currentAlphabet.toLowerCase()
    if(userPressed===current){
        console.log('yes,matching bro');
        // using common function use 
        const currentValue=getTextElementById("current-score");
        const updatedValue= currentValue + 1;
        setValueById('current-score', updatedValue)
      

        


          // score update 
        //   const currentScoreElement=document.getElementById("current-score");
        //   const currentScore= parseInt(currentScoreElement.innerText);
        //   const currentScores=currentScore + 1;
        //   currentScoreElement.innerText=currentScores;
        removeColor(userPressed)
        continueGame()
      
       
    }
    else{
        // using function ///
        const currentLife=getTextElementById("current-life");
        const updateLife= currentLife -1;
        setValueById('current-life',updateLife)
        if(updateLife===0){
            hideElementById("play-ground")
            showElementById("final-score")
        }


           




        // console.log('oh no,,, sorry');
        // const currentLifeElement=document.getElementById("current-life");
        // const currentLife=parseInt(currentLifeElement.innerText)
        // // console.log(currentLife);
        // const newLife=currentLife -1;
        // currentLifeElement.innerText=newLife;
       
    }
 }

document.addEventListener('keyup', handleKeyboard)
function continueGame(){
    // get the random alphabet 
    const alphabet=getARandomAlphabet();
    // console.log("Random letter is :",alphabet);

    // display random alphabet 
    const showRandomAlphabet=document.getElementById('random-alphabet');
    showRandomAlphabet.innerText=alphabet;
    // background color add 
    selectAlphabetColor(alphabet)

}
function play (){
    // hide and show //
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')
    //  reset life and score 
    setValueById('current-life',5)

    setValueById('current-score',0)
    
    continueGame()
}