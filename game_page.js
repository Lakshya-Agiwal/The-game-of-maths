var player_1_name = localStorage.getItem("store_1");
var player_2_name = localStorage.getItem("store_2");
var num1 =0;
var num2=0;
var actual_ans=0;
var get_ans = "";
document.getElementById("player1_name").innerHTML = player_1_name + ":";
document.getElementById("player2_name").innerHTML = player_2_name + ":";
var player_1_score = 0;
var player_2_score = 0;
document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;
document.getElementById("Q_Turn").innerHTML = player_1_name;
document.getElementById("A_Turn").innerHTML = player_2_name;
var A1_turn=player_2_name;
var Q1_Turn=player_1_name;
function send_num()
{
    num1 = document.getElementById("word_input").value;
    num2 = document.getElementById("word_input2").value;
    actual_ans = parseInt(num1)*parseInt(num2);
    var question_number = "<h4>"+num1+"x"+num2+"<h4>";
    var input_box = "<br>Answer : <input type='text' id='input_ans'>";
    var check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    var row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word_input").value="";
    document.getElementById("word_input2").value="";
}
function check()
{
     var entered_ans = document.getElementById("input_ans").value;
     if(actual_ans == entered_ans)
     {
       if(A1_turn == player_1_name)
       {     console.log(player_1_name);
           player_1_score=player_1_score+1;
           document.getElementById("player1_score").innerHTML = player_1_score;
           Q1_Turn = player_1_name;
           A1_turn = player_2_name;
           document.getElementById("Q_Turn").innerHTML=Q1_Turn;
           document.getElementById("A_Turn").innerHTML=A1_turn;
           document.getElementById("result").innerHTML = "Correct";

       }
       else if(actual_ans == entered_ans)
       {
           player_2_score=player_2_score+1;
           document.getElementById("player2_score").innerHTML = player_2_score;
           Q1_Turn = player_2_name;
           A1_turn = player_1_name;
           document.getElementById("Q_Turn").innerHTML=Q1_Turn;
           document.getElementById("A_Turn").innerHTML=A1_turn;
           document.getElementById("result").innerHTML = "Correct";
       }
     }
     else if (actual_ans != entered_ans)
     {
        if(A1_turn == player_1_name)
        {     console.log(player_1_name);
            
            document.getElementById("player1_score").innerHTML = player_1_score;
            Q1_Turn = player_1_name;
            A1_turn = player_2_name;
            document.getElementById("Q_Turn").innerHTML=Q1_Turn;
            document.getElementById("A_Turn").innerHTML=A1_turn;
            document.getElementById("result").innerHTML = "Wrong";
 
        }
        else if(A1_turn == player_2_name)
        {
            
            document.getElementById("player2_score").innerHTML = player_2_score;
            Q1_Turn = player_2_name;
            A1_turn = player_1_name;
            document.getElementById("Q_Turn").innerHTML=Q1_Turn;
            document.getElementById("A_Turn").innerHTML=A1_turn;
            document.getElementById("result").innerHTML = "Wrong";
        }
     }
     document.getElementById("output").innerHTML = "";
}




