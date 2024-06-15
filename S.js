let Input = document.getElementById("DIS_MAIN");
function Clicked(i) {
    let Val = Input.value;
    if (i == "1") {
        Val += "1";
    }else if(i == "2"){
        Val += "2";
    }else if(i == "3"){
        Val += "3";
    }else if(i == "4"){
        Val += "4";
    }else if(i == "5"){
        Val += "5";
    }else if(i == "6"){
        Val += "6";
    }else if(i == "7"){
        Val += "7";
    }else if(i == "8"){
        Val += "8";
    }else if(i == "9"){
        Val += "9";
    }else if(i == "0"){
        Val += "0";
    }else if(i == "+"){
        
        let a = Input.value;
        console.log(a[a.length - 1]);
        if(  
            a[a.length - 1] == "+" ||
            a[a.length - 1] == "-" || 
            a[a.length - 1] == "/" || 
            a[a.length - 1] == "*" ){
                // console.log("a");
                // console.log(a);
                // a[a.length - 1] = "+";
                let aa = a.slice(0, -1);
                // console.log(aa);
                aa+="+";

                Val = aa;

        }else{
            Val += "+";
        }
    }else if(i == "-"){
        let a = Input.value;
        console.log(a[a.length - 1]);
        if(  
            // a[a.length - 1] == "+" ||
            a[a.length - 1] == "-"){
            // a[a.length - 1] == "/" || 
            // a[a.length - 1] == "*" ){
                // console.log("a");
                // console.log(a);
                // a[a.length - 1] = "+";
                let aa = a.slice(0, -1);
                // console.log(aa);
                aa+="-";

                Val = aa;

        }else{
            Val += "-";
        }
        
    }else if(i == "*"){
        let a = Input.value;
        console.log(a[a.length - 1]);
        if(  
            a[a.length - 1] == "+" ||
            a[a.length - 1] == "-" || 
            a[a.length - 1] == "/" || 
            a[a.length - 1] == "*" ){
                // console.log("a");
                // console.log(a);
                // a[a.length - 1] = "+";
                let aa = a.slice(0, -1);
                // console.log(aa);
                aa+="*";

                Val = aa;

        }else{
            Val += "*";
        }
    }else if(i == "/"){
        let a = Input.value;
        console.log(a[a.length - 1]);
        if(  
            a[a.length - 1] == "+" ||
            a[a.length - 1] == "-" || 
            a[a.length - 1] == "/" || 
            a[a.length - 1] == "*" ){
                // console.log("a");
                // console.log(a);
                // a[a.length - 1] = "+";
                let aa = a.slice(0, -1);
                // console.log(aa);
                aa+="/";

                Val = aa;

        }else{
            Val += "/";
        }
    }else if(i == "A"){
        try {
            let a = eval(Input.value);
            Val = "= " + a;
        } catch (error) {
            Val = "Syntax Error"
            
        }
    
    }else if(i == "C"){
        Val = "";
    }

    Input.value = Val;
}