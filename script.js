let sentenceIdex = " rAceCar maDam aYO Who Stays In oYo Was in a Bus to Lagos whEn Her Son Sold the wIng startiNg casing";
      let sentences = sentenceIdex.trim()
      let manipulatedObj={};
      const manipulateFun= (sentences)=>{
         manipulatedObj['upperLowerCased'] =reverseFun(sentences);
         manipulatedObj["ingprop"]= lookingForINGFun(sentences);
         manipulatedObj["palidrome"]= palindromeFun(sentences)
         return manipulatedObj;
      }
      // reverse string cases
      const reverseFun=(sentence)=>{
         let sentenceArr = sentence.split(" ");
         let finalArr = sentenceArr.map(item=>{
         item=item.split("");
         let p=""
         let singleItemArr=[]
         for(let i=0;i<item.length;i++){ 
            p=item[i]==item[i].toLowerCase()? item[i].toUpperCase():item[i].toLowerCase();
            singleItemArr.push(p) 
            } 
            let finalStrArr= singleItemArr.join("") 
            return finalStrArr
            })
            reversedCase =finalArr
            return reversedCase;
      }
      // item with "ings"
      const lookingForINGFun = sentence=>{
         let sentenceArr = sentence.split(" ")
         let StrArr =[];
         let finalArr=[];
         sentenceArr.forEach(item=>{
            let itemLower = item.toLowerCase();
            let itemArr = itemLower.split("")
            if(itemArr[itemArr.length-1]=="g" && itemArr[itemArr.length-2]=="n" && itemArr[itemArr.length-3]=="i")StrArr.push(itemLower);
         })
         StrArr.forEach(item=>{
            let itemfirstItemUpper = item[0].toUpperCase() + item.slice(1);
            finalArr.push(itemfirstItemUpper)
         })
         return finalArr
      }
      // palindrome
      const palindromeFun = sentence=>{
         let palindromeArr =[];
         sentenceArr = sentence.split(" ");
         sentenceArr.forEach(i=>{
            let item = i.toLowerCase()
            let itemReversed = item.split("").reverse().join("");
            if(itemReversed==item){
               palindromeArr.push(itemReversed);
            }
         })
         return palindromeArr
      }
      console.log(manipulateFun(sentences))