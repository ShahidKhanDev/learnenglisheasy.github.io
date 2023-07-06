// DOM elements
const userPopup = document.querySelector(".user__popup");
const userInput = document.querySelector(".user__popup .user__input");
const userErrMsg = document.querySelector(".user__popup .error-msg");
const userSettingsElem = document.querySelector(".user__settings");
const userSettingsInput = document.querySelector(
  ".user__settings .user__input"
);
const userSettingsErrMsg = document.querySelector(".user__settings .error-msg");
const userSettingsElemCloseBtn = userSettingsElem.querySelector(".close-btn");
const welcomeElem = document.querySelector(".welcome__user");
const welcomeUsername = document.querySelector(".welcome__user .username");
const header = document.querySelector(".header__container");
const navbarOpenBtn = document.querySelector("[data-nav-open]");
const navbarCloseBtns = document.querySelectorAll("[data-nav-close]");
const overlay = document.querySelector(".overlay");
const filterBtnMain = document.querySelector(".filter-btn-main");
const filterBtn = document.querySelector(".filter-btn");
const filterArea = document.querySelector(".filter__area");
const headerAnimText = document.querySelector(".anim-text");
const category = document.querySelector(".category");
const categoryItems = document.querySelectorAll(".category__item");
const playBtns = document.querySelectorAll("[data-play-btn]");
const themeTogglerBtns = document.querySelectorAll("[data-theme-toggler]");
const goToTopBtn = document.querySelector(".go-to-top-btn");
const copyRightYear = document.querySelector(".coypright-year");

// userInput.addEventListener("keyup", (e) => {
//   const username = e.target.value;

//   if (e.key == "Enter" && !username) {
//     userErrMsg.classList.add("show");
//     userErrMsg.textContent = "Please enter your name";

//     setTimeout(() => {
//       userErrMsg.classList.remove("show");
//     }, 2000);
//   } else if (e.key == "Enter" && username.length < 4) {
//     userErrMsg.classList.add("show");
//     userErrMsg.textContent = "Your name must be at least 4 characters long";

//     setTimeout(() => {
//       userErrMsg.classList.remove("show");
//     }, 2000);
//   } else if (e.key == "Enter") {
//     localStorage.setItem("username", username);
//     userPopup.classList.remove("active");
//     welcomeUsername.textContent = username;
//   }
// });

// check if the username is already in localStorage then hide the user popup
// window.addEventListener("load", () => {
//   const username = localStorage.getItem("username");
//   welcomeUsername.textContent = username;
//   if (username) {
//     userPopup.remove();
//   } else {
//     userPopup.classList.add("active");
//   }
// });

// welcomeElem.addEventListener("click", () => {
//   const localStrName = localStorage.getItem("username");
//   overlay.classList.add("active");
//   userSettingsElem.classList.add("show");
//   userSettingsInput.value = localStrName;
// });

// update username
// userSettingsInput.addEventListener("keyup", (e) => {
//   const username = e.target.value;

//   if (e.key == "Enter" && !username) {
//     userSettingsErrMsg.classList.add("show");
//     userSettingsErrMsg.textContent = "Please enter your name";

//     setTimeout(() => {
//       userSettingsErrMsg.classList.remove("show");
//     }, 2000);
//   } else if (e.key == "Enter" && username.length < 4) {
//     userSettingsErrMsg.classList.add("show");
//     userSettingsErrMsg.textContent =
//       "Your name must be at least 4 characters long";

//     setTimeout(() => {
//       userSettingsErrMsg.classList.remove("show");
//     }, 2000);
//   } else if (e.key == "Enter") {
//     localStorage.setItem("username", username);
//     userSettingsErrMsg.classList.add("show");
//     userSettingsErrMsg.textContent = "Your name has been updated successfully";

//     setTimeout(() => {
//       setTimeout(() => {
//         userSettingsErrMsg.classList.remove("show");
//       }, 1000);

//       userSettingsElem.classList.remove("show");
//       overlay.classList.remove("active");
//     }, 1500);
//     welcomeUsername.textContent = username;
//   }
// });

// userSettingsElemCloseBtn.addEventListener("click", () => {
//   overlay.classList.remove("active");
//   userSettingsElem.classList.remove("show");
// });

// header fixed
function headerFixed() {
  if (window.scrollY >= 20) {
    header.classList.add("fixed");
    goToTopBtn.classList.add("active");
    document.body.classList.add("mv-tgl-btn");
  } else {
    header.classList.remove("fixed");
    goToTopBtn.classList.remove("active");
    document.body.classList.remove("mv-tgl-btn");
  }
}

function openNavbar() {
  header.classList.add("show");
  overlay.classList.add("active");
}

function closeNavbar() {
  header.classList.remove("show");
  overlay.classList.remove("active");
}

navbarOpenBtn.addEventListener("click", openNavbar);
navbarCloseBtns.forEach((btn) => btn.addEventListener("click", closeNavbar));

// filter area
filterBtn.addEventListener("click", () => {
  filterBtn.classList.toggle("active");
  filterBtnMain.classList.toggle("active");
  filterArea.classList.toggle("active");
});

window.addEventListener("scroll", headerFixed);

// animate the header text
const animArr = ["Reading", "Vocabulary", "Conversation", "Grammar"];
let index = 0;

headerAnimText.innerHTML = animArr[0];
headerAnimText.classList.add("show");

animateHeaderText();

function animateHeaderText() {
  setTimeout(() => {
    headerAnimText.classList.remove("show");
  }, 1500);
  setInterval(() => {
    index++;

    if (index > animArr.length - 1) {
      index = 0;
    }
    headerAnimText.classList.add("show");
    setTimeout(() => {
      headerAnimText.classList.remove("show");
    }, 1500);
    headerAnimText.innerHTML = animArr[index];
  }, 2000);
}

// category listeners
categoryItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (!item.classList.contains("locked")) {
      // remove the active class from the previous category item
      category.querySelector(".active").classList.remove("active");
      item.classList.add("active");
    }
  });
});

// toggle theme
function toggleTheme() {
  const body = document.body;
  // themeTogglerBtn.classList.toggle("active");
  themeTogglerBtns.forEach((btn) => btn.classList.toggle("active"));

  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    progressbarColor = rootColor.getPropertyValue("--accent");

    themeTogglerBtns.forEach((btn) => btn.classList.remove("active"));
    localStorage.setItem("theme", "light");
  } else {
    body.classList.replace("light", "dark");
    progressbarColor = rootColor.getPropertyValue("--accent");

    themeTogglerBtns.forEach((btn) => btn.classList.add("active"));
    localStorage.setItem("theme", "dark");
  }

  // change the background colors of progressbars when the theme changes
  audioProgressbar.style.background = `linear-gradient(90deg, ${progressbarColor}  ${audioProgressbar.value}%, #e2e2e2 0%)`;
  volumeProgressbar.style.background = `linear-gradient(90deg, ${progressbarColor}  ${volumeProgressbar.value}%, #e2e2e2 0%)`;
}

// check the theme whether its light or dark
function checkTheme() {
  const defaultTheme = document.body.className;
  const localStrTheme = localStorage.getItem("theme");

  if (!localStrTheme) {
    localStorage.setItem("theme", defaultTheme);
  }

  if (localStrTheme == "light") {
    themeTogglerBtns.forEach((btn) => btn.classList.remove("active"));
  } else {
    themeTogglerBtns.forEach((btn) => btn.classList.add("active"));
  }
  document.body.classList.add(localStrTheme);
}

window.addEventListener("load", () => {
  checkTheme();
});

// themeTogglerBtns.addEventListener("click", toggleTheme);
themeTogglerBtns.forEach((btn) => btn.addEventListener("click", toggleTheme));

// copyright year
copyRightYear.innerHTML = new Date().getFullYear();

/**
 * Fetch data from sanity
 */
const DATASET = "production";
const PROJECT_ID = "rfaksjo9";
const LESSON_QUERY = encodeURIComponent("*[_type == 'lessons']");
const API_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${LESSON_QUERY}`;

const lessonCardsElem = document.querySelector(".lesson__cards");
const lessonErrMsgs = document.querySelectorAll("[data-info-msg]");

function hideAllMsg() {
  lessonErrMsgs.forEach((msg) => (msg.style.display = "none"));
}

async function fetchData() {
  hideAllMsg();
  lessonErrMsgs[0].style.display = "block";

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    showData(data);
  } catch (err) {
    hideAllMsg();
    lessonErrMsgs[2].style.display = "block";
  }

  lessonErrMsgs[0].style.display = "none";
}

fetchData();

function showData(data) {
  const result = data.result;

  if (result.length <= 0) {
    hideAllMsg();
    lessonErrMsgs[1].style.display = "block";
  } else {
    for (let i = 0; i < result.length; i++) {
      const { lessonTitle, uploadDate, audio, richText } = result[i];
      let lessonCard = `
      <div class="lesson__card" data-lesson-card>
          <div class="lesson__details">
          <div class="num">${addZero(i + 1)}</div>
          <div class="lesson__data">
              <div class="lesson__name">${lessonTitle}</div>
              <div class="publish__date">
              Publised: <span>${uploadDate}</span>
              </div>
          </div>
          </div>
  
          <div class="dl__btns">
          <button class="btn-primary play-mini-audio-btn" data-play-btn data-lesson-num="${addZero(
            i + 1
          )}" data-lesson-title="${lessonTitle}" data-play-url="${
        audio.asset._ref
      }">
              <span class="material-icons">play_arrow</span>
          </button>
  
          <button class="btn-primary download-aud-btn" data-audio-download-btn data-modal-open="#downloadAudioPopup">
              <span class="material-icons-outlined">file_download</span>
          </button>
          </div>
      </div>
      `;

      lessonCardsElem.innerHTML += lessonCard;
    }
  }

  const audioPlayBtns = document.querySelectorAll("[data-play-btn]");
  const lessonCards = document.querySelectorAll("[data-lesson-card]");
  const audioDownloadBtns = document.querySelectorAll(
    "[data-audio-download-btn]"
  );

  getAudio(audioPlayBtns, lessonCards, result);
  getDownloadLink(audioDownloadBtns);
  validateDownload(audioDownloadBtns);
}

function createLessonText(id) {
  // const text = lessonText();
  // for (let i = 0; i < text.length; i++) {
  //   console.log(text[i]);
  // }
  const textData = lessonText();
}

function addZero(num) {
  return num < 10 ? "0" + num : num;
}

/**
 * Audio
 */
const audioPlayer = document.querySelector("[data-audio-player]");
const audioActionBtns = document.querySelectorAll("[data-action-btn]");
const audioCurrTime = document.querySelector("[data-audio-current-time]");
const audioEndTime = document.querySelector("[data-audio-end-time]");
const audioProgressbar = document.querySelector(".audio-progressbar");
const volumeProgressbar = document.querySelector(".volume-progressbar");
const volumeProgressbarIcon = document.querySelector(".volume__btns .icon");
const volumeMiniProgressbar = document.querySelector(
  ".volume-mini-progressbar"
);
const volumeMiniContainer = document.querySelector(".volume__mini .container");
const volumeMiniBtn = document.querySelector(".volume-mini-btn");
const audioPlayerTopSec = document.querySelector("[data-audio-player-top-sec]");
const masterPlayBtn = document.querySelector("[data-master-play-btn]");
const masterPlayBtnIcon = masterPlayBtn.querySelector("span");
const audioLessonName = document.querySelector("[data-audio-lesson-name]");
const audioLessonNum = document.querySelector("[data-audio-lesson-num]");

audioActionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isActive = btn.classList.contains("active");
    audioActionBtns.forEach((actBtn) => actBtn.classList.remove("active"));

    if (!isActive) {
      btn.classList.add("active");
    }

    // action volume btn
    if (btn.classList.contains("volume-mini-btn")) {
      volumeMiniContainer.classList.toggle("active");
    } else {
      volumeMiniContainer.classList.remove("active");
    }

    // action text mode btn
    if (btn.classList.contains("text-mode-btn")) {
      audioPlayerTopSec.classList.toggle("show");
      // overlay.classList.toggle("active");
      document.body.classList.toggle("popup-active");
    } else {
      audioPlayerTopSec.classList.remove("show");
      overlay.classList.remove("active");
      document.body.classList.remove("popup-active");
    }
  });
});

volumeMiniBtn.addEventListener("click", () => {});

let music = new Audio("");
let musicDefaultVoice = volumeProgressbar.value / 100;
music.volume = musicDefaultVoice;

const rootColor = getComputedStyle(document.body);
let progressbarColor;
let progressbarLoadColor = rootColor.getPropertyValue("--accent");
audioProgressbar.style.background = `linear-gradient(90deg, ${progressbarLoadColor}  ${audioProgressbar.value}%, #e2e2e2 0%)`;
volumeProgressbar.style.background = `linear-gradient(90deg, ${progressbarLoadColor}  ${volumeProgressbar.value}%, #e2e2e2 0%)`;
volumeMiniProgressbar.style.background = `linear-gradient(90deg, ${progressbarLoadColor}  ${volumeMiniProgressbar.value}%, #e2e2e2 0%)`;

masterPlayBtn.addEventListener("click", () => {
  music.paused || music.currentTime <= 0 ? playMusic() : pauseMusic();
});

function playMusic() {
  music.play();
  masterPlayBtnIcon.innerText = "pause";
  // change tooltip text
  masterPlayBtn.setAttribute("data-tooltip-text", "Pause audio");
}

function pauseMusic() {
  music.pause();
  masterPlayBtnIcon.innerText = "play_arrow";
  masterPlayBtn.setAttribute("data-tooltip-text", "Play audio");
}

function getAudio(playBtnArr, lessonCardsArr, result) {
  playBtnArr.forEach((playBtn, idx) => {
    playBtn.addEventListener("click", () => {
      // active the clicked lesson card
      lessonCardsArr.forEach((lessonCard) =>
        lessonCard.classList.remove("active")
      );

      lessonCardsArr[idx].classList.add("active");
      audioPlayer.classList.add("show");
      audioPlayer.setAttribute("data-btn-id", idx);
      document.body.classList.add("player__active");
      audioLessonName.textContent = playBtn.dataset.lessonTitle;
      audioLessonNum.textContent = playBtn.dataset.lessonNum;

      const audioPlayerTopSecContainer = document.querySelector(
        "[data-audio-player-top-sec] .container"
      );
      const richText = result[idx].richText;

      if (richText) {
        const lessonTitle = result[idx].richText[0].children[0].text;
        let lessonTitleElem = `<h4 class="lesson-title">${lessonTitle}</h4>`;
        audioPlayerTopSecContainer.innerHTML = lessonTitleElem;

        for (let i = 1; i < richText.length; i++) {
          // const { children } = richText[i];
          const style = richText[i].style;
          let textBody = `<p class="text-body">${richText[i].children[0].text}</p>`;
          audioPlayerTopSecContainer.innerHTML += textBody;
          audioPlayerTopSecContainer.classList.remove("text-center");
        }
      } else {
        audioPlayerTopSecContainer.innerHTML = "No text available.";
        audioPlayerTopSecContainer.classList.add("text-center");
      }

      const audioUrl = playBtn.dataset.playUrl;
      playAudio(audioUrl);

      masterPlayBtn.classList.add("animate");
    });
  });
}

function playAudio(audioUrl) {
  audioUrl = formatURL(audioUrl);
  const AUDIO_URL = `https://cdn.sanity.io/files/${PROJECT_ID}/${DATASET}/${audioUrl}`;
  music.src = AUDIO_URL;

  masterPlayBtn.click();
}

music.addEventListener("loadstart", () => {
  audioProgressbar.value = 0;
});

music.addEventListener("timeupdate", (e) => {
  let currentTime = Math.floor(music.currentTime);
  let duration = Math.floor(music.duration);

  if (music.currentTime <= 0) {
    masterPlayBtn.classList.add("animate");
    masterPlayBtnIcon.style.display = "none";
  } else {
    masterPlayBtn.classList.remove("animate");
    masterPlayBtnIcon.style.display = "block";
  }

  if (isNaN(duration)) {
    audioEndTime.textContent = "00:00";
  } else {
    // music end time
    let min = Math.floor(duration / 60);
    let sec = Math.floor(duration % 60);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    audioEndTime.textContent = `${min}:${sec}`;
  }

  // music start Time
  let min1 = Math.floor(currentTime / 60);
  let sec1 = Math.floor(currentTime % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  audioCurrTime.textContent = `${min1}:${sec1}`;

  let percent = (music.currentTime / music.duration) * 100;
  audioProgressbar.value = percent;
  progressbarColor == undefined
    ? (audioProgressbar.style.background = `linear-gradient(90deg, ${progressbarLoadColor}  ${percent}%, #e2e2e2 0%)`)
    : (audioProgressbar.style.background = `linear-gradient(90deg, ${progressbarColor}  ${percent}%, #e2e2e2 0%)`);
});

music.addEventListener("ended", () => {
  music.currentTime = 0;
  music.pause();
});

audioProgressbar.addEventListener("change", () => {
  progressbarColor == undefined
    ? (audioProgressbar.style.background = `linear-gradient(90deg, ${progressbarLoadColor}  ${audioProgressbar.value}%, #e2e2e2 0%)`)
    : (audioProgressbar.style.background = `linear-gradient(90deg, ${progressbarColor}  ${audioProgressbar.value}%, #e2e2e2 0%)`);
  music.currentTime = (audioProgressbar.value * music.duration) / 100;
});

audioProgressbar.addEventListener("input", () => {
  progressbarColor == undefined
    ? (audioProgressbar.style.background = `linear-gradient(90deg, ${progressbarLoadColor}  ${audioProgressbar.value}%, #e2e2e2 0%)`)
    : (audioProgressbar.style.background = `linear-gradient(90deg, ${progressbarColor}  ${audioProgressbar.value}%, #e2e2e2 0%)`);
  music.currentTime = (audioProgressbar.value * music.duration) / 100;
});

volumeProgressbar.addEventListener("change", () => {
  progressbarColor == undefined
    ? (volumeProgressbar.style.background = `linear-gradient(90deg, ${progressbarLoadColor}  ${volumeProgressbar.value}%, #e2e2e2 0%)`)
    : (volumeProgressbar.style.background = `linear-gradient(90deg, ${progressbarColor}  ${volumeProgressbar.value}%, #e2e2e2 0%)`);

  music.volume = volumeProgressbar.value / 100;
});

volumeProgressbar.addEventListener("input", () => {
  progressbarColor == undefined
    ? (volumeProgressbar.style.background = `linear-gradient(90deg, ${progressbarLoadColor}  ${volumeProgressbar.value}%, #e2e2e2 0%)`)
    : (volumeProgressbar.style.background = `linear-gradient(90deg, ${progressbarColor}  ${volumeProgressbar.value}%, #e2e2e2 0%)`);

  music.volume = volumeProgressbar.value / 100;
  if (music.volume == 0) {
    volumeProgressbarIcon.textContent = "volume_off";
  } else if (music.volume < 0.5) {
    volumeProgressbarIcon.textContent = "volume_down";
  } else {
    volumeProgressbarIcon.textContent = "volume_up";
  }
});

volumeMiniProgressbar.addEventListener("change", () => {
  progressbarColor == undefined
    ? (volumeMiniProgressbar.style.background = `linear-gradient(90deg, ${progressbarLoadColor}  ${volumeMiniProgressbar.value}%, #e2e2e2 0%)`)
    : (volumeMiniProgressbar.style.background = `linear-gradient(90deg, ${progressbarColor}  ${volumeMiniProgressbar.value}%, #e2e2e2 0%)`);

  music.volume = volumeMiniProgressbar.value / 100;
});

volumeMiniProgressbar.addEventListener("input", () => {
  progressbarColor == undefined
    ? (volumeMiniProgressbar.style.background = `linear-gradient(90deg, ${progressbarLoadColor}  ${volumeMiniProgressbar.value}%, #e2e2e2 0%)`)
    : (volumeMiniProgressbar.style.background = `linear-gradient(90deg, ${progressbarColor}  ${volumeMiniProgressbar.value}%, #e2e2e2 0%)`);

  music.volume = volumeMiniProgressbar.value / 100;
});

function formatURL(url) {
  const urlLink = url.split("-")[1];
  const urlExtension = url.split("-")[2];

  return `${urlLink}.${urlExtension}`;
}

// Download Audio
const downloadProgressbarMain = document.querySelector(
  ".download__progressbar__main"
);
const minimizeDownloadProgressbarMainBtn = document.querySelector(
  ".download__progressbar__main .minimize-btn"
);
const audioDownloadBtn = document.querySelector("[data-audio-download]");
const audioDownloadProgressbar = document.querySelector(
  ".download__progressbar__main"
);
const downloadProgressbar = document.querySelector(
  ".download__progressbar__full"
);
const downloadCircularProgressbar = document.querySelector(
  ".circular__progressbar"
);
const progressValue = document.querySelector(
  ".download__progressbar__main .progress__value"
);
const progressCicleValue = document.querySelector(
  ".circular__progressbar .progress__value"
);

minimizeDownloadProgressbarMainBtn.addEventListener("click", () => {
  downloadProgressbarMain.classList.add("minimize");
  downloadCircularProgressbar.classList.add("show");
  document.body.classList.remove("popup-active");
});

downloadCircularProgressbar.addEventListener("click", () => {
  downloadProgressbarMain.classList.remove("minimize");
  downloadCircularProgressbar.classList.remove("show");
  document.body.classList.add("popup-active");
});

const allModals = document.querySelectorAll(".popup");
function getDownloadLink(audioDlBtns) {
  audioDlBtns.forEach((dlBtn) => {
    dlBtn.addEventListener("click", () => {
      const modal = document.querySelector(dlBtn.dataset.modalOpen);
      const downloadURL = formatURL(
        dlBtn.previousElementSibling.dataset.playUrl
      );

      const lessonTitle = dlBtn.previousElementSibling.dataset.lessonTitle;

      openModal(modal, downloadURL, lessonTitle);
    });
  });
}

// modals
const modalCloseBtns = document.querySelectorAll("[data-modal-close]");
modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".popup");
    closeModal(modal);
  });
});

function openModal(modal, downloadURL, lessonTitle) {
  if (!modal || modal == null) return;

  audioDownloadBtn.setAttribute("data-audio-download-url", downloadURL);
  audioDownloadBtn.setAttribute("data-lesson-title", lessonTitle);

  modal.classList.add("show");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (!modal || modal == null) return;

  audioDownloadBtn.removeAttribute("data-audio-download-url");

  modal.classList.remove("show");
  overlay.classList.remove("active");
}

function downloadAudio(audioURL, lessonName) {
  const audioUrlAddress = `https://cdn.sanity.io/files/${PROJECT_ID}/${DATASET}/${audioURL}`;
  const lessonTitle = lessonName;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", audioUrlAddress, true);

  xhr.responseType = "blob";

  // Set up a progress
  xhr.addEventListener("progress", (event) => {
    if (event.lengthComputable) {
      let percentComplete = (event.loaded / event.total) * 100;
      downloadProgressbar.style.width = `${percentComplete}%`;

      percentComplete = Math.floor(percentComplete);
      progressValue.textContent = `${percentComplete}%`;

      // cicular progressbar
      const accentClr = rootColor.getPropertyValue("--accent");
      const cardDarkClr = rootColor.getPropertyValue("--card-dark");
      progressCicleValue.textContent = `${percentComplete}%`;
      downloadCircularProgressbar.style.background = `conic-gradient(
        ${accentClr} ${percentComplete * 3.6}deg, 
        ${cardDarkClr} ${percentComplete * 3.6}deg)`;
      // console.log(percentComplete);

      if (percentComplete == 100) {
        allModals.forEach((modal) => modal.classList.remove("show"));
        audioDownloadProgressbar.classList.remove("show");
        overlay.classList.remove("active");

        downloadProgressbar.style.width = "100%";
        progressValue.textContent = "100%";
      }
    }
  });

  xhr.onload = (event) => {
    if (xhr.status === 200) {
      const audioBlob = xhr.response;

      const a = document.createElement("a");
      a.href = URL.createObjectURL(audioBlob);

      a.download = lessonTitle;
      a.click();
    }
  };

  const cancelDownloadBtn = document.querySelector(".download-cancel-btn");
  const cancelDownloadMsg = document.querySelector(".download-cancel-msg");

  cancelDownloadBtn.addEventListener("click", () => {
    xhr.abort();
    minimizeDownloadProgressbarMainBtn.style.display = "none";

    setTimeout(() => {
      minimizeDownloadProgressbarMainBtn.style.display = "block";
    }, 2200);
  });

  xhr.onabort = () => {
    // console.log("Request cancelled");
    downloadProgressbar.style.width = "0%";
    progressValue.textContent = "0%";

    cancelDownloadMsg.classList.add("show");
    setTimeout(() => {
      audioDownloadProgressbar.classList.remove("show");
      overlay.classList.remove("active");
      cancelDownloadMsg.classList.remove("show");
      document.body.classList.remove("popup-active");
    }, 2200);
  };

  xhr.send();
}

audioDownloadBtn.addEventListener("click", () => {
  const audioLink = audioDownloadBtn.dataset.audioDownloadUrl;
  const lessonTitle = audioDownloadBtn.dataset.lessonTitle;
  allModals.forEach((modal) => modal.classList.remove("show"));
  audioDownloadProgressbar.classList.add("show");
  document.body.classList.add("popup-active");
  overlay.classList.remove("active");

  downloadAudio(audioLink, lessonTitle);
});

// Download PDF

/**
 * Sign in with google
 */

const signInGoogleBtn = document.querySelector(".google-signin-btn");

const port = 5501;
function signIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  let form = document.createElement("form");
  form.setAttribute("method", "GET"); // Send as a GET request.
  form.setAttribute("action", oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  let params = {
    client_id:
      "12203772907-4hep3m1423in8ji31d07jmreoiu302s1.apps.googleusercontent.com",
    redirect_uri: `http://localhost:${port}/index.html`,
    response_type: "token",
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    include_granted_scopes: "true",
    state: "pass-through value",
  };

  // Add form parameters as hidden input values.
  for (let p in params) {
    let input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", p);
    input.setAttribute("value", params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}

signInGoogleBtn.addEventListener("click", signIn);

// when clicked the google signin button
let params = {};

let regex = /([^&=]+)=([^&]*)/g,
  m;

while ((m = regex.exec(location.href))) {
  params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
}

if (Object.keys(params).length > 0) {
  localStorage.setItem("authInfo", JSON.stringify(params));
}

// hide the access token
window.history.pushState({}, document.title, "/" + "index.html");

let info = JSON.parse(localStorage.getItem("authInfo"));
if (info) {
  function fetchUserInfo() {
    fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${info["access_token"]}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // document.getElementById("image").setAttribute("src", data.picture);
        const greetUser = document.querySelector(".greet__user");
        const greetUserUsername = document.querySelector(".greet__user .user");
        greetUser.classList.add("show");
        // overlay.classList.add("active");

        greetUserUsername.innerHTML = data.given_name;
        document.querySelector(".google-username").innerHTML = data.given_name;
        document.querySelector(".user__profile .user__title").innerHTML =
          data.given_name;
        document.querySelector(".user__profile .user__email").innerHTML =
          data.email;
        document
          .querySelector(".profile-img")
          .setAttribute("src", data.picture);
        document
          .querySelector(".user__profile img")
          .setAttribute("src", data.picture);

        document.querySelector(".login").classList.remove("show");
        setTimeout(() => {
          greetUser.classList.remove("show");
          // overlay.classList.remove("active");
        }, 2000);
      })
      .catch((error) => {
        console.log("Error fetching user info:", error);
      });
  }

  function refreshToken() {
    fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `client_id=${info["client_id"]}&client_secret=${info["client_secret"]}&refresh_token=${info["refresh_token"]}&grant_type=refresh_token`,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Token refreshed:", data);
        info["access_token"] = data["access_token"];
        localStorage.setItem("authInfo", JSON.stringify(info));
        fetchUserInfo();
      })
      .catch((error) => {
        console.log("Error refreshing token:", error);
      });
  }

  // Fetch user info initially
  fetchUserInfo();

  // Refresh token before it expires
  const expiresInMs = parseInt(info["expires_in"]) * 1000;
  const refreshTimeMs = expiresInMs - 60000; // Refresh 1 minute before expiration
  setTimeout(refreshToken, refreshTimeMs);

  function logout() {
    fetch(
      "https://oauth2.googleapis.com/revoke?token=" + info["access_token"],
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then(() => {
        localStorage.removeItem("authInfo");
        location.href = `http://localhost:${port}/index.html`;
        document.querySelector(".login").classList.add("show");
      })
      .catch((error) => {
        console.log("Error revoking token:", error);
      });
  }

  // log out the user
  const userLogoutContainer = document.querySelector(".welcome__user");
  userLogoutContainer.addEventListener("click", logout);
  const userLogoutBtn = document.querySelector(".user__profile .signout-btn");
  userLogoutBtn.addEventListener("click", logout);
} else {
  document.querySelector(".login").classList.add("show");
  document.body.classList.add("popup-active");
}

// if the user is not logged in so the download will not be able
function validateDownload(audioDownloadBtns) {
  let authInfo = JSON.parse(localStorage.getItem("authInfo"));
  if (!authInfo) {
    audioDownloadBtns.forEach((btn) => (btn.style.display = "none"));
    document.querySelector(".profile").style.display = "none";
    document.querySelector(".welcome__user").style.display = "none";
  }
}

// show user profile
const userProfileImg = document.querySelector(".profile-img");
const userProfile = document.querySelector(".user__profile");

userProfileImg.addEventListener("click", () => {
  userProfile.classList.toggle("active");
});

// continue without login
const continueWithouLoginBtn = document.querySelector(".login .no-login-btn");
const userLogin = document.querySelector(".login");
continueWithouLoginBtn.addEventListener("click", () => {
  userLogin.classList.remove("show");
  document.body.classList.remove("popup-active");
});
