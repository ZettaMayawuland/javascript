// Create a variable with type array of object to save song lists with song details
const songInfo = [
    {songName: `Blank Space`, songArtist: `Taylor Swift`, songGenre: `Pop`, duration: 5.12},
    {songName: `Love Story`, songArtist: `Taylor Swift`, songGenre: `Pop`, duration: 5.23},
    {songName: `Dynamite`, songArtist: `BTS`, songGenre: `Kpop`, duration: 5.10},
    {songName: `Butter`, songArtist: `BTS`, songGenre: `Kpop`, duration: 5.09},
    {songName: `Boy With Luv (feat. Halsey)`, songArtist: `BTS`, songGenre: `Kpop`, duration: 5.22},
    {songName: `Bohemian Rhapsody`, songArtist: `Queen`, songGenre: `Rock`, duration: 5.14},
    {songName: `Another One Bites the Dust`, songArtist: `Queen`, songGenre: `Rock`, duration: 5.12},
    {songName: `Levitating`, songArtist: `Dua Lipa`, songGenre: `Pop`, duration: 5.31},
    {songName: `Shape of You`, songArtist: `Ed Sheeran`, songGenre: `Pop`, duration: 5.16},
    {songName: `Hotel California`, songArtist: `Eagles`, songGenre: `Rock`, duration: 5.06},
    {songName: `Smells Like Teen Spirit`, songArtist: `Nirvana`, songGenre: `Rock`, duration: 5.01},
    {songName: `Cheer Up`, songArtist: `Twice`, songGenre: `Kpop`, duration: 5.19},
    {songName: `What is Love`, songArtist: `Twice`, songGenre: `Kpop`, duration: 5.22},
    {songName: `Love Scenario`, songArtist: `Ikon`, songGenre: `Kpop`, duration: 5.17},
];

// Create a function to group song based on artists
function groupbyArtist(songInfo) {
    return songInfo.reduce((group, songInfo) => {
        const { songArtist } = songInfo;
        group[songArtist] = group[songArtist] || [];
        group[songArtist].push(songInfo);
        return group;
    }, {});
}

console.log("Group by Artist: ")
console.log(groupbyArtist(songInfo))

// Create a function to group song based on genre
function groupbyGenre(songInfo) {
    return songInfo.reduce((group, songInfo) => {
        const { songGenre } = songInfo;
        group[songGenre] = group[songGenre] || [];
        group[songGenre].push(songInfo);
        return group;
    }, {});
}

console.log("Group by Genre: ")
console.log(groupbyGenre(songInfo))

// Create a function to group song to play song less than 1 hour with random artists & genres
function groupbyRandom(songInfo) {
    //randomise song
    for(let i = songInfo.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [songInfo[i], songInfo[j]] = [songInfo[j], songInfo[i]];
    }

    let randomSongs = songInfo
    const result = []
    let totalDuration = 0

    for(let song of randomSongs) {
        if(totalDuration <= 60) {
            result.push(song)
            totalDuration += song.duration
        } else {
            break
        }
    }
    return result
}

console.log("Group by random and less than 1 hour: ")
console.log(groupbyRandom(songInfo))
let cobaSong = groupbyRandom(songInfo)
cobaSong.forEach((item) => console.log(item.songName + " - " + item.songArtist + " - " + item.songGenre));