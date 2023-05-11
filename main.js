const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('how are you')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'i am tired, what about you?';
      texts.appendChild(p)
    }
    if (text.includes("what's your name") || text.includes('what is your name')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'my name is siren, what is yours?';
      texts.appendChild(p)
    }
    if (text.includes("i'm good") || text.includes('i am doing well')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'that is good to hear';
      texts.appendChild(p)
    }
    if (text.includes('open my YouTube')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'opening youtube homepage...';
      texts.appendChild(p)
      console.log('opening youtube')
      window.open('https://www.youtube.com')
    }
    if (text.includes('show me my portfolio')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'opening portfolio...';
      texts.appendChild(p)
      console.log('displaying portfolio')
      window.open('https://www.cassandrako.com/')
    }
    if (text.includes('show me my GitHub')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'opening github...';
      texts.appendChild(p)
      console.log('displaying github')
      window.open('https://github.com/cassandrako')
    }
    if (text.includes('what is the weather today')|| text.includes("what's the weather today")) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'finding the forecast...';
      texts.appendChild(p)
      console.log('opening weather')
      window.open('https://www.google.com/search?q=what+is+the+weather+today&rlz=1C1UEAD_enCA964CA964&oq=what+is+the+weather+today&aqs=chrome.0.0i433i457i512j0i402i512j0i402i650j0i433i512j0i512l6.2347j1j7&sourceid=chrome&ie=UTF-8')
    }
    if (text.includes('what is on my calendar') || text.includes('open my calendar')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'showing your calendar';
      texts.appendChild(p)
      console.log('opening google calendar')
      window.open('https://calendar.google.com/calendar/u/0/r')
    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();