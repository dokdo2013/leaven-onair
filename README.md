# LEAVEN Multi Twitch
![카페타이틀](https://user-images.githubusercontent.com/22076477/165910860-f5ccc467-1107-4b65-a1df-017371d87dfb.jpeg)

트위치/유튜브 커버츄얼 팀 '레븐(LEAVEN)' 멤버별 방송을 동시에 시청할 수 있는 멀티 트위치 웹사이트 ([https://multi.leaven.team](https://multi.leaven.team))

## 제작동기
기존 멀티트위치 사이트들(멀티트위치, 멀티스트림 등)은 멤버 10명 방송을 쉽게 선택해서 볼 수 없었고, UI/UX 면에서 비효율적인 부분이 있어 이를 개선하기 위해 별도 사이트로 제작했다.

## Tech Stack
- React.js
- Chakra UI
- Python (API)

## 라이센스 고지 (License Notice)
트위치 생방송 진행 중임을 체크하는 코드는 [LeftBased/StreamLiveChecker](https://github.com/LeftBased/StreamLiveChecker)를 이용했습니다.
<br>
We used [LeftBased/StreamLiveChecker](https://github.com/LeftBased/StreamLiveChecker) for checking twitch live streaming.

## 실행 방법
- 패키지 설치 후 실행
```bash
yarn
yarn start
```
- 빌드
```bash
yarn build
```
- 배포 : Github Webhook to Jenkins (Build & Deploy to S3)

### Dev Branch
[https://dev-multi.leaven.team](https://dev-multi.leaven.team) : Develop 브랜치에 푸시하면 젠킨스에서 빌드되어 반영됨. 릴리즈 전 테스트 용도로 활용

