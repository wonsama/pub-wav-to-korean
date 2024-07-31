const ffmpeg = require("fluent-ffmpeg");

const inputFile = "input/240731_scrum.wav";

// TODO
// TODO clear output folder before running
// TODO filename 1.wav, 2.wav, 3.wav, ... 로 변경

async function convertAudio() {
  ffmpeg.ffprobe(inputFile, function (err, metadata) {
    const duration = metadata.format.duration;
    const splitDuration = 20;
    let start = 0;
    let end = splitDuration;
    let i = 1;
    const outputs = [];
    while (end < duration) {
      ffmpeg()
        .input(inputFile)
        .seekInput(start)
        .duration(splitDuration)
        .audioFrequency(16000)
        .audioChannels(1)
        .audioCodec("pcm_s16le")
        .output(`output/240731_scrum_${i}.wav`)
        .on("end", async (a, meta, c) => {
          // 비동기 처리인 관계로 순서대로 결과가 출력되지는 않음
          const output = meta
            .split("\n")
            .filter((x) => x.includes("Output"))[0]
            .replace("Output #0, wav, to '", "")
            .replace(/\'|\:/g, "");

          outputs.push(output);
          if (outputs.length == Math.floor(duration / splitDuration)) {
            console.log(`${outputs.length} files are created`);
          }
        })
        .on("error", (err) => {
          console.error("Error:", err);
        })
        .run();
      start = end;
      end = end + splitDuration;
      i++;
    }
  });
}

convertAudio();
