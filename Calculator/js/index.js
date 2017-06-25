
var myOutput = document.getElementById("output");
var mybtn = document.getElementsByClassName("cbutton");
var myCal="";
var myCom = false;
var mySwitch = false;
var myOpe = ["+","-","*","/"];

console.log(mybtn); // the log gives us information about the innerHTML and innerText, which we can use in our JS code

for (var i = 0; i < mybtn.length; i++) {
  mybtn[i].addEventListener("click",function(){
    var myValue = this.innerHTML;
    console.log(myValue);

    if( myCom || myCal == "0"){
      myCom = false;
      myCal = " ";
    }

    if(myValue == "+" || myValue == "-" || myValue == "*" || myValue == "/"){

      if(mySwitch){
       mySwitch = false;
        if(myOpe.indexOf(myOutput.innerHTML.slice(-1))>-1){
          myCal = myCal.substring(0,myCal.length-1); // needs to underestand -> replaces the operators at the end
        }else{
          myCal = eval(myCal);
        }
      }
     mySwitch = true;
    }

    if(myValue == "="){
      myValue ="";
    if(myOpe.indexOf(myOutput.innerHTML.slice(-1)) == -1){ // -1 means false
      myCal = eval(myCal);
    }
    }
    else if(myOutput.innerHTML.indexOf(".")>-1  && myValue == "."){ //blocks the appearance of more than 1 decimal
      myValue ="";                                                 //  -1 means the decimal dosent exist
                                                                    //myOutput.innerHTML.indexOf(".")>-1 checks the pre-existance of a decimal place
    }
    else if(myValue == "C"){
      myCal = " ";
      myCom = true;
    }else{
      myCal = myCal + myValue;
    }





    myOutput.innerHTML = myCal;


  });
}
