const youtubeUrlInput = document.getElementById('youtube-url');
const convertButton = document.getElementById('convert-button');
const outputDiv = document.getElementById('output');

convertButton.addEventListener('click', async () => {
  const youtubeUrl = youtubeUrlInput.value.trim();
  if (youtubeUrl) {
    try {
      const response = await fetch(`https://api.example.com/convert-youtube-to-mp4?url=${youtubeUrl}`);
      const mp4Url = await response.json();
      outputDiv.innerHTML = `MP4 URL: <a href="${mp4Url}" target="_blank">${mp4Url}</a>`;
    } catch (error) {
      outputDiv.innerHTML = `Error: ${error.message}`;
    }
  } else {
    outputDiv.innerHTML = 'Please enter a valid YouTube URL';
  }
});
