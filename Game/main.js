const game =()=> {
    let pScore = 0;
    let cScore = 0;
   //Start the Game
    const startGame = () =>{
        const playBtn =document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click' ,() =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        })
    }
       //Play mathch
     const playMatch =  () =>{
       const options = document.querySelectorAll(".options button");
       const playerHand = document.querySelector(".player-hands");
       const computerHand = document.querySelector(".computer-hands");
       //computers option 
       const computerOptions = ['rock','paper','scissors'];

       options.forEach(option =>{
           option.addEventListener("click",function(){
              const computerNumber = Math.floor(Math.random() * 3);
              const computerChoice = computerOptions[computerNumber];
               setTimeout(() =>{
                   compareHands(this.textContent,computerChoice);
               playerHand.src = `./images/${this.textContent}.png`;
               computerHand.src  = `./images/${computerChoice}.png`;
               },100);
              
           });
       });
     };

     const updateScore = () =>{
         const playerScore = document.querySelector('.player-score p');
         const computerScore = document.querySelector('.computer-score p');
         playerScore.textContent = pScore;
         computerScore.textContent = cScore;
     }

     const compareHands = (playerChoice, computerChoice) =>{
         const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = 'Draw!';
            return;
        }
        if(playerChoice ==='rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = "You Won!"
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Hamid Won!'
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice ==='scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = "Hamid Won!"
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'You Won!'
                pScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice ==='paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = "Hamid Won!"
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'You Won!'
                pScore++;
                updateScore();
                return;
            }
        }
     }

     //call all the inner function
    startGame();
    playMatch();
}
 //start the game function
game();  


function Loader(){
    document.getElementById('loader').style.display = "none";
    document.getElementById('root').style.display = "block";
}
setInterval(Loader,4000);
     