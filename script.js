// Game variables
let playerName = "PLAYER";

// Initialize
window.onload = () => {
    generateStars();
    updatePlayerNameDisplay();
};

function generateStars() {
    const container = document.getElementById('stars-container');
    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(star);
    }
}

// UI Navigation
function showLevels() {
    hideAll();
    document.getElementById('levels-screen').classList.remove('hidden');
}

function backToMenu() {
    hideAll();
    document.getElementById('menu-screen').classList.remove('hidden');
}

function hideAll() {
    const screens = ['menu-screen', 'levels-screen', 'toss-screen', 'gameplay-screen', 'result-screen'];
    screens.forEach(s => document.getElementById(s).classList.add('hidden'));
}

// Modal Logic
function showNameModal() {
    document.getElementById('name-modal').classList.remove('hidden');
}

function hideNameModal() {
    document.getElementById('name-modal').classList.add('hidden');
}

function saveName() {
    const val = document.getElementById('name-input').value;
    if(val.trim() !== "") {
        playerName = val.toUpperCase();
        updatePlayerNameDisplay();
        hideNameModal();
    }
}

function updatePlayerNameDisplay() {
    document.getElementById('player-name-display').innerText = playerName;
}

// Placeholders for other functions called in your HTML
function showThemeModal() { console.log("Theme modal opened"); }
function showLeaderboard() { console.log("Leaderboard opened"); }
function startGame(diff) { console.log("Game started: " + diff); }
