function scroll_left1() {
    let playlist_menu = document.getElementById('playlist-menu-1');
    let currentTranslateX = parseInt(playlist_menu.getAttribute('data-translate-x'));
    currentTranslateX += 200;
    playlist_menu.style.transform = `translateX(${currentTranslateX}px)`;
    playlist_menu.setAttribute('data-translate-x', currentTranslateX);
}
function scroll_right1() {
    let playlist_menu = document.getElementById('playlist-menu-1');
    let currentTranslateX = parseInt(playlist_menu.getAttribute('data-translate-x'));
    currentTranslateX -= 200;
    playlist_menu.style.transform = `translateX(${currentTranslateX}px)`;
    playlist_menu.setAttribute('data-translate-x', currentTranslateX);
}

const songs = [
    {
        id: 1,
        song_name: `<p>Jai Shri Ram <br>Prabhas</p>`,
        album: "Albums/1.jpg",
        movie_name: "Adipurush"
    },
    {
        id: 2,
        song_name: `<p>Vinaraa <br>Prabhas</p>`,
        album: "Albums/2.jpg",
        movie_name: "Salaar"
    },
    {
        id: 3,
        song_name: `<p>Dosti <br>Ntr and Ramcharan</p>`,
        album: "Albums/3.jpg",
        movie_name: "RRR"
    },
    {
        id: 4,
        song_name: `<p>Raghunandhana <br>Teja Sajja</p>`,
        album: "Albums/4.jpg",
        movie_name: "Hanuman"
    },
    {
        id: 5,
        song_name: `<p>Oh Sita Hey Rama <br>DQ Salman</p>`,
        album: "Albums/5.jpg",
        movie_name: "Sita Ramam"
    },
    {
        id: 6,
        song_name: `<p>Mawa Enthaina <br>Mahesh Babu</p>`,
        album: "Albums/6.jpg",
        movie_name: "Guntur kaaram"
    },
    {
        id: 7,
        song_name: `<p>Oo Antava.. Oo Oo antava.. <br>Allu Arjun</p>`,
        album: "Albums/7.jpeg",
        movie_name: "Pushpa"
    },
    {
        id: 8,
        song_name: `<p>Radhika <br>Siddu Buoy</p>`,
        album: "Albums/8.jpg",
        movie_name:"Tillu Square"
    },
    {
        id: 9,
        song_name: `<p>Adigaa <br>Nani</p>`,
        album: "Albums/9.jpg",
        movie_name: "Hi Nanna"
    },
    {
        id: 10,
        song_name: `<p>Gumma <br>Suhass</p>`,
        album: "Albums/10.jpg",
        movie_name: "Ammbajipet Marraige band"
    },
    {
        id: 11,
        song_name: `<p>Chitti <br>Naveen</p>`,
        album: "Albums/11.jpg",
        movie_name: "Jathiratnalu"
    },
    {
        id: 12,
        song_name: `<p>Kalyani Vacha Vachaa <br>Vijay Devarakonda</p>`,
        album: "Albums/12.jpg",
        movie_name: "The Family Star"
    },
]

Array.from(document.getElementsByClassName('playlist-item')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].album;
    e.getElementsByTagName('p')[0].innerHTML = songs[i].song_name;
})

function hide(){
    var hide = document.getElementsByClassName('hide');
    hide[0].style.display = "none";
}
document.addEventListener('DOMContentLoaded', () => {
    const currentImage = document.querySelector('#current img');
    const currentSongName = document.querySelector('.current_song');
    const currentArtist = document.querySelector('.current_artist');
    const currentMovie = document.querySelector('.current_movie h1');
    const copyImages = document.querySelectorAll('.copy');
    const playPauseButton = document.getElementById('play');
    const forwardButton = document.getElementById('forward');
    const backwardButton = document.getElementById('backward');
    let audio = new Audio();
    let index = 0;

    const songs = [
        { id: 1, song_name: "Jai Shri Ram", album: "Albums/1.jpg", movie_name: "Adipurush", artist_name: "Arijit Singh", audio_src: "Songs/1.mp3" },
        { id: 2, song_name: "Vinaraa", album: "Albums/2.jpg", movie_name: "Salaar", artist_name: "Unknown Artist", audio_src: "Songs/2.mp3" },
        { id: 3, song_name: "Dosti", album: "Albums/3.jpg", movie_name: "RRR", artist_name: "NTR and Ramcharan", audio_src: "Songs/3.mp3" },
        { id: 4, song_name: "Raghunandhana", album: "Albums/4.jpg", movie_name: "Hanuman", artist_name: "Teja Sajja", audio_src: "Songs/4.mp3" },
        { id: 5, song_name: "Oh Sita Hey Rama", album: "Albums/5.jpg", movie_name: "Sita Ramam", artist_name: "DQ Salman", audio_src: "Songs/5.mp3" },
        { id: 6, song_name: "Mawa Enthaina", album: "Albums/6.jpg", movie_name: "Guntur Kaaram", artist_name: "Mahesh Babu", audio_src: "Songs/6.mp3" },
        { id: 7, song_name: "Oo Antava.. Oo Oo antava..", album: "Albums/7.jpeg", movie_name: "Pushpa", artist_name: "Allu Arjun", audio_src: "Songs/7.mp3" },
        { id: 8, song_name: "Radhika", album: "Albums/8.jpg", movie_name: "Tillu Square", artist_name: "Siddu Buoy", audio_src: "Songs/8.mp3" },
        { id: 9, song_name: "Adigaa", album: "Albums/9.jpg", movie_name: "Hi Nanna", artist_name: "Nani", audio_src: "Songs/9.mp3" },
        { id: 10, song_name: "Gumma", album: "Albums/10.jpg", movie_name: "Ammbajipet Marriage Band", artist_name: "Suhass", audio_src: "Songs/10.mp3" },
        { id: 11, song_name: "Chitti", album: "Albums/11.jpg", movie_name: "Jathiratnalu", artist_name: "Naveen", audio_src: "Songs/11.mp3" },
        { id: 12, song_name: "Kalyani Vacha Vachaa", album: "Albums/12.jpg", movie_name: "The Family Star", artist_name: "Vijay Devarakonda", audio_src: "Songs/12.mp3" },
    ];

    const playAudio = (song) => {
        currentImage.src = song.album;
        currentImage.alt = song.song_name;
        currentSongName.textContent = song.song_name;
        currentArtist.textContent = song.artist_name;
        currentMovie.textContent = song.movie_name;

        audio.src = song.audio_src;
        audio.play();
        playPauseButton.classList.remove('bi-play-fill');
        playPauseButton.classList.add('bi-pause-fill');
    };

    // Click event for each copyImage
    copyImages.forEach((copyImage, idx) => {
        copyImage.addEventListener('click', () => {
            index = idx;
            playAudio(songs[index]);
        });
    });

    // Play/Pause button click event
    playPauseButton.addEventListener('click', () => {
        if (audio.paused || audio.currentTime <= 0) {
            audio.play();
            playPauseButton.classList.remove('bi-play-fill');
            playPauseButton.classList.add('bi-pause-fill');
        } else {
            audio.pause();
            playPauseButton.classList.add('bi-play-fill');
            playPauseButton.classList.remove('bi-pause-fill');
        }
    });

    // Forward button click event
    forwardButton.addEventListener('click', () => {
        index = (index + 1) % songs.length;
        playAudio(songs[index]);
    });

    // Backward button click event
    backwardButton.addEventListener('click', () => {
        index = (index - 1 + songs.length) % songs.length;
        playAudio(songs[index]);
    });

    // Initial load of the first song
    playAudio(songs[index]);
});

document.addEventListener('DOMContentLoaded', () => {
    const currentImage = document.querySelector('#current img');
    const copyImages = document.querySelectorAll('.copy');
    const playPauseButton = document.getElementById('play');
    const forwardButton = document.getElementById('forward');
    const backwardButton = document.getElementById('backward');
    let audio = new Audio();
    let index = 0;

    // Function to play audio and update current image
    const playAudio = (copyImage) => {
        currentImage.src = copyImage.src;
        currentImage.alt = copyImage.alt;

        const audioSrc = copyImage.getAttribute('data-audio');
        audio.src = audioSrc;
        audio.play();
        playPauseButton.classList.remove('bi-play-fill');
        playPauseButton.classList.add('bi-pause-fill');
    };

    // Click event for each copyImage
    copyImages.forEach((copyImage, idx) => {
        copyImage.addEventListener('click', () => {
            index = idx;
            playAudio(copyImage);
        });
    });

    // Play/Pause button click event
    playPauseButton.addEventListener('click', () => {
        if (audio.paused || audio.currentTime <= 0) {
            audio.play();
            playPauseButton.classList.remove('bi-play-fill');
            playPauseButton.classList.add('bi-pause-fill');
        } else {
            audio.pause();
            playPauseButton.classList.add('bi-play-fill');
            playPauseButton.classList.remove('bi-pause-fill');
        }
    });

    // Forward button click event
    forwardButton.addEventListener('click', () => {
        index = (index + 1) % copyImages.length;
        playAudio(copyImages[index]);
    });

    // Backward button click event
    backwardButton.addEventListener('click', () => {
        index = (index - 1 + copyImages.length) % copyImages.length;
        playAudio(copyImages[index]);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const currentImage = document.querySelector('#current img');
    const copyImages = document.querySelectorAll('.copy');
    const title = document.querySelector('.current_song');
    const artist = document.querySelector('.current_artist');
    const movie = document.querySelector('.current_movie h1');
    const audio = new Audio();
    const playPauseButton = document.getElementById('play');
    const playPauseIcon = playPauseButton.querySelector('i');
    const startingTime = document.getElementById('startingTime');
    const endingTime = document.getElementById('endingTime');
    const shuffleButton = document.getElementById('shuffle');

    let shuffleMode = false;
    const songs = [
        { id: "1", song_name: "Jai Shri Ram", album: "Albums/1.jpg", movie_name: "Adipurush", artist_name: "Arijit Singh", audio_src: "Songs/1.mp3" },
        { id: "2", song_name: "Vinaraa", album: "Albums/2.jpg", movie_name: "Salaar", artist_name: "Unknown Artist", audio_src: "Songs/2.mp3" },
        // Add more song objects as needed
        {id: "3",song_name: "Dosti",album: "Albums/3.jpg",movie_name: "RRR"},
        { id: "4", song_name: "Raghunandhana", album: "Albums/4.jpg", movie_name: "Hanuman"},
        { id: "5", song_name: "Oh Sita Hey Rama ", album: "Albums/5.jpg", movie_name: "Sita Ramam"},
        { id: "6", song_name: "Mawa Enthaina ", album: "Albums/6.jpg", movie_name: "Guntur kaaram"},
        {id: "7",song_name: "Oo Antava.. Oo Oo antava.. ",album: "Albums/7.jpeg",movie_name: "Pushpa"},
        {id: "8",song_name: "Radhika",album: "Albums/8.jpg",movie_name:"Tillu Square"},
        {id: "9",song_name: "Adigaa",album: "Albums/9.jpg",movie_name: "Hi Nanna"},
        {id: "10",song_name: "Gumma",album: "Albums/10.jpg",movie_name: "Ammbajipet Marraige band"},
        {id: "11",song_name: "Chitti",album: "Albums/11.jpg", movie_name: "Jathiratnalu" },
        {id: "12", song_name: "Kalyani Vacha Vachaa" , album: "Albums/12.jpg",  movie_name: "The Family Star"},
    ];

    let currentIndex = 0;

    function loadSong(index) {
        const songData = songs[index];
        if (songData) {
            const { song_name, album, movie_name: movieTitle, artist_name, audio_src } = songData;
            currentImage.src = album;
            currentImage.alt = song_name;
            title.textContent = song_name;
            movie.textContent = movieTitle;
            artist.textContent = artist_name;
            audio.src = audio_src;
            audio.play();
            playPauseIcon.classList.remove('bi-play-fill');
            playPauseIcon.classList.add('bi-pause-fill');
        }
    }

    copyImages.forEach(copyImage => {
        copyImage.addEventListener('click', (event) => {
            currentIndex = Array.from(copyImages).indexOf(copyImage);
            loadSong(currentIndex);
        });
    });

    playPauseButton.addEventListener('click', function () {
        if (audio.paused || audio.currentTime <= 0) {
            audio.play();
            playPauseIcon.classList.remove('bi-play-fill');
            playPauseIcon.classList.add('bi-pause-fill');
        } else {
            audio.pause();
            playPauseIcon.classList.add('bi-play-fill');
            playPauseIcon.classList.remove('bi-pause-fill');
        }
    });

    shuffleButton.addEventListener('click', function () {
        shuffleMode = !shuffleMode;
        if (shuffleMode) {
            shuffleButton.classList.add('active');
        } else {
            shuffleButton.classList.remove('active');
        }
    });

    let backward = document.getElementById('backward');
    let forward = document.getElementById('forward');

    backward.addEventListener('click', () => {
        index = shuffleMode ? Math.floor(Math.random() * songs.length) : index - 1;
        if (index < 0) index = songs.length - 1;
        playSongByIndex(index);
    });

    forward.addEventListener('click', () => {
        index = shuffleMode ? Math.floor(Math.random() * songs.length) : index + 1;
        if (index >= songs.length) index = 0;
        playSongByIndex(index);
    });
    audio.addEventListener('loadedmetadata', () => {
        const totalDuration = audio.duration;
        const totalMinutes = Math.floor(totalDuration / 60);
        const totalSeconds = Math.floor(totalDuration % 60);
        const formattedTotalMinutes = totalMinutes < 10 ? `0${totalMinutes}` : totalMinutes;
        const formattedTotalSeconds = totalSeconds < 10 ? `0${totalSeconds}` : totalSeconds;
        endingTime.innerText = `${formattedTotalMinutes}:${formattedTotalSeconds}`;
    });
    audio.addEventListener('timeupdate', () => {
        const currentMusic = audio.currentTime;
        const currentMinutes = Math.floor(currentMusic / 60);
        const currentSeconds = Math.floor(currentMusic % 60);
        const formattedCurrentMinutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
        const formattedCurrentSeconds = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
        startingTime.innerText = `${formattedCurrentMinutes}:${formattedCurrentSeconds}`;
    });
    // Initial load of the first song
    loadSong(currentIndex);
});

