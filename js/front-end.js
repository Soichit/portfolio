// Function for getting data
var getData = function() {
	$.get("files/front-end.json", function(data) {
		customBuild(data);
	});
}

var customBuild = function(data) {
	parsedData = JSON.parse(data);
	//console.log(data);
	for (var i = 0; i < 6; i++) {
		$('#url' + i).append(parsedData[i].Title);
		$("#url" + i).attr("href", parsedData[i].Url);
		$("#url2-" + i).attr("href", parsedData[i].Url);
		$('#description' + i).append(parsedData[i].Description);
		$("#image" + i).attr("src", parsedData[i].Image);
	}
}