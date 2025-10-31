const guessInput = document.getElementById('guess');
const brand = document.getElementById('brand');
const line = document.getElementById('line');
const victory = document.getElementById('victory');

const games = [
  { generic: 'bandage', brand: 'Band-Aid' },
  { generic: 'adjustable', brand: "Crescent Wrench" },
  { generic: 'acetaminophen', brand: "Tylenol" }
];

let i = 0;

guessInput.value = "";



brand.innerText = games[i].brand;

function displayWin(){
    line.style.display = "none";
    victory.style.display = "block";
    document.body.style.backgroundColor = "green";
            
}
function displayCorrect(){
    line.style.display = "none";
    correct.style.display = "block";
    document.body.style.backgroundColor = "var(--correct-color)";
    guessInput.style.backgroundColor = "var(--correct-color)";

    setTimeout(() => {
        line.style.display = "block";
        correct.style.display = "none";
        document.body.style.backgroundColor = "var(--background-color)";
        //why doesnt this work??
        guessInput.style.backgroundColor = "var(--background-color)";
        guessInput.focus();
    }, 1700);
    

}
function displayWrong(){
    document.body.style.transition = "all 0.12s ease-in-out";
    line.style.display = "none";
    wrong.style.display = "block";
    document.body.style.backgroundColor = "var(--wrong-color)";
    guessInput.style.backgroundColor = "var(--wrong-color)";

    setTimeout(() => {
        line.style.display = "block";
        wrong.style.display = "none";
        document.body.style.backgroundColor = "var(--background-color)";
        //why doesnt this work??
        guessInput.style.backgroundColor = "var(--background-color)";
        guessInput.focus();
    }, 250);
    

}


guessInput.addEventListener('keydown', function(event){
if (event.key === "Enter"){
    event.preventDefault();
    console.log("Entered: ");
    console.log(guessInput.value);
    // if (guessInput.value == "test"){
    //     displayWin();
    // }
    if (guessInput.value.toLowerCase().trim() == games[i].generic){
        console.log("Correct");
        displayCorrect();
        i++;
        if (i < games.length){
            guessInput.style.width =  games[i].generic.length + ".25ch";
            brand.innerText = games[i].brand;
            guessInput.value = "";
        }
        else{
            displayWin();

        }
      
    }
    else {
        displayWrong();
    }
}
})





//guessInput width = char count *2 -1 rem / maybe
