/* const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");

let isPlaying = false; */
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const fowardBtn = document.getElementById("foward");
const shuffleBtn = document.getElementById("shuffle");
const artistName = document.querySelector(".artist");
const song = document.querySelector(".title");
const image = document.querySelector(".song");




let trackList = [
    {
        name: "in the air tonight",
        artist: "phil collens",
        path: "Phil_Collins_-_In_The_Air_Tonight_CeeNaija.com_.mp3", 
        image: "Phil_Collins_-_Face_Value_2016.jpg",
    },

    {
        name: "kiss",
        artist: "prince",
        path: "prince-the-revolution-kiss.mp3",
        image: "Prince_13P2016.webp",
    },

    {
        name: "fly away",
        artist: "lenny kravitz",
        path: "lenny-kravitz-fly-away.mp3",
        image: "lennykrav.jpg",
    },

    {
        name: "rock the casbah",
        artist: "the clash",
        path: "the-clash-rock-the-casbah.mp3",
        image: "clashalbumcover.jpg",
    },

    {
        name: "call me",
        artist: "blondie",
        path: "blondie-call-me.mp3",
        image: "callmealbum.jpg",
    },

    {
        name: "burnin' for you",
        artist: "blue oyster cult",
        path: "blue-oyster-cult-burnin-for-you-1-17.mp3",
        image: "blueoystercultalbum.jpg",
    }
];





let play = document.getElementById("play")
let pause = document.getElementById("pause")
let audio = new Audio(trackList[0].path)


/*let back = document.getElementById('backward')
let next = document.getElementById('foward') */

let trackIndex = 0;
let isPlaying = false;
let currentTrack = document.createElement('audio');
let shuffleSongs = Math.floor(Math.random() * 6);

playBtn.addEventListener("click", playAudio)
pauseBtn.addEventListener("click", pauseAudio)
fowardBtn.addEventListener("click", nextTrack)
shuffleBtn.addEventListener("click", shuffleTracks)

function updateTrack(trackIndex) {
    currentTrack.src = trackList[trackIndex].path;
    currentTrack.load();
    song.textContent = trackList[trackIndex].name;
    artistName.textContent = "Artist:" + " " + trackList[trackIndex].artist;
}

function playAudio() {
    currentTrack.play();
    isPlaying = true;
}

function pauseAudio() {
    currentTrack.pause();
    isPlaying = false;
}

function nextTrack() {
    if(trackIndex < trackList.length - 1) {
        trackIndex += 1;  
    } else if(trackIndex == 2) {
        trackIndex -= 2;  
    }
    
    updateTrack(trackIndex);
    playAudio();
}

function shuffleTracks() {
    currentTrack.src = trackList[shuffleSongs].path;
    currentTrack.play();
}

updateTrack(trackIndex);

