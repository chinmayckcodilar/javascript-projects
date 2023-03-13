
var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://www.omdbapi.com/?s=spiderman&apikey=" +"be425d18");
xhr.open("GET", "http://www.omdbapi.com/?s=batman&apikey=" +"be425d18");
// for(var i=0;i<3;i++)
xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        var response = JSON.parse(this.responseText);
        var movies = response.Search;
        var table = document.getElementById("movie-table").getElementsByTagName("tbody")[0];

		for (var i = 0; i < movies.length; i++) {
			var movie = movies[i];
			var row = table.insertRow(i);
			row.insertCell(0).innerHTML = movie.Title;
			row.insertCell(1).innerHTML = movie.Year;
			row.insertCell(2).innerHTML = movie.Type;
			row.insertCell(3).innerHTML = "<img src='" + movie.Poster + "' height='100'>";
		}
	}
};
xhr.send();