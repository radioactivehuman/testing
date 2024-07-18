const ytdl2 = require("@distube/ytdl-core");

async function getAudioUrl(videoUrl) {
    try {
      // Fetch video information
      const info = await ytdl2.getInfo(videoUrl);
  
      // Filter formats to get audio-only formats
      const audioFormats = info.formats.filter(format => format.mimeType.includes('audio'));
  
      // Choose a format based on your criteria (highest audio quality)
      const format = ytdl2.chooseFormat(audioFormats, { quality: 'highestaudio' });
  
      if (!format || !format.url) {
        throw new Error('Could not find audio stream');
      }
      console.log(format.url)
      return format.url;
      
    } catch (error) {
      console.error('Error fetching video information:', error);
      throw error; // Re-throw error to be caught by caller
    }
  }

  getAudioUrl("22tVWwmTie8");