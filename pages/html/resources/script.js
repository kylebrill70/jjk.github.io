// Add an event listener for when the page is loaded
window.addEventListener('DOMContentLoaded', function() {
    // Keep track of the currently playing video
    var currentVideo = document.getElementById('video1');

    // Automatically play the video on page load
    if (currentVideo) {
        currentVideo.muted = false; // Unmute the video
        currentVideo.play();
    }

    // Function to stop the video when scrolling to the second page
    function stopVideoOnScroll() {
        var page2 = document.getElementById('page2');
        if (page2 && currentVideo && isScrolledIntoView(page2)) {
            currentVideo.pause();
        }
    }

    // Check if an element is scrolled into view
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Add event listener for scroll to stop video
    window.addEventListener('scroll', stopVideoOnScroll);

    var backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.history.back(); // Navigate back to the previous page
        });
    }
});
