function generatePreview() {
  var hlsLink = document.getElementById('hlsLink').value;
  var player = document.getElementById('playerSelect').value;
  var previewContainer = document.getElementById('previewContainer');
  var iframeUrl = convertToIframe(hlsLink, player);

  if (iframeUrl) {
    previewContainer.innerHTML = `<iframe src="${iframeUrl}" width="100%" height="100vh" frameborder="0" allowfullscreen></iframe>`;
  } else {
    previewContainer.innerHTML = "Error: Invalid HLS Link or Player";
  }
}

function convertToIframe(hlsLink, player) {
  if (!isValidHlsLink(hlsLink)) {
    return null;
  }

  var baseUrl = "https://noobromon.github.io/m3u8-to-iframe/"; // Replace 'yourusername' with your GitHub username
  var playerUrl;

  switch (player) {
    case "cleper":
      playerUrl = baseUrl + "/player1";
      break;
    case "jw":
      playerUrl = baseUrl + "/player2";
      break;
    case "videojs":
      playerUrl = baseUrl + "/player3";
      break;
    default:
      return null;
  }

  return `${playerUrl}/?url=${encodeURIComponent(hlsLink)}`;
}

function isValidHlsLink(link) {
  // You can add your validation logic here
  // For simplicity, let's assume any non-empty string is valid
  return link.trim() !== "";
}
