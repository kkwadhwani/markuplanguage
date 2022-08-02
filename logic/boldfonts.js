let text = "how are you -bolb-"
let b = []
let c = []

export default function getBold(text){
    for(let i = 0; i<text.length; i++){

  if(text[i]==="-"){
    b.push(i)
  }
}


for(let j =0; j<text.length; j++){
    
   c.push(text[j])
    if(j===b[0]){
       text[j]===""
       c.push("<strong>")
        
    }
    if(j===b[1]){
        c.push("</strong>")
    }
     
}

let preText = c.join("")
let finalText = preText.replace(/-/g, "")

return finalText
}


