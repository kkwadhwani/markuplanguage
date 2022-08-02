import getBold from "./boldfonts"



let o = [];
let text;
export default function outputHTML(data) {
  switch (data.type) {
    case "h1":
      text = `<h1>${data.text}</h1>`;
      break;

    case "h2":
      text = `<h2>${data.text}</h2>`;
      break;

    case "h3":
      text = `<h3>${data.text}</h3>`;
      break;
    case "":
      text = ``;
      break;

    case "p":
    
      text = `<p>${data.text}</p>`;
      break;

    case "image":
      text = `<img style="width:100px; height:100px" src=${data.src} />`;
      break;
  }
  console.log(text);
  return text;
}
