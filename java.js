// document.addEventListener('DOMContentLoaded', function() {
//     // Select playlist items
//     const playlistItems = document.getElementsById('copy');
//     // Add click event listeners to each playlist item
//     Array.from(playlistItems).forEach(item => {
//         item.addEventListener('click', function() {
//             replaceWithClone(item);
//         });
//     });
//     // Function to replace the clicked element with its clone
//     function replaceWithClone(element) {
//         // Clone the clicked element
//         const clone = element.cloneNode(true);
//         // Style for visual indication
//         clone.style.borderColor = 'blue'; // Highlight clone
//         // Replace the original element with the clone
//         element.parentNode.replaceChild(clone, element);
//         // Add event listener to the new cloned element to maintain functionality
//         clone.addEventListener('click', function() {
//             document.getElementById('current').appendChild(clone);
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const currentImage = document.querySelector('#current img');
    const copyImages = document.querySelectorAll('.copy');
    const title = document.querySelector('.current_song');
    const man = document.querySelector('.current_artist');
    const movie = document.querySelector('.current_movie h1');
    const audio = new Audio();
    const playPauseButton = document.getElementById('play');
    const playPauseIcon = playPauseButton.querySelector('i');

    const songs = [
        { id: "1", song_name: "Jai Shri Ram", album: "Albums/1.jpg", movie: "Adipurush", artrist: "arjithsingh" },
        { id: "2", song_name: "Song 2", album: "Albums/2.jpg", movie: "Movie 2", artrist: "honeySingh" },
        { id: "3", song_name: "Song 3", album: "Albums/3.jpg", movie: "Movie 3", artrist: "Singh" },
        { id: "4", song_name: "Song 4", album: "Albums/4.jpg", movie: "Movie 4", artrist: "honey" },
        { id: "5", song_name: "Song 5", album: "Albums/5.jpg", movie: "Movie 5", artrist: "neygh" },
        { id: "6", song_name: "Song 6", album: "Albums/6.jpg", movie: "Movie 6", artrist: "honingh" },
        // Add more song objects as needed
    ];

    copyImages.forEach(copyImage => {
        copyImage.addEventListener('click', (event) => {
            const index = event.target.id;

            // Find the song data by index
            const songData = songs.find(song => song.id === index);
            if (songData) {
                const { song_name, album, movie: movieTitle } = songData;

                // Update current image, title, and movie
                currentImage.src = album;
                currentImage.alt = song_name;
                title.textContent = song_name;
                movie.textContent = movieTitle;

                // Load and play the audio
                const audioSrc = copyImage.getAttribute('data-audio');
                audio.src = audioSrc;
                audio.play();

                // Update play/pause button icon
                playPauseIcon.classList.remove('bi-play-fill');
                playPauseIcon.classList.add('bi-pause-fill');
            }
        });
    });

    playPauseButton.addEventListener('click', function() {
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
});
