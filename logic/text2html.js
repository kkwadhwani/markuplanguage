// const fs  = require("fs")
// const path = require("path")
// const pathFile = path.join( process.cwd(),"readme.txt")

// const data = fs.readFileSync(pathFile, "utf-8").split("\n")


export default function textToHTML(data){
    let fullJsonData=[]
    // for(let i = 0; i<data.length; i++){
    //     if(data[i].slice(0,2)==="h1"){
    //     let newLine = data[i].split("h1").slice(1).toString()

    //      let l = newLine.length
        
    //      const n = `<h1>${newLine}</h1>`
    //     data[i]=n

    //     }

    //     if(data[i].slice(0,2)==="h2"){

    //         let newLine = data[i].split("h2").slice(1).toString()
    
    //          let l = newLine.length
            
    //          const n = `<h2>${newLine}</h2>`
    //         data[i]=n
    
    //         }

    //         if(data[i].slice(0,3)==="-img"){

    //             let newLine = data[i].split("-img").slice(1).toString()
    //             const src = newLine.split(" ")[ 1]
    //             console.log(src)
              
            
    //              let l = newLine.length
                
    //              const n = `<img src="${src}"></img>`
    //             data[i]=n
        
    //             }

    //             if(data[i].slice(0,1)==="p"){

    //                 let newLine = data[i].split("p").slice(1).toString()
    //                 console.log(newLine)
            
    //                  let l = newLine.length
                    
    //                  const n = `<p>${newLine}</p>`
    //                 data[i]=n
            
    //                 }

               
      
        
    //    }
    //    console.log(data)

for(let i=0; i<data.length; i++){
    if(data[i].slice(0, 2)==="h1"){
    let h1 = {type:"h1", text:data[i].slice(3)}

    fullJsonData.push(h1)

    }
    if(data[i].slice(0, 2)==="h2"){
        let h2 = {type:"h2", text:data[i].slice(3)}
    
        fullJsonData.push(h2)
    
        }

        if(data[i].slice(0, 2)==="h3"){
            let h3 = {type:"h3", text:data[i].slice(3)}
        
            fullJsonData.push(h3)
        
            }
        if(data[i].slice(0, 2)==="im"){
            let image = {type:"image", src: data[i].slice(3)}
        
            fullJsonData.push(image)
        
            }

            // if(data[i].slice(0, 2)==="pg"){
            //     let pg = {type:"p", text: data[i].slice(3)}
            
            //     fullJsonData.push(pg)
            
            //     }
                if(data[i].slice(0, 2)!=="h1" && data[i].slice(0, 2)!=="h2" && data[i].slice(0, 2)!=="h3"
                
                && data[i].slice(0, 2)!=="h4"    && data[i].slice(0, 2)!=="im" 
                ){
                    let pg = {type:"p", text: data[i].slice(0)}
                
                    fullJsonData.push(pg)
                
                    }
}

return fullJsonData
    }



