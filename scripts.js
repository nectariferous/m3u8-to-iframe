// Function to generate preview based on selected player
function generatePreview() {
  const hlsLinkInput = document.getElementById('hlsLink');
  const embedContainer = document.getElementById('embedLink');
  const playerSelect = document.getElementById('playerSelect');
  const previewContainer = document.getElementById('previewContainer');
  const copyEmbedBtn = document.getElementById('copyEmbedBtn');

  // Get the selected player value
  const selectedPlayer = playerSelect.value;

  // Construct the iframe URL based on selected player and HLS link
  let embedUrl = '';
  switch (selectedPlayer) {
    case 'cleper':
      embedUrl = `https://noobromon.github.io/m3u8-to-iframe/live/player5.html?url=${encodeURIComponent(hlsLinkInput.value)}`;
      break;
    case 'jw':
      embedUrl = `https://noobromon.github.io/m3u8-to-iframe/live/player5.html?url=${encodeURIComponent(hlsLinkInput.value)}`;
      break;
    case 'videojs':
      embedUrl = `https://noobromon.github.io/m3u8-to-iframe/live/player5.html?url=${encodeURIComponent(hlsLinkInput.value)}`;
      break;
    case 'plyrPlayer':
      embedUrl = `https://noobromon.github.io/m3u8-to-iframe/live/player5.html?url=${encodeURIComponent(hlsLinkInput.value)}`;
      break;
    default:
      break;
  }

  // Update the embed link input and show copy button
  embedContainer.value = embedUrl;
  embedContainer.style.display = 'block';
  copyEmbedBtn.style.display = 'inline-block';

  // Update the preview container with the generated iframe
  previewContainer.innerHTML = `<iframe src="${embedUrl}" width="100%" height="460px" frameborder="0" allowfullscreen></iframe>`;
}

// Function to copy embed link to clipboard
function copyEmbedLink() {
  const embedLinkInput = document.getElementById('embedLink');

  // Select the embed link text
  embedLinkInput.select();
  embedLinkInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the embed link text to the clipboard
  document.execCommand('copy');

  // Deselect the embed link input
  embedLinkInput.setSelectionRange(0, 0);

  // Change copy button text momentarily
  const copyEmbedBtn = document.getElementById('copyEmbedBtn');
  copyEmbedBtn.textContent = 'Copied!';
  setTimeout(() => {
    copyEmbedBtn.textContent = 'Copy Embed Link';
  }, 1500);
}

// Function to load sample HLS link
function loadSimpleHLS() {
  const hlsLinkInput = document.getElementById('hlsLink');
  hlsLinkInput.value = 'https://example.com/sample.m3u8'; // Replace with your sample HLS link
}