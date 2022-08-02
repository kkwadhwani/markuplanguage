

export default function textToHTML(data) {
  let fullJsonData = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].slice(0, 2) === "h1") {
      let h1 = { type: "h1", text: data[i].slice(3) };

      fullJsonData.push(h1);
    }
    if (data[i].slice(0, 2) === "h2") {
      let h2 = { type: "h2", text: data[i].slice(3) };

      fullJsonData.push(h2);
    }

    if (data[i].slice(0, 2) === "h3") {
      let h3 = { type: "h3", text: data[i].slice(3) };

      fullJsonData.push(h3);
    }
    if (data[i].slice(0, 2) === "im") {
      let image = { type: "image", src: data[i].slice(3) };

      fullJsonData.push(image);
    }

    // if(data[i].slice(0, 2)==="pg"){
    //     let pg = {type:"p", text: data[i].slice(3)}

    //     fullJsonData.push(pg)

    //     }
    if (
      data[i].slice(0, 2) !== "h1" &&
      data[i].slice(0, 2) !== "h2" &&
      data[i].slice(0, 2) !== "h3" &&
      data[i].slice(0, 2) !== "h4" &&
      data[i].slice(0, 2) !== "im"
    ) {

      let slicedText = data[i].slice(0).replaceAll("--", "<strong>").replaceAll("++", "</strong>").replaceAll("<<", "<em>").replaceAll(">>" , "</em>")
      

     
      let pg = { type: "p", text: slicedText};

      

      fullJsonData.push(pg);
    }
  }

  return fullJsonData;
}
