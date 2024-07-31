# README

## 개요

- wav 파일을 텍스트로 변환하는 것에 대한 고찰

## 개발 환경

- nodejs v20.16.0 (2024.07.31 기준 lts 버전)

## (무료) ETRI API를 사용하여 전환하는 방법

1. google chrome plugin (Audio & Voice Recorder) 을 통해 회의를 wav 파일로 저장
   1. Audio & Voice Recorder
   2. 1분에 약 10.6MB 정도의 wav 파일로 저장
2. wav 파일을 20초 단위로 잘라서 wav 파일로 저장
3. etri api를 이용하여 wav 파일을 텍스트로 변환 ( 변환시 약 12초 ~ 15초 정도 소요 )
   1. 1건당 20초 이내의 wav 파일만 변환 가능
   2. 월 1,000 건 무료 사용 가능

## 참조 : 네이버 클로바 노트

- 네이버 클로바 노트는 매월 300 + 300 분 무료 제공
  - 화자별 분리 가능
  - 문장 선택 시 업로드 한 파일 위치로 이동 가능

## 다른 무료 음성인식

- [openapi - whisper](https://github.com/openai/whisper)
- [meta - mms](https://github.com/facebookresearch/fairseq/tree/main/examples/mms)

## 기타 유료 음성인식

- [clovaspeech](https://api.ncloud-docs.com/docs/ai-application-service-clovaspeech-longsentence)
  - 월 20분 무료
  - 유료 1분 = 20원 / 화자인식 1분 = 8원 추가

## 맺음말

- 클로바 노트가 좋음
- 하지만 300분 제약은 고려 대상
- 추후 유료화 되더라도 사용할 것인가는 고민
- ETRI API는 무료로 사용 가능하나 20초 이내의 wav 파일만 변환 가능 (물론 다시 합치는 작업 하면 됨)

## 참조링크

- [Convert Audio Files Using Fluent-FFmpeg Library](https://medium.com/@kusalkalingainfo/convert-audio-files-using-fluent-ffmpeg-library-86aeb3c1b6b7)
- [Fluent ffmpeg-API for node.js](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg)
