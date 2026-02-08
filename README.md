
# Money Ladder - Financial Learning Game

A mobile-first, low-literacy financial literacy game inspired by Snake & Ladders combined with color-based decision learning.

## Features

### 🎮 Core Gameplay
- **Snake & Ladder Board**: 16-tile game board with snakes (bad choices) and ladders (good choices)
- **Dice Rolling**: Tap to roll and move across the board
- **Financial Scenarios**: Real-life money situations triggered on specific tiles
- **3-Choice System**: 🟢 Safe, 🟡 Risky, 🔴 Danger color-coded buttons
- **Visual Consequences**: 
  - Safe Choice → Happy wallet with floating coins 😊💰
  - Wrong Choice → Warning shake ⚠️
  - Danger → Broken piggy bank 💔💸

### 👤 Login & Progress
- **Simple Login**: Name + 4-digit PIN authentication
- **Progress Memory**: All progress saved to localStorage
- **No Repeated Questions**: Questions don't repeat in the same session
- **Score Tracking**: Points for correct answers

### 🌍 Language Support
- **English/Hindi Toggle**: All labels, buttons, and feedback in both languages
- **Voice-Friendly Design**: Minimal text, maximum icons and emojis
- **Accessibility**: WCAG compliant, high-contrast colors

### 📚 Financial Scenarios (10 Total)
- **Fraud Prevention**: OTP scams, fake links, lottery tricks, fake QR codes
- **Saving Habits**: Bank accounts, fixed deposits, budgeting
- **Consumer Rights**: Unauthorized loans, password safety, official payments

### 📊 Progress Tracking
- Statistics dashboard (Correct/Wrong/Level/Score)
- Category-wise progress visualization
- Performance summary with stars and feedback

## Technical Details

**Frontend Only**: HTML, CSS, JavaScript (No backend needed)
**Storage**: Browser localStorage for offline functionality
**Mobile-First**: Responsive design optimized for rural users
**Offline**: Works completely offline, no internet required

## Folder Structure

```
money-ladder/
├── index.html (5 screens)
├── style.css (Mobile-first responsive design)
├── script.js (Game logic, language support, localStorage)
└── assets/ (Scenario images)
```

## How to Play

1. **Login**: Enter your name and a 4-digit PIN
2. **Roll Dice**: Tap the dice to move across the board
3. **Answer Scenarios**: When you land on a scenario tile (marked with ❓), choose the right financial decision
4. **Climb or Slide**: Correct answers help you climb ladders, wrong choices make you slide down snakes
5. **Track Progress**: View your statistics and category progress anytime

## Game Mechanics

- Correct financial decision → Get points + potential ladder climb
- Wrong financial decision → Slide down snake, but learn from feedback
- Each tile can have a scenario that teaches financial literacy
- Questions are randomized and never repeated in same session
- Progress is saved automatically

## Financial Education Focus

✅ **Fraud Prevention**: Learn to identify and avoid scams
✅ **Saving Behavior**: Understand importance of banks and budgeting
✅ **Consumer Rights**: Know your rights during transactions
✅ **Behavioral Learning**: Learn through consequences, not theory

## Accessibility

- High-contrast colors for visibility
- Large buttons and emojis for low-literacy users
- Supports reduced motion preferences
- Fully keyboard and touch accessible
- Works offline

## Screenshot Screens

1. **Login Screen**: Name, PIN, language selection
2. **Game Board**: 16-tile board with dice, snakes, and ladders
3. **Scenario Screen**: Financial scenario with 3 color-coded choices
4. **Result Screen**: Visual consequence with feedback and tip
5. **Progress Screen**: Statistics and category progress

---

**Made for rural financial literacy in 2026** 💰
