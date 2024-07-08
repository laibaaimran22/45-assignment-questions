function myAlbum(artistName: string, albumTitle: string){
    return {artistName, albumTitle}
}
let album1= myAlbum("Ali", "Rang-e-Mohabat");
let album2= myAlbum("Madad", "Roshan Andhera");
let album3= myAlbum("Ayaz", "Mausa-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);

function myAlbum2(artistName: string, albumTitle: string, numberOfTracks?: number){
    return {artistName, albumTitle, numberOfTracks}
}
let album4= myAlbum2("Ali", "Dil hai", 30);
let album5= myAlbum2("Madad", "Ajeeb Kahani", 55);
let album6= myAlbum2("bts", "Dynamite", 1);
console.log(album4);
console.log(album5);
console.log(album6);

