//disable the default form submission and catch the response in a function



function submitAnswers(){
  var total = 5;
  var score = 0;



  q1 = document.forms["quiz"]["q1"].value; //name of the form is "quiz" and the response of question 1 is stored in q1
  q2 = document.forms["quiz"]["q2"].value;
  q3 = document.forms["quiz"]["q3"].value;
  q4 = document.forms["quiz"]["q4"].value;
  q5 = document.forms["quiz"]["q5"].value;

  for(var i= 1; i<=total;i++){
    if(eval('q'+i) == null || eval('q'+i) == ''){
      alert("You've missed question "+i);
      $("#ques"+i).addClass("missed-ques");
      return false;
    }
  }






  //correct answers
 var answers = ["c","b","a","c","c"];

 //check answers
 for(i= 1; i<=total;i++){
   if(eval('q'+i) == answers[i-1]){
     score++;
     $("#ques"+i).removeClass("missed-ques");
   }
 }





  //display results
  var result = document.getElementById('results');
  result.innerHTML='<h3>You have scored <span>'+score+"</span> out of <span>"+total+"</span></h3>";

  alert("You've scored "+score+"out of "+total);

  return false;
}
