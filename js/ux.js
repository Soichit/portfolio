// Function for getting data
var getData = function() {
	$.get("files/ux.json", function(data) {
		customBuild(data);
	});
}

var customBuild = function(data) {
	parsedData = JSON.parse(data);
	//console.log(data);
	for (var i = 0; i < 3; i++) {
		$('#title' + i).append(parsedData[i].Title);
		$('#description' + i).append(parsedData[i].Description);
		$('#achievement' + i).append(parsedData[i].Achievement);
		$("#url1-" + i).attr("href", parsedData[i].Url1);
		$("#url2-" + i).attr("href", parsedData[i].Url2);
		$("#url3-" + i).attr("href", parsedData[i].Url3);
	}
}