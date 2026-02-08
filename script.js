// Language Support
const translations = {
  en: {
    // Login Screen
    loginTitle: 'Money Ladder',
    loginSubtitle: 'Learn smart money choices!',
    // Game headers
    scoreText: 'Score',
    // Scenario choices
    safeLabel: 'SAFE',
    riskyLabel: 'RISKY',
    dangerLabel: 'DANGER',
    // Buttons
    loginPlayBtn: '▶ Play',
    loadPrevBtn: 'Load Progress',
    continueBtn: 'Continue →',
    progressBtn: '📊 Progress',
    resetBtn: '🔄 New Game',
    playAgainBtn: '▶ Play Again',
    diceText: 'Roll Dice',
    // Progress labels
    correctLabel: 'Correct',
    wrongLabel: 'Wrong',
    levelLabel: 'Level',
    scoreLabel: 'Score',
    progressTitle: 'Your Progress',
    categoryTitle: 'Topics Learned',
    victoryTitle: 'You Won!',
    victoryText: 'Congratulations on reaching 100!',
    // Messages
    correctAnswer: '✅ Correct!',
    wrongAnswer: '❌ Wrong!',
    climbLadder: '🪜 Climb Ladder!',
    slideSnake: '🐍 Slide Down!',
    allAnswered: 'All questions attempted!',
    // Financial categories
    fraudPrevention: 'Fraud Prevention',
    savingHabits: 'Saving Habits',
    consumerRights: 'Consumer Rights'
  },
  hi: {
    // Login Screen
    loginTitle: 'पैसे की सीढ़ी',
    loginSubtitle: 'स्मार्ट पैसे की बातें सीखें!',
    // Game headers
    scoreText: 'अंक',
    // Scenario choices
    safeLabel: 'सुरक्षित',
    riskyLabel: 'जोखिम',
    dangerLabel: 'खतरनाक',
    // Buttons
    loginPlayBtn: '▶ खेलें',
    loadPrevBtn: 'प्रगति लोड करें',
    continueBtn: 'जारी रखें →',
    progressBtn: '📊 प्रगति',
    resetBtn: '🔄 नया खेल',
    playAgainBtn: '▶ दोबारा खेलें',
    diceText: 'पासा फेंकें',
    // Progress labels
    correctLabel: 'सही',
    wrongLabel: 'गलत',
    levelLabel: 'स्तर',
    scoreLabel: 'अंक',
    progressTitle: 'आपकी प्रगति',
    categoryTitle: 'सीखे गए विषय',
    victoryTitle: 'आप जीत गए!',
    victoryText: '100 तक पहुंचने के लिए बधाई!',
    // Messages
    correctAnswer: '✅ सही!',
    wrongAnswer: '❌ गलत!',
    climbLadder: '🪜 सीढ़ी चढ़ें!',
    slideSnake: '🐍 नीचे खिसकें!',
    allAnswered: 'सभी प्रश्नों के उत्तर दिए गए!',
    // Financial categories
    fraudPrevention: 'धोखाधड़ी से बचाव',
    savingHabits: 'बचत की आदतें',
    consumerRights: 'उपभोक्ता अधिकार'
  }
};

let currentLanguage = localStorage.getItem('language') || 'en';

function t(key) {
  return translations[currentLanguage][key] || translations['en'][key];
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  updateAllLabels();
}

function toggleLanguage() {
  setLanguage(currentLanguage === 'en' ? 'hi' : 'en');
}

function updateAllLabels() {
  // Update current screen labels
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
}

// Financial Scenarios Database
const scenarios = [
  {
    id: 1,
    category: 'fraudPrevention',
    title: '📞 OTP Call',
    text: 'Bank calls asking for OTP?',
    img: '📞',
    correct: 'danger',
    tip: 'Banks NEVER ask OTP on calls. Hang up!',
    feedback: 'Such calls are 100% scams!'
  },
  {
    id: 2,
    category: 'savingHabits',
    title: '🏦 Bank Account',
    text: 'Should you open a bank account?',
    img: '🏦',
    correct: 'safe',
    tip: 'Banks keep money safe and give interest!',
    feedback: 'Banks are the safest place for money.'
  },
  {
    id: 3,
    category: 'consumerRights',
    title: '💰 Quick Loan',
    text: 'Get loan without papers?',
    img: '💰',
    correct: 'danger',
    tip: 'No papers = huge interest + debt trap!',
    feedback: 'Always get official bank loans.'
  },
  {
    id: 4,
    category: 'consumerRights',
    title: '🧾 Bill Payment',
    text: 'Pay via official government app?',
    img: '🧾',
    correct: 'safe',
    tip: 'Official apps are verified & protected.',
    feedback: 'Government apps are always safe!'
  },
  {
    id: 5,
    category: 'fraudPrevention',
    title: '🎁 Prize Alert',
    text: 'Won lottery you never entered?',
    img: '🎁',
    correct: 'danger',
    tip: 'If you didn\'t enter, you can\'t win!',
    feedback: 'Classic scam - always a trick.'
  },
  {
    id: 6,
    category: 'fraudPrevention',
    title: '📱 Fake UPI Link',
    text: 'Click UPI link for free credit?',
    img: '📱',
    correct: 'danger',
    tip: 'Fake links steal from your account!',
    feedback: 'Never click unknown links.'
  },
  {
    id: 7,
    category: 'savingHabits',
    title: '💳 Fixed Deposit',
    text: 'Keep money in fixed deposit?',
    img: '💳',
    correct: 'safe',
    tip: 'Fixed deposits grow money safely!',
    feedback: 'Your money works & earns interest.'
  },
  {
    id: 8,
    category: 'fraudPrevention',
    title: '💳 Unknown QR Code',
    text: 'Scan mysterious QR code?',
    img: '💳',
    correct: 'risky',
    tip: 'Verify QR code origin first!',
    feedback: 'Unknown codes can be malicious.'
  },
  {
    id: 9,
    category: 'consumerRights',
    title: '🔐 Strong Password',
    text: 'Keep same password everywhere?',
    img: '🔐',
    correct: 'danger',
    tip: 'Use different passwords for each account!',
    feedback: 'Different, strong passwords protect you.'
  },
  {
    id: 10,
    category: 'savingHabits',
    title: '🌱 Budget Plan',
    text: 'Plan your monthly budget?',
    img: '🌱',
    correct: 'safe',
    tip: 'Budgeting helps you save more money!',
    feedback: 'Smart budgeting = long-term wealth.'
  }
];

// Game State
let gameState = {
  playerName: '',
  playerPIN: '',
  currentPosition: 0,
  score: 0,
  answeredQuestions: [],
  correctCount: 0,
  wrongCount: 0,
  sessionQuestions: [],
  diceValue: 0
};

// Snake & Ladder Board (100 squares - traditional game)
const boardLayout = {
  // Ladders: position -> climb to
  ladders: {
    2: 38,
    7: 14,
    15: 26,
    21: 42,
    28: 84,
    36: 55,
    51: 67,
    71: 91,
    78: 98,
    87: 94
  },
  // Snakes: position -> slide to
  snakes: {
    17: 7,
    54: 34,
    62: 19,
    87: 36,
    93: 73,
    95: 75,
    98: 79,
    99: 40
  }
};

const BOARD_SIZE = 100;

// Initialize Game
function initGame() {
  loadLanguageUI();
  checkPreviousPlayer();
}

function loadLanguageUI() {
  currentLanguage = localStorage.getItem('language') || 'en';
  const isHindi = currentLanguage === 'hi';
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelectorAll('.lang-btn')[isHindi ? 1 : 0].classList.add('active');
  updateScreenLabels();
}

function updateScreenLabels() {
  // Login screen
  if (document.querySelector('#loginTitle')) {
    document.querySelector('#loginTitle').textContent = t('loginTitle');
    document.querySelector('#loginSubtitle').textContent = t('loginSubtitle');
  }
  
  // Scenario labels
  if (document.querySelector('#safeLabel')) {
    document.querySelector('#safeLabel').textContent = t('safeLabel');
    document.querySelector('#riskyLabel').textContent = t('riskyLabel');
    document.querySelector('#dangerLabel').textContent = t('dangerLabel');
  }
  
  // Button labels
  const buttons = {
    'loginPlayBtn': t('loginPlayBtn'),
    'continueBtn': t('continueBtn'),
    'progressBtn': t('progressBtn'),
    'resetBtn': t('resetBtn'),
    'diceText': t('diceText'),
    'correctLabel': t('correctLabel'),
    'wrongLabel': t('wrongLabel'),
    'levelLabel': t('levelLabel'),
    'scoreLabel': t('scoreLabel'),
    'progressTitle': t('progressTitle'),
    'categoryTitle': t('categoryTitle')
  };
  
  Object.entries(buttons).forEach(([id, text]) => {
    const el = document.querySelector(`#${id}`);
    if (el) el.textContent = text;
  });
}

function checkPreviousPlayer() {
  const savedPlayer = localStorage.getItem('playerName');
  const savedPIN = localStorage.getItem('playerPIN');
  
  if (savedPlayer && savedPIN) {
    const prevDiv = document.querySelector('#previousPlayerDiv');
    if (prevDiv) {
      prevDiv.style.display = 'block';
      prevDiv.querySelector('#previousPlayerText').textContent = `Welcome back, ${savedPlayer}!`;
    }
    gameState.playerName = savedPlayer;
    gameState.playerPIN = savedPIN;
  }
}

function loadPreviousProgress() {
  gameState.playerName = localStorage.getItem('playerName');
  gameState.playerPIN = localStorage.getItem('playerPIN');
  gameState.score = parseInt(localStorage.getItem('score') || 0);
  gameState.answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions') || '[]');
  gameState.correctCount = parseInt(localStorage.getItem('correctCount') || 0);
  gameState.wrongCount = parseInt(localStorage.getItem('wrongCount') || 0);
  gameState.currentPosition = parseInt(localStorage.getItem('position') || 0);
  
  startGameScreen();
}

function startGame() {
  const name = document.querySelector('#playerName').value?.trim();
  const pin = document.querySelector('#playerPIN').value?.trim();
  
  if (!name || !pin || pin.length !== 4) {
    alert('Please enter name and 4-digit PIN');
    return;
  }
  
  if (!/^\d{4}$/.test(pin)) {
    alert('PIN must be 4 digits');
    return;
  }
  
  gameState.playerName = name;
  gameState.playerPIN = pin;
  
  // Check if new or returning player
  const savedPIN = localStorage.getItem('playerPIN');
  if (savedPIN && savedPIN !== pin) {
    gameState = {
      playerName: name,
      playerPIN: pin,
      currentPosition: 0,
      score: 0,
      answeredQuestions: [],
      correctCount: 0,
      wrongCount: 0,
      sessionQuestions: [],
      diceValue: 0
    };
  } else {
    loadPreviousProgress();
    return;
  }
  
  saveProgress();
  startGameScreen();
}

function startGameScreen() {
  showScreen('gameScreen');
  document.querySelector('#playerNameDisplay').textContent = gameState.playerName;
  updateScore();
  generateBoard();
  generateRandomQuestions();
  updateTokenPosition();
}

function generateRandomQuestions() {
  const available = scenarios.filter(s => !gameState.answeredQuestions.includes(s.id));
  gameState.sessionQuestions = available.sort(() => Math.random() - 0.5);
}

function generateBoard() {
  const board = document.querySelector('#gameBoard');
  board.innerHTML = '';
  
  // Create 10x10 grid in snake & ladder style
  // Rows go: 100-91 (right to left), 81-90 (left to right), etc.
  const tiles = [];
  
  for (let row = 10; row >= 1; row--) {
    if (row % 2 === 0) {
      // Even rows: right to left
      for (let col = 10; col >= 1; col--) {
        tiles.push((row - 1) * 10 + col);
      }
    } else {
      // Odd rows: left to right
      for (let col = 1; col <= 10; col++) {
        tiles.push((row - 1) * 10 + col);
      }
    }
  }
  
  tiles.forEach(num => {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.dataset.num = num;
    
    if (num === gameState.currentPosition) {
      tile.classList.add('player');
    }
    
    // Check if tile has scenario
    if (isScenarioTile(num)) {
      tile.classList.add('scenario');
    }
    
    // Check if safe (ladder) or danger (snake)
    if (boardLayout.ladders[num]) {
      tile.classList.add('safe');
    }
    if (boardLayout.snakes[num]) {
      tile.classList.add('danger');
    }
    
    let content = `<span class="tile-number">${num}</span>`;
    if (boardLayout.ladders[num]) {
      content += '<span class="tile-icon">🪜</span>';
    }
    if (boardLayout.snakes[num]) {
      content += '<span class="tile-icon">🐍</span>';
    }
    if (isScenarioTile(num)) {
      content += '<span class="tile-icon scenario-icon">❓</span>';
    }
    
    tile.innerHTML = content;
    board.appendChild(tile);
  });
}

function isScenarioTile(num) {
  // Scenario tiles at positions: 5, 12, 25, 35, 45, 58, 69, 82, 90, 100
  const scenarioTiles = [5, 12, 25, 35, 45, 58, 69, 82, 90, 100];
  return scenarioTiles.includes(num);
}

function rollDice() {
  const diceBtn = document.querySelector('#diceBtn');
  diceBtn.disabled = true;
  
  // Dice roll animation
  let rolls = 0;
  const diceInterval = setInterval(() => {
    gameState.diceValue = Math.floor(Math.random() * 6) + 1;
    document.querySelector('#diceValue').textContent = gameState.diceValue;
    rolls++;
    
    if (rolls > 10) {
      clearInterval(diceInterval);
      diceBtn.disabled = false;
      
      // Move player
      setTimeout(() => movePlayer(gameState.diceValue), 300);
    }
  }, 100);
}

function movePlayer(steps) {
  const oldPosition = gameState.currentPosition;
  let newPosition = gameState.currentPosition + steps;
  
  // Can't go beyond 100
  if (newPosition > BOARD_SIZE) {
    newPosition = BOARD_SIZE - (newPosition - BOARD_SIZE);
  }
  
  gameState.currentPosition = newPosition;
  
  // Animate player token moving
  animateTokenMove(oldPosition, newPosition);
  
  // Check if lands on scenario
  if (isScenarioTile(newPosition) && gameState.sessionQuestions.length > 0) {
    setTimeout(() => showScenario(), 1200);
  } else {
    // Check for snake or ladder
    setTimeout(() => checkBoardEffect(), 1200);
  }
}

function getTokenPosition(position) {
  // Convert position (1-100) to grid coordinates
  // Following snake & ladder board pattern (zigzag)
  position = Math.max(1, Math.min(100, position));
  const row = Math.floor((position - 1) / 10);
  const col = (position - 1) % 10;
  
  // Adjust for right-to-left rows (even rows are reversed)
  const adjustedCol = (row % 2 === 0) ? col : 9 - col;
  
  // Calculate pixel position relative to board
  const tileSize = (100 * (1  - 0.15)) / 10; // Account for padding
  const gap = 6;
  const boardPadding = 15;
  const offsetPerTile = tileSize + gap;
  
  const left = boardPadding + adjustedCol * offsetPerTile + tileSize / 2;
  const top = boardPadding + (9 - row) * offsetPerTile + tileSize / 2;
  
  return { left, top };
}

function animateTokenMove(fromPosition, toPosition) {
  const token = document.querySelector('#playerToken');
  const board = document.querySelector('#gameBoard');
  const boardRect = board.getBoundingClientRect();
  
  // Get start and end positions
  const startPos = getTokenPosition(fromPosition);
  const endPos = getTokenPosition(toPosition);
  
  // Apply smooth animation
  token.style.transition = 'none';
  token.style.left = startPos.left + 'px';
  token.style.top = startPos.top + 'px';
  
  // Force reflow before starting animation
  void token.offsetWidth;
  
  const steps = Math.abs(toPosition - fromPosition);
  const duration = Math.max(600, steps * 150); // 150ms per tile
  
  token.style.transition = `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
  token.style.left = endPos.left + 'px';
  token.style.top = endPos.top + 'px';
  
  generateBoard();
  updateTokenPosition();
  
  // Check if reached 100
  if (gameState.currentPosition === BOARD_SIZE) {
    setTimeout(() => {
      showGameWon();
    }, duration + 200);
    return;
  }
}

function updateTokenPosition() {
  const pos = getTokenPosition(gameState.currentPosition);
  const token = document.querySelector('#playerToken');
  
  token.style.transition = 'none';
  token.style.left = pos.left + 'px';
  token.style.top = pos.top + 'px';
}

function checkBoardEffect() {
  const pos = gameState.currentPosition;
  
  if (boardLayout.ladders[pos]) {
    const newPos = boardLayout.ladders[pos];
    setTimeout(() => {
      gameState.currentPosition = newPos;
      generateBoard();
      showMovementFeedback(newPos, true);
    }, 800);
  } else if (boardLayout.snakes[pos]) {
    const newPos = boardLayout.snakes[pos];
    setTimeout(() => {
      gameState.currentPosition = newPos;
      generateBoard();
      showMovementFeedback(newPos, false);
    }, 800);
  }
}

function showMovementFeedback(newPos, isLadder) {
  showScreen('resultScreen');
  const msg = isLadder ? t('climbLadder') : t('slideSnake');
  document.querySelector('#movementText').textContent = msg;
  document.querySelector('#resultStatus').textContent = isLadder ? '🪜' : '🐍';
  document.querySelector('#resultExplanation').textContent = isLadder ? 
    'You found a lucky tile!' : 'Oops! You hit a mistake!';
}

function showScenario() {
  if (gameState.sessionQuestions.length === 0) {
    alert(t('allAnswered'));
    return;
  }
  
  showScreen('scenarioScreen');
  const scenario = gameState.sessionQuestions[0];
  
  document.querySelector('#scenarioTitle').textContent = scenario.title;
  document.querySelector('#scenarioText').textContent = scenario.text;
  document.querySelector('#scenarioImg').textContent = scenario.img;
}

function answerScenario(choice) {
  const scenario = gameState.sessionQuestions[0];
  const isCorrect = choice === scenario.correct;
  
  if (isCorrect) {
    gameState.correctCount++;
    gameState.score += 10;
  } else {
    gameState.wrongCount++;
  }
  
  gameState.answeredQuestions.push(scenario.id);
  gameState.sessionQuestions.shift();
  
  saveProgress();
  showResult(scenario, isCorrect);
}

function showResult(scenario, isCorrect) {
  showScreen('resultScreen');
  
  // Show outcome visual
  document.querySelectorAll('.outcome').forEach(o => o.classList.add('hidden'));
  
  if (isCorrect) {
    document.querySelector('#safeResult').classList.remove('hidden');
    document.querySelector('#resultStatus').textContent = t('correctAnswer');
  } else {
    if (scenario.correct === 'danger') {
      document.querySelector('#dangerResult').classList.remove('hidden');
    } else if (scenario.correct === 'risky') {
      document.querySelector('#riskyResult').classList.remove('hidden');
    } else {
      document.querySelector('#safeResult').classList.remove('hidden');
    }
    document.querySelector('#resultStatus').textContent = t('wrongAnswer');
  }
  
  document.querySelector('#resultExplanation').textContent = scenario.tip;
  document.querySelector('#resultTip').textContent = '💡 ' + scenario.feedback;
  document.querySelector('#movementInfo').style.display = isCorrect ? 'block' : 'none';
  
  if (isCorrect) {
    gameState.score += 5;
    checkBoardEffect();
  }
}

function continueGame() {
  closeScenario();
  generateBoard();
}

function closeScenario() {
  showScreen('gameScreen');
  updateScore();
}

function backToGame() {
  showScreen('gameScreen');
  generateBoard();
}

function showProgress() {
  showScreen('progressScreen');
  
  document.querySelector('#correctCount').textContent = gameState.correctCount;
  document.querySelector('#wrongCount').textContent = gameState.wrongCount;
  document.querySelector('#levelValue').textContent = Math.floor(gameState.currentPosition / 10) + 1;
  document.querySelector('#scoreValue').textContent = gameState.score;
  
  // Show category progress
  const categoryList = document.querySelector('#categoryList');
  categoryList.innerHTML = '';
  
  const categories = ['fraudPrevention', 'savingHabits', 'consumerRights'];
  categories.forEach(cat => {
    const answered = gameState.answeredQuestions.filter(id => {
      const s = scenarios.find(sc => sc.id === id);
      return s && s.category === cat;
    }).length;
    const total = scenarios.filter(s => s.category === cat).length;
    
    const badge = document.createElement('div');
    badge.className = `category-badge ${answered > 0 ? 'completed' : ''}`;
    badge.innerHTML = `
      <div>${t(cat)}</div>
      <div>${answered}/${total}</div>
    `;
    categoryList.appendChild(badge);
  });
}

function resetProgress() {
  if (confirm('Start a new game? Current progress will be reset.')) {
    gameState = {
      playerName: gameState.playerName,
      playerPIN: gameState.playerPIN,
      currentPosition: 0,
      score: 0,
      answeredQuestions: [],
      correctCount: 0,
      wrongCount: 0,
      sessionQuestions: [],
      diceValue: 0
    };
    saveProgress();
    startGameScreen();
  }
}

function updateScore() {
  document.querySelector('#scoreDisplay').textContent = `${t('scoreText')}: ${gameState.score}`;
}

function showGameWon() {
  showScreen('victoryScreen');
  
  document.querySelector('#finalScore').textContent = gameState.score;
  document.querySelector('#finalCorrect').textContent = gameState.correctCount;
  document.querySelector('#finalLevel').textContent = Math.floor(gameState.currentPosition / 10) + 1;
  
  const percentage = Math.round((gameState.correctCount / (gameState.correctCount + gameState.wrongCount)) * 100) || 0;
  let message = '';
  
  if (percentage === 100) {
    message = 'Perfect! You mastered all financial lessons! 🌟';
  } else if (percentage >= 80) {
    message = 'Excellent! You are a financial expert! 💎';
  } else if (percentage >= 60) {
    message = 'Great job! You are learning well! 🎓';
  } else {
    message = 'Good try! Keep learning about money! 📚';
  }
  
  document.querySelector('#victoryMessage').textContent = message;
}

function playAgain() {
  gameState = {
    playerName: gameState.playerName,
    playerPIN: gameState.playerPIN,
    currentPosition: 0,
    score: 0,
    answeredQuestions: [],
    correctCount: 0,
    wrongCount: 0,
    sessionQuestions: [],
    diceValue: 0
  };
  saveProgress();
  startGameScreen();
}

function saveProgress() {
  localStorage.setItem('playerName', gameState.playerName);
  localStorage.setItem('playerPIN', gameState.playerPIN);
  localStorage.setItem('score', gameState.score);
  localStorage.setItem('correctCount', gameState.correctCount);
  localStorage.setItem('wrongCount', gameState.wrongCount);
  localStorage.setItem('answeredQuestions', JSON.stringify(gameState.answeredQuestions));
  localStorage.setItem('position', gameState.currentPosition);
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelector(`#${screenId}`).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize on load
window.addEventListener('DOMContentLoaded', initGame);