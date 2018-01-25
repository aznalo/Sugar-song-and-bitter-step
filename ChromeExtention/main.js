let urls = [
  "https://goo.gl/pvgcEn",
  "https://goo.gl/Yno5V7",
  "https://goo.gl/5NmuPw",
  "https://goo.gl/DYVzLG",
  "https://goo.gl/Gn6w3V",
  "https://goo.gl/9VqzUM",
  "https://goo.gl/AFgY8z",
  "https://goo.gl/fr5y3N",
  "https://goo.gl/bU3K5R",
  "https://goo.gl/C9XfT4",
  "https://goo.gl/MHk73n",
  "https://goo.gl/VcqNwe",
  "https://goo.gl/6t7Th8",
  "https://goo.gl/WNLBvE",
  "https://goo.gl/AHcYHi",
  "https://goo.gl/b7A5nW",
  "https://goo.gl/ND9i7r",
  "https://goo.gl/cTtuhE",
  "https://goo.gl/m2dAQE",
  "https://goo.gl/iu581c",
  "https://goo.gl/WWJkRk",
  "https://goo.gl/VDr8wS",
  "https://goo.gl/7i5tVk",
  "https://goo.gl/4K4csG",
  "https://goo.gl/oMDqAo",
  "https://goo.gl/QL7oPy",
  "https://goo.gl/NQ9ZWm",
  "https://goo.gl/VPb83g",
  "https://goo.gl/ujCmpb",
  "https://goo.gl/hT6V8W",
  "https://goo.gl/pCDxeW",
  "https://goo.gl/M6hgJZ",
  "https://goo.gl/ykb6GY",
  "https://goo.gl/ZDyU9A",
  "https://goo.gl/ywAB3L",
  "https://goo.gl/eFR2d4",
];

let time = [2, 5, 10, 30, 60, 180];
const promise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    resolve(urls[Math.floor(Math.random() * urls.length)]);
  } , (time[Math.floor(Math.random() * time.length)]) * 1000)
}).then( (url) => {
  window.open(url, url + "(1)", "width=1080,height=720")
} )

