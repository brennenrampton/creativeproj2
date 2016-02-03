/*
Pass the function an array of image URLs and it will print them into the table in the html doc.
*/
function writePictures(imageArray){
	var pictureShow = '';
	var rows;
	rows = Math.ceil(imageArray.length / 5);
	for (var i = 0; i < imageArray.length; i++) {
		if(i % 5 == 0){
			pictureShow += "<tr>"
		}
		pictureShow += "<td><img src='" + imageArray[i] + "'></td>";
		if(i % 5 == 4){
			pictureShow += "</tr>"
		}
	}
		if((i-1) % 5 != 4){
			pictureShow += "</tr>"
		}
	console.log(pictureShow);
	$(".picture-table").html(pictureShow);

}



var testArray = ["http://www.futureplan.biz/wp-content/uploads/2015/04/astute-Cool-Designs-Download-HD-Wallpapers-like-cool-designs-formidable.jpg",
 "http://www.futureplan.biz/wp-content/uploads/2015/04/astute-Cool-Designs-Download-HD-Wallpapers-like-cool-designs-formidable.jpg",
 "http://www.futureplan.biz/wp-content/uploads/2015/04/astute-Cool-Designs-Download-HD-Wallpapers-like-cool-designs-formidable.jpg",
 "http://www.futureplan.biz/wp-content/uploads/2015/04/astute-Cool-Designs-Download-HD-Wallpapers-like-cool-designs-formidable.jpg",
 "http://www.futureplan.biz/wp-content/uploads/2015/04/astute-Cool-Designs-Download-HD-Wallpapers-like-cool-designs-formidable.jpg",
 "http://www.futureplan.biz/wp-content/uploads/2015/04/astute-Cool-Designs-Download-HD-Wallpapers-like-cool-designs-formidable.jpg",
 "http://www.futureplan.biz/wp-content/uploads/2015/04/astute-Cool-Designs-Download-HD-Wallpapers-like-cool-designs-formidable.jpg",
 "http://www.futureplan.biz/wp-content/uploads/2015/04/astute-Cool-Designs-Download-HD-Wallpapers-like-cool-designs-formidable.jpg",
 "http://www.futureplan.biz/wp-content/uploads/2015/04/astute-Cool-Designs-Download-HD-Wallpapers-like-cool-designs-formidable.jpg"]


$(document).ready(function(){
	writePictures(testArray);
});

