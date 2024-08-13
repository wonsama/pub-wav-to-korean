const ffmpeg = require("fluent-ffmpeg");

const inputFile = "input/240813_scrum.wav";

// TODO
// TODO clear output folder before running
// TODO filename 1.wav, 2.wav, 3.wav, ... 로 변경

async function convertAudio() {
  ffmpeg.ffprobe(inputFile, function (err, metadata) {
    const duration = metadata.format.duration;
    ffmpeg()
      .input(inputFile)
      .audioFrequency(16000)
      .audioChannels(1)
      .audioCodec("pcm_s16le")
      .output(`output/240813_scrum.wav`)
      .on("end", async (a, meta, c) => {
        console.log("Finished convertin");
      })
      .on("error", (err) => {
        console.error("Error:", err);
      })
      .run();
  });
}

convertAudio();
