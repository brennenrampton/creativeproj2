
var iMax = 20;
var jMax = 3;
var pictures = new Array();
var pictureShow = "";

$(document).ready(function() {

	var d = new Date();
	var time = d.getTime();
	console.log(time);
	var max = time - 86400000;
	console.log(max);

	max /= 1000;

	var myurl = "https://api.instagram.com/v1/media/search?access_token=2872376287.1fb234f.03b6236d665645a1a43a96fc70ad2fb5&lat=40.248197&lng=-111.649214&max_timestamp=";
	myurl += max;
	/*myurl += max;
	&max_timestamp=*/
	myurl += "&distance=1000";

	console.log(myurl);

	$.ajax({
		url: myurl,
		dataType: "jsonp",
		success: function(parsed_json) {

			iMax = parsed_json['data'].length;

			for (i = 0; i < iMax; i++) {
				pictures[i] = new Array();
				for (j = 0; j < jMax; j++) {
					pictures[i][j] = 0;
				}
			}
			console.log(parsed_json);
			for (var i = 0; i < parsed_json['data'].length; i++) {
				pictures[i][0] = parsed_json['data'][i]['likes']['count'];
				pictures[i][1] = parsed_json['data'][i]['images']['low_resolution']['url'];
				pictures[i][2] = parsed_json['data'][i]['link'];
			}

			console.log(pictures);
			insertionSort(pictures);
			console.log(pictures);
			writePictures(pictures);
		}
	});

	
});

function insertionSort(unsortedList) {
  var len = unsortedList.length;
  
  for(var i = 0; i < len; i++) {
    var tmp = unsortedList[i]; //Copy of the current element.
    /*Check through the sorted part and compare with the 
    number in tmp. If large, shift the number*/
    for(var j = i - 1; j >= 0 && (unsortedList[j][0] < tmp[0]); j--) {
      //Shift the number
      unsortedList[j+1] = unsortedList[j];
    }
    //Insert the copied number at the correct position
    //in sorted part.
    unsortedList[j+1] = tmp;
  }
}

/*
Pass the function an array of image URLs and it will print them into the table in the html doc.
*/
	function writePictures(imageArray) {
		
		//console.log("imageArray: " imageArray);
		var rows;
		rows = Math.ceil(imageArray.length / 5);
		console.log("Rows: " + rows);
		console.log("iMax: " + iMax);
		for (var i = 0; i < iMax; i++) {
			console.log("i : " + i);
			if (i % 5 == 0) {
				pictureShow += "<tr>"
			}
			pictureShow += "<td>" + "<a href="+imageArray[i][2]+">" + "<img src=" + imageArray[i][1] + ">" + "</a>" + "</td>";
			if (i % 5 == 4) {
				pictureShow += "</tr>"
			}
		}
		if ((i - 1) % 5 != 4) {
			pictureShow += "</tr>"
		}
		console.log(pictureShow);
		$(".picture-table").html(pictureShow);

	}