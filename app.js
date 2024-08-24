let randomNumber = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = 'dice' + randomNumber + '.png';
let randomImageSource = 'images/' + randomDiceImage;
  
let image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImageSource);
  
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = 'images/dice' + randomNumber2 + '.png';
let image2 =  document.querySelectorAll('img')[1];
image2.setAttribute('src', randomImageSource2); 

function dados(){

  let randomNumber = Math.floor(Math.random() * 6) + 1;
  let randomDiceImage = 'dice' + randomNumber + '.png';
  let randomImageSource = 'images/' + randomDiceImage;
  
  let image1 = document.querySelectorAll('img')[0];
  image1.setAttribute('src', randomImageSource);
  
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomImageSource2 = 'images/dice' + randomNumber2 + '.png';
  let image2 =  document.querySelectorAll('img')[1];
  image2.setAttribute('src', randomImageSource2); 
  
  if(randomNumber > randomNumber2){
    document.querySelector('h1').innerHTML = '🏆 jogador 1 ganhou';
  }else if(randomNumber2 > randomNumber){
    document.querySelector('h1').innerHTML = '🏆 jogador 2 ganhou';
  }else{
    document.querySelector('h1').innerHTML = 'Empate';
  }
}
  