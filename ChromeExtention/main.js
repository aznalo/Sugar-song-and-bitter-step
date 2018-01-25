let urls = [
  'https://youtu.be/P-LdR0WL5Zo',
  'https://youtu.be/bPaTJ_hnbgI',
  'https://youtu.be/lOrw1Qyd-UI',
  'https://youtu.be/qUKZh_6DUGo',
  'https://youtu.be/rsQhLZh4Qnw',
  'https://youtu.be/mxnFzVKrpLI',
  'https://youtu.be/eCmEskrGsfE',
  'https://youtu.be/Vtc2I72X2JE',
  'https://youtu.be/ARGpBKPonoI',
  'https://youtu.be/uh76vaBAsiA',
  'https://youtu.be/L5nvE4jFZnk',
  'https://youtu.be/LpSMLYIIm_I',
  'https://youtu.be/2ZQ5yc-rgTw',
  'https://youtu.be/UM2Y_Kb4NMk',
  'https://youtu.be/eDvwAtG1nGE',
  'https://youtu.be/ko8GKMDD5_c',
  'https://youtu.be/cW7n1zSVVDQ',
  'https://youtu.be/OqlHlCzBuew',
  'https://youtu.be/4SAcy7rCj5Y',
];

let time = [2,5, 10, 30, 60, 180];
for(let i = 0; i < urls.length; i++){
  const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(urls[i]);
    } , (time[Math.floor(Math.random() * time.length)]) * 1000)
  }).then( (url) => {
    window.open(url, url + "(1)", "width=1080,height=720")
    window.open(url, url + "(2)", "width=1080,height=720")
    window.open(url, url + "(3)", "width=1080,height=720")
  } )
}

