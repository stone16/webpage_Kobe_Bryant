function readCsv(){
	var csv1 = $.get(pergame.csv);
	var result = $.csv.toObjects(csv1);
	alert(result);
}
