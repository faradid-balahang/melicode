function codemeli(codemelis){

    var codemelis = String(codemelis);
    var codemelisLength = parseInt(codemelis.toString().length);
    var slicse =10;
    var number =0;
    var position = 0;
    var sum = 0;
    // codemelis = parseInt(codemelis);
    console.log(codemelis.toString().length);
    if(codemelisLength<10){
        var howmemeny = 10 - codemelisLength;
        for (let i = 0; i < howmemeny; i++) {
            codemelis = "0" + codemelis;
          }
    }
    codemelisLength = parseInt(codemelis.toString().length);
    console.log(codemelisLength);
    for (let i = 0; i < codemelisLength; i++) {
        if(slicse>0){
            slicse   = codemelisLength - (i+2);  
            position = 10-slicse;  
            console.log(slicse);
            number   =  codemelis.slice(slicse,slicse+1); 
            console.log("number: "+number);
            console.log("position: "+position);
            console.log(number*position);
          
            sum = sum+(number*position);
            console.log("sum: "+sum);
        }
    }
    if(sum>11){
        divide = parseInt(sum%11);
        console.log("divide: "+ divide);
        check= codemelis.slice(codemelisLength-1); 
        console.log("check: "+check);
        if(divide<2){               
           if(divide == check){
            return codemelis;
           }
        }else if(divide > 11){
            if(divide-11 == check){
                return codemelis;
            }
        }else{
            if(11 - divide == check){
                return codemelis;
            }
        }
    }


}
export { codemeli };
