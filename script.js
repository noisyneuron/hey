

const boxes = document.querySelectorAll('.box');


let speak = (txt) => {
  var msg = new SpeechSynthesisUtterance(`hi maya, i am feeling ${txt}`);



  const voices = window.speechSynthesis.getVoices();
  console.log(voices[17]);

  msg.voice = voices[61];
  window.speechSynthesis.speak(msg);

  voices.forEach(function(voice, i) {
  console.log(i, voice.name, voice.default ? voice.default :'');
  });
}

boxes.forEach( b => {
  let txt = b.querySelector('p').innerText;
  b.addEventListener('click', () => { speak(txt); } );
})
