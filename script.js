function bottlesOfBeer(){
	for( i=99;i>=0;i--){
			if(i>1){
				document.getElementById("main").innerHTML += i + " bottles of beer on the wall, " + i + " bottles of beer"+ "<br />";
				document.getElementById("main").innerHTML += "Take one down and pass it around, " + (i-1) + " bottles of beer on the wall"+ "<br />";
			}
			else if(i == 1){
				document.getElementById("main").innerHTML += i+ " bottle of beer on the wall, " +i+ " bottle of beer"+ "<br />";
				document.getElementById("main").innerHTML += "Take one down and pass it around, no more bottles of beer on the wall"+ "<br />";
			}else{
				document.getElementById("main").innerHTML += "No more bottles of beer on the wall, no more bottles of beer."+ "<br />";
				document.getElementById("main").innerHTML += "Go to the store and buy some more, 99 bottles of beer on the wall."+ "<br />";
			}
	}
}




window.onload = bottlesOfBeer();