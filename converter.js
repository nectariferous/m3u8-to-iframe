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

  var baseUrl = "file:///D:/app/code%20theme%20templet/Best%20code/All%20live%20post%20page%20code/no%20en/mpd%20jw%20player/new%20project/project/index.html"; // Replace 'yourusername' with your GitHub username
  var playerUrl;

  switch (player) {
    case "cleper":
      playerUrl = baseUrl + "/cleper-player";
      break;
    case "jw":
      playerUrl = baseUrl + "/jw-player";
      break;
    case "videojs":
      playerUrl = baseUrl + "/video-js-player";
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
