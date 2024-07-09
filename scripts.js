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
      embedUrl = `https://noobromon.github.io/m3u8-to-iframe/live/player1.html?url=${encodeURIComponent(hlsLinkInput.value)}`;
      break;
    case 'jw':
      embedUrl = `https://noobromon.github.io/m3u8-to-iframe/live/player2.html?url=${encodeURIComponent(hlsLinkInput.value)}`;
      break;
    case 'videojs':
      embedUrl = `https://noobromon.github.io/m3u8-to-iframe/live/player3.html?url=${encodeURIComponent(hlsLinkInput.value)}`;
      break; 
    case 'flowplayer':
      embedUrl = `https://noobromon.github.io/m3u8-to-iframe/live/player4.html?url=${encodeURIComponent(hlsLinkInput.value)}`;
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
  previewContainer.innerHTML = `<iframe src="${embedUrl}" width="560px" height="400px" frameborder="0" allowfullscreen></iframe>`;
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

// Function to load sample HLS link from JSON file
async function loadSimpleHLS() {
  const hlsLinkInput = document.getElementById('hlsLink');
  
  try {
    const response = await fetch('https://noobromon.github.io/m3u8-to-iframe/live/*/*.json'); // Replace with your JSON file path
    if (!response.ok) {
      throw new Error('Failed to fetch HLS URL.');
    }
    const data = await response.json();
    const hlsUrl = data.url; // Assuming your JSON structure has a key 'url' containing the HLS link
    
    hlsLinkInput.value = hlsUrl;
    generatePreview(); // Update the preview after loading the HLS URL
  } catch (error) {
    console.error('Error fetching HLS URL:', error);
    alert('Failed to load HLS URL. Please try again later.');
  }
}

// Function to copy code snippet to clipboard
function copyCode() {
  const codeSnippet = document.querySelector('.code-snippet');
  const codeText = codeSnippet.querySelector('code').innerText;

  navigator.clipboard.writeText(codeText).then(function() {
    alert('Code snippet copied to clipboard!');
  }, function() {
    alert('Failed to copy code snippet.');
  });
}
