function hideElementById(elementId){
    const hide=document.getElementById(elementId);
    hide.classList.add('hidden');

}
function showElementById(elementId){
    const show=document.getElementById(elementId);
    show.classList.remove('hidden');

}
function getARandomAlphabet(){
    const alphabetString='zxcvbnmasdfghjklqwertyuiop';

    // get a alphabet array 
    const alphabets=alphabetString.split('');
    // console.log(alphabet);
    // random number 0 to 25 
    const random=Math.random()*25
    const index=Math.round(random)
    // console.log(random,index);
    const alphabet =alphabets[index];
    // console.log(index,alphabet);
    return alphabet;

}
function selectAlphabetColor(elementId){
    const color =document.getElementById(elementId);
    color.classList.add('bg-orange-400')

}
function removeColor (elementId){
    const color =document.getElementById(elementId);
    color.classList.remove('bg-orange-400')


}
function getTextElementById(elementId){
    const elementById=document.getElementById(elementId);
    const currentValue=parseInt(elementById.innerText);
    return currentValue;


}
function setValueById(elementId,value){
    const setValue=document.getElementById(elementId);
    setValue.innerText=value;


}