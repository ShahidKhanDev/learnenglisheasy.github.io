// const DATASET = "production";
// const PROJECT_ID = "rfaksjo9";
// const LESSON_QUERY = encodeURIComponent("*[_type == 'lessons']");
// const API_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${LESSON_QUERY}`;
// let music = new Audio("");

// export async function fetchData() {
//   hideAllMsg();
//   infoMsgs[0].style.display = "block";
//   const response = await fetch(API_URL);
//   const data = await response.json();

//   infoMsgs[0].style.display = "none";
//   showData(data);
// }

// function showData(data) {
//   const result = data.result;
//   for (let i = 0; i < result.length; i++) {
//     const { lessonTitle, uploadDate, audio } = result[i];
//     let lessonCard = `
//     <div class="lesson__card" data-lesson-card>
//         <div class="lesson__details">
//         <div class="num">01</div>
//         <div class="lesson__data">
//             <div class="lesson__name">${lessonTitle}</div>
//             <div class="publish__date">
//             Publised: <span>${uploadDate}</span>
//             </div>
//         </div>
//         </div>

//         <div class="dl__btns">
//         <button class="btn-primary play-mini-audio-btn" data-play-btn data-play-url="${audio.asset._ref}">
//             <span class="material-icons">play_arrow</span>
//         </button>

//         <button class="btn-primary download-aud-btn">
//             <span class="material-icons-outlined">file_download</span>
//         </button>
//         </div>
//     </div>
//     `;

//     lessonCardsElem.innerHTML += lessonCard;
//   }

//   const audioPlayBtns = document.querySelectorAll("[data-play-btn]");
//   const lessonCards = document.querySelectorAll("[data-lesson-card]");
//   getAudio(audioPlayBtns, lessonCards);
// }

// /**
//  * Audio
//  */
// const audioPlayer = document.querySelector("[data-audio-player]");
// const audioCurrTime = document.querySelector("[data-audio-current-time]");
// const audioEndTime = document.querySelector("[data-audio-end-time]");
// const audioProgressbar = document.querySelector(".audio-progressbar");
// const volumeProgressbar = document.querySelector(".volume-progressbar");

// const rootColor = getComputedStyle(document.body);
// let progressbarColor;
// let progressbarLoadColor = rootColor.getPropertyValue("--accent");
// audioProgressbar.style.background = `linear-gradient(90deg, ${progressbarLoadColor}  ${audioProgressbar.value}%, #e2e2e2 0%)`;
// volumeProgressbar.style.background = `linear-gradient(90deg, ${progressbarLoadColor}  ${volumeProgressbar.value}%, #e2e2e2 0%)`;

// audioProgressbar.addEventListener("change", () => {
//   progressbarColor == undefined
//     ? (audioProgressbar.style.background = `linear-gradient(90deg, ${progressbarLoadColor}  ${audioProgressbar.value}%, #e2e2e2 0%)`)
//     : (audioProgressbar.style.background = `linear-gradient(90deg, ${progressbarColor}  ${audioProgressbar.value}%, #e2e2e2 0%)`);
// });

// volumeProgressbar.addEventListener("change", () => {
//   progressbarColor == undefined
//     ? (volumeProgressbar.style.background = `linear-gradient(90deg, ${progressbarLoadColor}  ${volumeProgressbar.value}%, #e2e2e2 0%)`)
//     : (volumeProgressbar.style.background = `linear-gradient(90deg, ${progressbarColor}  ${volumeProgressbar.value}%, #e2e2e2 0%)`);
// });

// function getAudio(playBtnArr, lessonCardsArr) {
//   playBtnArr.forEach((playBtn, idx) => {
//     playBtn.addEventListener("click", () => {
//       // active the clicked lesson card
//       lessonCardsArr.forEach((lessonCard) =>
//         lessonCard.classList.remove("active")
//       );
//       lessonCardsArr[idx].classList.add("active");
//       audioPlayer.classList.add("show");

//       const audioUrl = playBtn.dataset.playUrl;

//       playAudio(audioUrl);
//     });
//   });
// }

// function playAudio(audioUrl) {
//   audioUrl = formatURL(audioUrl);
//   const AUDIO_URL = `https://cdn.sanity.io/files/${PROJECT_ID}/${DATASET}/${audioUrl}`;
//   music.src = AUDIO_URL;

//   music.play();
// }

// music.addEventListener("timeupdate", (e) => {
//   let currentTime = Math.floor(music.currentTime);
//   let duration = Math.floor(music.duration);

//   if (isNaN(duration)) {
//     audioEndTime.textContent = "0:00";
//   } else {
//     // music end time
//     let min = Math.floor(duration / 60);
//     let sec = Math.floor(duration % 60);

//     if (sec < 10) {
//       sec = `0${sec}`;
//     }
//     audioEndTime.textContent = `${min}:${sec}`;
//   }

//   // music start Time
//   let min1 = Math.floor(currentTime / 60);
//   let sec1 = Math.floor(currentTime % 60);
//   if (sec1 < 10) {
//     sec1 = `0${sec1}`;
//   }
//   audioCurrTime.textContent = `${min1}:${sec1}`;

//   let percent = (music.currentTime / music.duration) * 100;
//   audioProgressbar.value = percent;
//   //   audioProgressbar.style.background =
//   //     "linear-gradient(90deg, #1b1d20 " + percent + "%, #e2e2e2 0%)";

//   audioProgressbar.style.background = `linear-gradient(90deg, ${progressbarLoadColor}  ${percent}%, #e2e2e2 0%)`;
// });

// function formatURL(url) {
//   const urlLink = url.split("-")[1];
//   const urlExtension = url.split("-")[2];

//   return `${urlLink}.${urlExtension}`;
// }
// /**
//  * Show Messages like: when there is no data, when there is an error ...
//  */
// const lessonCardsElem = document.querySelector(".lesson__cards");
// const infoMsgs = document.querySelectorAll("[data-info-msg]");

// function hideAllMsg() {
//   infoMsgs.forEach((msg) => (msg.style.display = "none"));
// }
