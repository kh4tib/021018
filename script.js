// const ovalOne = document.querySelector('.js-oval-one');
// const ovalTwo = document.querySelector('.js-oval-two');
// const ovalThree = document.querySelector('.js-oval-three');
// const ovalFour = document.querySelector('.js-oval-four');
// const ovalFive = document.querySelector('.js-oval-five');
// const container = document.querySelector('.main-content');

// ovalOne.addEventListener('click', () => {
//     container.classList.add('oval-one-two');
// });

document.getElementsByClassName("banana")[0].addEventListener('click', myFunction);

function myFunction() {
    document.getElementsByClassName("js-oval-two")[0].classList.toggle('oval-two');
    document.getElementsByClassName("js-oval-three")[0].classList.toggle('oval-three');
    document.getElementsByClassName("js-oval-four")[0].classList.toggle('oval-four');
    document.getElementsByClassName("js-oval-five")[0].classList.toggle('oval-five');
    
  
}