$(document).ready(function() {
   
	var userTurn = "X";
	var xArray=[];
	var oArray=[];
	var turnNum=0;

	$(".js-gameButton").on("click", function(){
		$(this).text(userTurn);
		$(this).attr('disabled','disabled');
		updateMoves(this);
		turnNum++;
		checkWinner();
		nextTurn();
		
	});

	function checkWinner(){
		var tempArray
		if(userTurn==="X"){
			tempArray = xArray;
		}
		else{
			tempArray = oArray;
		}

		//eight winning cases:

		if (tempArray[1] && tempArray[2] && tempArray[3]){
			$("#gameMessage").append("<div>" + userTurn + " wins the game </div>");
			endGame();
		}
		else if (tempArray[4] && tempArray[5] && tempArray[6]){
			$("#gameMessage").append("<div>" + userTurn + " wins the game </div>");
			endGame();
		}
		else if (tempArray[7] && tempArray[8] && tempArray[9]){
			$("#gameMessage").append("<div>" + userTurn + " wins the game </div>");
			endGame();
		}
		else if (tempArray[1] && tempArray[4] && tempArray[7]){
			$("#gameMessage").append("<div>" + userTurn + " wins the game </div>");
			endGame();
		}
		else if (tempArray[2] && tempArray[5] && tempArray[8]){
			$("#gameMessage").append("<div>" + userTurn + " wins the game </div>");
			endGame();
		}
		else if (tempArray[3] && tempArray[6] && tempArray[9]){
			$("#gameMessage").append("<div>" + userTurn + " wins the game </div>");
			endGame();
		}
		else if (tempArray[1] && tempArray[5] && tempArray[9]){
			$("#gameMessage").append("<div>" + userTurn + " wins the game </div>");
			endGame();
		}
		else if (tempArray[3] && tempArray[5] && tempArray[7]){
			$("#gameMessage").append("<div>" + userTurn + " wins the game </div>");
			endGame();
		}
		else if(turnNum===9){
			$("#gameMessage").append("<div> Draw! </div>");
			endGame();
		}
	}
	function endGame(){
		$(".js-gameButton").attr('disabled','disabled');
	}
	function nextTurn(){
		if (userTurn === "X"){
			userTurn = "O";
		}
		else{
			userTurn="X";
		}
	}
	function updateMoves(buttonClicked){
		if(userTurn==="X"){
			xArray[$(buttonClicked).attr("value")]=true;
		}
		else{
			oArray[$(buttonClicked).attr("value")]=true;
		}
	}
	

});


		