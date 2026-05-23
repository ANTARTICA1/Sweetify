const audio = new Audio("assets/swu.mp3");
audio.preload = "auto";

const SONG = {
  title: "Stuck With You",
  artist: "Ariana Grande, Justin Bieber",
  album: "Stuck With You - Single",
  img: "assets/images/romantic_album.png",
};

const TIMED_LYRICS = [
  { time: 0, text: "Mmm" },
  { time: 8, text: "Hey, yeah" },
  { time: 12, text: "(That's just for fun)" },
  { time: 14, text: "(What?)" },
  { time: 19, text: "" },
  { time: 20, text: "I'm not one to stick around" },
  { time: 24, text: "One strike and you're out, baby" },
  { time: 26, text: "Don't care if I sound crazy" },
  { time: 28, text: "But you never let me down, no, no" },
  { time: 31, text: "That's why when the sun's up, I'm stayin'" },
  { time: 34, text: "Still layin' in your bed, singin'" },
  { time: 37, text: "Ooh, ooh, ooh, ooh" },
  { time: 38, text: "" },
  { time: 39, text: "Got all this time on my hands" },
  { time: 43, text: "Might as well cancel our plans, yeah" },
  { time: 48, text: "I could stay here for a lifetime" },
  { time: 50, text: "" },
  { time: 52, text: "So lock the door" },
  { time: 54, text: "And throw out the key" },
  { time: 56, text: "Can't fight this no more" },
  { time: 58, text: "It's just you and me" },
  { time: 60, text: "And there's nothing I, nothing I, I can do" },
  { time: 64, text: "I'm stuck with you, stuck with you, stuck with you" },
  { time: 68, text: "So go ahead and drive me insane" },
  { time: 72, text: "Baby, run your mouth" },
  { time: 74, text: "I still wouldn't change being stuck with you" },
  { time: 77, text: "Stuck with you, stuck with you" },
  { time: 80, text: "I'm stuck with you, stuck with you, stuck with you, baby" },
  { time: 83, text: "" },
  { time: 84, text: "There's nowhere we need to be" },
  { time: 87, text: "No, no, no" },
  { time: 88, text: "I'ma get to know you better" },
  { time: 90, text: "Kinda hope we're here forever" },
  { time: 92, text: "There's nobody on these streets" },
  { time: 97, text: "If you told me that the world's ending" },
  { time: 98, text: "Ain't no other way that I could spend it" },
  { time: 101, text: "Oh, oh, oh, oh" },
  { time: 102, text: "" },
  { time: 103, text: "Got all this time in my hands" },
  { time: 107, text: "Might as well cancel our plans (yeah)" },
  { time: 112, text: "I could stay here forever" },
  { time: 116, text: "" },
  { time: 116, text: "So lock the door" },
  { time: 118, text: "And throw out the key" },
  { time: 120, text: "Can't fight this no more" },
  { time: 122, text: "It's just you and me" },
  { time: 124, text: "And there's nothing I, nothing I, I can do" },
  { time: 128, text: "I'm stuck with you, stuck with you, stuck with you" },
  { time: 132, text: "So go ahead and drive me insane" },
  { time: 136, text: "Baby, run your mouth" },
  { time: 138, text: "I still wouldn't change being stuck with you" },
  { time: 142, text: "Stuck with you, stuck with you" },
  { time: 144, text: "I'm stuck with you, stuck with you, stuck with you" },
  { time: 148, text: "" },
  { time: 149, text: "Whoa, whoa, oh" },
  { time: 151, text: "Baby, come take all my time" },
  { time: 155, text: "Go on, make me lose my mind" },
  { time: 159, text: "We got all that we need here tonight" },
  { time: 163, text: "" },
  { time: 164, text: "I lock the door (lock the door)" },
  { time: 167, text: "And throw out the key" },
  { time: 169, text: "Can't fight this no more (can't fight this no more)" },
  { time: 171, text: "It's just you and me" },
  { time: 172, text: "And there's nothing I, nothing I'd rather do" },
  { time: 176, text: "I'm stuck with you, stuck with you, stuck with you" },
  { time: 181, text: "So go ahead and drive me insane" },
  { time: 184, text: "Baby, run your mouth" },
  { time: 187, text: "I still wouldn't change" },
  { time: 188, text: "All this lovin' you, hatin' you, wantin' you" },
  { time: 192, text: "I'm stuck with you, stuck with you, stuck with" },
  { time: 198, text: "You, you" },
  { time: 209, text: "Stuck with you, stuck with you, stuck with you" },
];

const quickPlayData = [
  { name: "For You 💕", img: "assets/images/romantic_album.png", romantic: true },
  { name: "Today's Top Hits", img: "assets/images/playlist_hits.png", romantic: false },
  { name: "Chill Vibes", img: "assets/images/playlist_chill.png", romantic: false },
  { name: "Daily Mix 1", img: "assets/images/playlist_daily.png", romantic: false },
  { name: "Lofi Beats", img: "assets/images/album_lofi.png", romantic: false },
  { name: "Pop Hits", img: "assets/images/album_pop.png", romantic: false },
];

const recentlyPlayed = [
  { title: "For You 💕", desc: "Playlist • Something special", img: "assets/images/playlist_romantic.png", romantic: true },
  { title: "Today's Top Hits", desc: "The hottest songs right now", img: "assets/images/playlist_hits.png", romantic: false },
  { title: "Chill Vibes", desc: "Relax and unwind", img: "assets/images/playlist_chill.png", romantic: false },
  { title: "Daily Mix 1", desc: "Made for you", img: "assets/images/playlist_daily.png", romantic: false },
  { title: "Hip Hop Fire", desc: "Hottest hip-hop tracks", img: "assets/images/album_hiphop.png", romantic: false },
];

const madeForYou = [
  { title: "Romantic Moods", desc: "For that special someone 💕", img: "assets/images/playlist_romantic.png", romantic: true },
  { title: "Daily Mix 1", desc: "Lofi Chill, Sleepy Beats and more", img: "assets/images/playlist_daily.png", romantic: false },
  { title: "Discover Weekly", desc: "Your personal mixtape", img: "assets/images/album_edm.png", romantic: false },
  { title: "Release Radar", desc: "New music from artists you follow", img: "assets/images/album_pop.png", romantic: false },
  { title: "Chill Mix", desc: "Calm Shores, Night Owl and more", img: "assets/images/playlist_chill.png", romantic: false },
];

const popularPlaylists = [
  { title: "Love Songs", desc: "The best love songs 💕", img: "assets/images/romantic_album.png", romantic: true },
  { title: "Rock Anthems", desc: "Legendary rock tracks", img: "assets/images/album_rock.png", romantic: false },
  { title: "Jazz Classics", desc: "Timeless jazz", img: "assets/images/album_jazz.png", romantic: false },
  { title: "Indie Folk", desc: "Cozy acoustic vibes", img: "assets/images/album_indie.png", romantic: false },
  { title: "R&B Vibes", desc: "Smooth and soulful", img: "assets/images/album_rnb.png", romantic: false },
];

let state = {
  isPlaying: false,
  heartLiked: false,
  nowPlayingOpen: false,
  lyricsExpanded: false,
  currentLyricIndex: -1,
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("splash-screen").classList.add("hidden");
    document.getElementById("app-wrapper").classList.add("visible");
  }, 2800);

  setGreeting();
  updateStatusTime();
  setInterval(updateStatusTime, 60000);
  renderQuickGrid();
  renderHorizontalCards("recent-scroll", recentlyPlayed);
  renderHorizontalCards("foryou-scroll", madeForYou);
  renderHorizontalCards("popular-scroll", popularPlaylists);
  renderLyrics();

  audio.addEventListener("timeupdate", onTimeUpdate);
  audio.addEventListener("ended", onAudioEnded);
  audio.addEventListener("loadedmetadata", () => {
    const dur = audio.duration;
    const m = Math.floor(dur / 60);
    const s = Math.floor(dur % 60);
    document.getElementById("np-time-total").textContent = `${m}:${s.toString().padStart(2, "0")}`;
  });
});

function updateStatusTime() {
  const now = new Date();
  const h = now.getHours().toString().padStart(2, "0");
  const m = now.getMinutes().toString().padStart(2, "0");
  document.getElementById("status-time").textContent = `${h}:${m}`;
}

function setGreeting() {
  const hour = new Date().getHours();
  let g;
  if (hour < 12) g = "Good morning";
  else if (hour < 18) g = "Good afternoon";
  else g = "Good evening";
  document.getElementById("home-greeting").textContent = g;
}

function renderQuickGrid() {
  const grid = document.getElementById("quick-grid");
  grid.innerHTML = quickPlayData
    .map(
      (item) => `
    <div class="quick-card ${item.romantic ? "romantic" : ""}" onclick="handleCardClick(${item.romantic})">
      <img src="${item.img}" alt="${item.name}" />
      <span class="qc-name">${item.name}</span>
    </div>
  `,
    )
    .join("");
}

function renderHorizontalCards(containerId, data) {
  const container = document.getElementById(containerId);
  container.innerHTML = data
    .map(
      (item) => `
    <div class="h-card ${item.romantic ? "romantic" : ""}" onclick="handleCardClick(${item.romantic})">
      <img class="hc-img" src="${item.img}" alt="${item.title}" />
      <div class="hc-title">${item.title}</div>
      <div class="hc-desc">${item.desc}</div>
    </div>
  `,
    )
    .join("");
}

function handleCardClick(isRomantic) {
  if (isRomantic) {
    startPlayback();
    showMiniPlayer();
    setTimeout(() => openNowPlaying(), 400);
  } else {
    showPopup();
  }
}

function showPopup() {
  document.getElementById("popup-overlay").classList.add("visible");
}
function closePopup() {
  document.getElementById("popup-overlay").classList.remove("visible");
}

function showMiniPlayer() {
  const mp = document.getElementById("mini-player");
  mp.style.display = "block";
  mp.classList.add("fade-in-up");
  updateMiniPlayIcon();
}

function toggleMiniPlay() {
  togglePlayPause();
}

function updateMiniPlayIcon() {
  const icon = document.getElementById("mini-play-icon");
  icon.className = state.isPlaying ? "bi bi-pause-fill" : "bi bi-play-fill";
}

function openNowPlaying() {
  state.nowPlayingOpen = true;
  document.getElementById("now-playing-screen").classList.add("active");
  document.getElementById("home-screen").classList.remove("active");
  updateNpPlayIcon();
}

function closeNowPlaying() {
  state.nowPlayingOpen = false;
  document.getElementById("now-playing-screen").classList.remove("active");
  document.getElementById("home-screen").classList.add("active");
}

function startPlayback() {
  audio.play().catch(() => {});
  state.isPlaying = true;
  updateAllPlayIcons();
}

function togglePlayPause() {
  if (state.isPlaying) {
    audio.pause();
  } else {
    audio.play().catch(() => {});
  }
  state.isPlaying = !state.isPlaying;
  updateAllPlayIcons();
}

function togglePlayNp() {
  togglePlayPause();
}

function nextTrackNp() {
  audio.currentTime = 0;
  if (!state.isPlaying) {
    startPlayback();
  }
}

function prevTrackNp() {
  audio.currentTime = 0;
  if (!state.isPlaying) {
    startPlayback();
  }
}

function updateAllPlayIcons() {
  updateMiniPlayIcon();
  updateNpPlayIcon();
}

function updateNpPlayIcon() {
  const icon = document.getElementById("np-play-icon");
  icon.className = state.isPlaying ? "bi bi-pause-fill" : "bi bi-play-fill";
}

function onTimeUpdate() {
  const ct = audio.currentTime;
  const dur = audio.duration || 227;
  const pct = (ct / dur) * 100;

  document.getElementById("np-progress-fill").style.width = pct + "%";
  document.getElementById("mini-progress-fill").style.width = pct + "%";

  const m = Math.floor(ct / 60);
  const s = Math.floor(ct % 60);
  document.getElementById("np-time-now").textContent = `${m}:${s.toString().padStart(2, "0")}`;

  syncLyrics(ct);
}

function onAudioEnded() {
  state.isPlaying = false;
  updateAllPlayIcons();
  audio.currentTime = 0;
  state.currentLyricIndex = -1;
  clearLyricHighlight();
}

function seekNp(event) {
  const track = document.getElementById("np-progress-track");
  const rect = track.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
  audio.currentTime = pct * (audio.duration || 227);
}

function toggleHeart() {
  state.heartLiked = !state.heartLiked;
  document.getElementById("np-heart").classList.toggle("liked", state.heartLiked);
}

function renderLyrics() {
  const body = document.getElementById("lyrics-body");
  body.innerHTML = TIMED_LYRICS.map((item, i) => {
    if (item.text === "") {
      return `<div class="lyrics-line spacer" data-idx="${i}"></div>`;
    }
    return `<div class="lyrics-line" data-idx="${i}">${item.text}</div>`;
  }).join("");
}

function syncLyrics(currentTime) {
  let activeIdx = -1;
  for (let i = TIMED_LYRICS.length - 1; i >= 0; i--) {
    if (currentTime >= TIMED_LYRICS[i].time) {
      activeIdx = i;
      break;
    }
  }

  if (activeIdx === state.currentLyricIndex) return;
  state.currentLyricIndex = activeIdx;

  const lines = document.querySelectorAll(".lyrics-line");
  lines.forEach((l) => l.classList.remove("active"));

  if (activeIdx >= 0) {
    const activeLine = document.querySelector(`.lyrics-line[data-idx="${activeIdx}"]`);
    if (activeLine && TIMED_LYRICS[activeIdx].text !== "") {
      activeLine.classList.add("active");
    }
  }
}

function clearLyricHighlight() {
  document.querySelectorAll(".lyrics-line").forEach((l) => l.classList.remove("active"));
}

function toggleLyricsExpand() {
  state.lyricsExpanded = !state.lyricsExpanded;
  const section = document.getElementById("np-lyrics-section");
  section.classList.toggle("collapsed", !state.lyricsExpanded);
}
