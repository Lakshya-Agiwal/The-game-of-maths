var player_1="";
var player_2="";
function login()
{
    player_1=document.getElementById("input1").value;
    player_2=document.getElementById("input2").value;
    localStorage.setItem("store_1" , player_1);
    localStorage.setItem("store_2" , player_2);
    window.location="game_login.html";
}
