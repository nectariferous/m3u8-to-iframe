<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MKH Player Example</title>
    <style>
        /* Apply black background to body */
        body {
            background-color: black;
            margin: 0; /* Remove default margin */
            overflow: hidden; /* Hide scroll bars */
        }

        /* Ensure video container takes full screen */
        #player-container {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        /* Ensure video player takes full size of container */
        #player {
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
    <div id="player-container">
        <div id="player"></div>
    </div>

    <!-- Include jQuery library -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- Include MKH Player script -->
    <script src="path/to/mkh-player.min.js"></script>

    <!-- JavaScript to initialize MKH Player and handle URL retrieval -->
    <script>
        // Function to extract URL parameter
        function getQueryParam(name) {
            const params = new URLSearchParams(window.location.search);
            return params.get(name);
        }

        // Main domain check
        const mainDomain = 'https://noobromon.github.io/';

        // Function to check if URL is allowed
        function isURLAllowed(url) {
            return url.startsWith(mainDomain);
        }

        // Check current URL and redirect if not allowed
        if (!isURLAllowed(window.location.href)) {
            // Redirect to the main domain after 10 seconds
            setTimeout(function () {
                window.location.href = mainDomain + 'm3u8-to-iframe-Converter/';
            }, 10000); // 10 seconds delay
        }

        // Wait for the document to be fully loaded before initializing MKH Player
        $(document).ready(function() {
            // Get video URL from query parameter
            var videoUrl = getQueryParam('url');

            // If no 'url' parameter is found, handle fallback or error
            if (!videoUrl) {
                console.error('No video URL provided.');
                return;
            }

            // Initialize MKH Player
            $('#player').mkhPlayer({
                videoUrl: videoUrl,
                autoplay: true, // Example option, adjust as needed
                // Add other options as per MKH Player documentation
            });

            // Example: Fetch JSON file for dynamic URL
            fetch('live/*/yourfile.json')  /* Updated path to fetch JSON file */
                .then(response => response.json())
                .then(data => {
                    var dynamicVideoUrl = data.videoUrl;
                    if (dynamicVideoUrl) {
                        // Update MKH Player source with dynamic URL
                        $('#player').mkhPlayer('update', { src: dynamicVideoUrl });
                    } else {
                        console.error('Failed to get dynamic video URL.');
                    }
                })
                .catch(error => {
                    console.error('Error fetching JSON:', error);
                });
        });
    </script>
</body>
</html>
