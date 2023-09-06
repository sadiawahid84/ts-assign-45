function make_album(artist, title, num_tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (num_tracks !== undefined) {
        album.num_tracks = num_tracks;
    }
    return album;
}
var album1 = make_album("Imagine Dragons", "Night Visions");
var album2 = make_album("Ed Sheeran", "Divide", 16);
var album3 = make_album("Taylor Swift", "1989", 13);
console.log(album1);
console.log(album2);
console.log(album3);
