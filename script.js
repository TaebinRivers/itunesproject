function run() {
    document.getElementById("searchresults").innerHTML = "";
    document.getElementById("output").innerHTML = "";

    var artist = document.getElementById("artist").value;
    var number = document.getElementById("limit").value;

    $.ajax({
        url: 'https://itunes.apple.com/search?term=' + artist + '&limit=' + number,
        dataType: "jsonp",
        success: process
    });
}

function process(data) {
    console.log(data)

    var songs = data.results;
    var o = "";
    if(songs == 0) {
        document.getElementById("searchresults").innerHTML = "There were no results for your search.";
    }else {

        for (var p = 0; p < songs.length; p++) {
            console.log(songs[p].artworkUrl100)
            console.log(songs[p].previewUrl)
            var songrank = p+1;
            var songpreview = songs[p].previewUrl;
            var albumart = songs[p].artworkUrl100;
            o += "<tr>";
            o += "<td>" + songrank + "</td>";
            o += "<td>" + songs[p].artistName + "</td>";
            o += "<td>" + songs[p].trackName + "</td>";
            o += "<td>" + songs[p].collectionName + "</td>";
            o += "<td>" + "<img src='" + albumart +"' alt='album cover'>" + "</td>";
            o += "<td>" + "<audio controls><source src='" + songpreview +"' type='audio/mp4'></audio>" + "</td>";

            o += "</tr>";
        }

        var table = document.getElementById("output");
        table.innerHTML = o;
        table.style.display = "block";


    }
}