const sign = document.querySelector('.app');
const transitionButton = sign.querySelector('.transitionButton');
const memberButton =  sign.querySelector('.memberButton');

transitionButton.addEventListener('click', function (event) {
  const target = event.target;
  const action = target.classList[0];
  console.log('a');
  console.log(action)
 
})

memberButton.addEventListener('click', function (event) {
  const target = event.target;
  const action = target.classList[0];
  console.log('b');
  console.log(action)
 
})

//console.log('a');