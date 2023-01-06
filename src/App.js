const init = document.querySelector('body');
const sign = document.querySelector('.app');
const transitionButton = sign.querySelector('.transitionButton');
const memberButton =  sign.querySelector('.memberButton');
const input = sign.querySelector('.memberNumberFormatInputBox');
const ageMessage = document.querySelector('.memberNumberFormatLabel');



init.addEventListener('click', function (event) {
  const target = event.target;
  const action = target.classList[0];
  console.log(action)

  if(target.matches('input')) {
    if(action === 'memberNumberFormatInputBox') {
      changeStyle();
      console.log(target);
    }
  }

  if(!target.matches('input')) {
    initStyle();
  }
})

function changeStyle() {
  document.querySelector('.age').style.borderBottom = '1px solid #1ea1f7';
  input.value = '____/__/__';
  input.setSelectionRange(0,0);

  ageMessage.style.transition = 'all 150ms linear';
  ageMessage.style.top = '300px';
  ageMessage.style.fontSize = '14px';
  ageMessage.style.color = '#1ea1f7';
}

function initStyle() {
  document.querySelector('.age').style.borderBottom = '1px solid #dddfe4';
  document.querySelector('.memberNumberFormatLabel').style.top = '';
  ageMessage.style.fontSize = '17px';
  ageMessage.style.color = '#acabb4';
  input.value = '';
}

memberButton.addEventListener('click', function (event) {
  const target = event.target;
  console.log('b');
})

//console.log('a');