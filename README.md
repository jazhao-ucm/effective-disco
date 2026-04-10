# 🚀 Effective Disco - Space Jump

**Navigate your rocket through a spinning asteroid field. Time your jumps, dodge the rocks, and reach for the high score!**

> *"Effective Disco" — A rhythm-based challenge where you dodge obstacles with dance-like precision. Can you survive the cosmic beat?*

---

## Quick Start

1. Clone or download this repository  
2. Open `index.html` in your web browser  
3. Press **SPACEBAR** to jump and dodge asteroids  
4. Click anywhere after game over to restart

**Browser Support:** Chrome, Firefox, Safari, Edge (any modern browser with ES6 support)  
**No dependencies needed** — pure vanilla JavaScript, HTML5, CSS3

---

## 🎮 How to Play

| Step | Action |
|------|--------|
| **Start** | Open `index.html` in your browser |
| **Jump** | Press **SPACEBAR** to make your rocket jump |
| **Dodge** | Avoid the spinning asteroids moving toward you |
| **Score** | Earn 1 point for each asteroid you successfully pass |
| **Survive** | Game ends when your rocket collides with an asteroid |
| **Restart** | Click anywhere on the screen to play again |

### Game Mechanics

- Your rocket spawns at the bottom center of the screen
- Asteroids spawn on the right and move left, spinning continuously
- Perfect your jump timing — asteroids get faster as you score more
- Score increases by 1 point each time you clear an asteroid
- Game ends immediately on collision
- Difficulty increases every 5 points (faster asteroids, more frequent spawns)

---

## 📁 Project Structure

```
├── index.html          # Game structure — HTML markup with score display & game-over screen
├── style.css           # Game styling — responsive layout, animations, space theme
├── game.js             # Game logic — physics engine, collision detection, scoring, difficulty scaling
├── QA_TEST_PLAN.md     # Testing guide — 100+ test cases for QA and playtesting
└── README.md           # Documentation (this file)
```

### File Descriptions

- **`index.html`** — Contains the game container, character, and game-over modal
- **`style.css`** — Defines the deep space aesthetic with gradient backgrounds, twinkling star animations, and rotating asteroids
- **`game.js`** — Handles gravity physics, keyboard input, obstacle spawning/removal, collision detection, score tracking, and progressive difficulty
- **`QA_TEST_PLAN.md`** — Comprehensive testing checklist with 10 test categories

---

## 🕹️ Controls

- **SPACEBAR** — Jump (hold doesn't auto-repeat; one press = one jump)
- **MOUSE/CLICK** — Restart game after game over

### Tips

- Jump early — don't wait until the last second!
- The game gets faster every 5 points, so stay sharp
- You can only jump when fully grounded (no mid-air double jumps)
- Watch the asteroid spin animation to time your jumps better

---

## 🎨 Features

- 🚀 **Rocket Pilot** — Control your spaceship with responsive keyboard input
- 🪨 **Spinning Asteroids** — Rotating obstacles that accelerate as you progress
- 📊 **Dynamic Scoring** — Real-time score tracking with visual feedback
- ⭐ **Atmospheric Backdrop** — 100 twinkling stars for immersive space ambiance
- 🌌 **Deep Space Aesthetic** — Dark gradient background with glowing UI elements
- ⚡ **Progressive Difficulty** — Automatic scaling based on score performance

---

## 🛠️ Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Fully supported |
| Firefox | Latest | ✅ Fully supported |
| Safari | Latest | ✅ Fully supported |
| Edge | Latest | ✅ Fully supported |
| Opera | Latest | ✅ Fully supported |

**Minimum Requirements:** ES6 JavaScript support, CSS Grid/Flexbox, `requestAnimationFrame` API

---

## 🚀 Deployment & Hosting

### Deploy to GitHub Pages (Free)

1. Push this repo to GitHub
2. Go to **Settings** → **Pages**
3. Select **Main** branch as source
4. Save — your game is now live at `https://yourusername.github.io/effective-disco/`

### Deploy Elsewhere

- **Vercel** — Drag & drop `index.html` to deploy
- **Netlify** — Connect GitHub repo for auto-deploy
- **Any web server** — Just upload the files

---

## 📈 Roadmap & Future Enhancements

### Planned Features (Priority Order)
- [ ] Sound effects (jump, collision, level-up)
- [ ] Local high-score storage (localStorage)
- [ ] Difficulty levels (easy, medium, hard)
- [ ] Mobile touch controls for phones/tablets

### Nice-to-Have Ideas
- Different spaceship skins (unlock with high scores)
- Power-ups (shield, slow-motion, double-points)
- Combo multiplier system for consecutive dodges
- Boss asterioid battles at certain score milestones
- Leaderboard with backend storage
- Two-player mode (competitive)
- Mobile app version (React Native)

---

## 🐛 Known Issues & Limitations

| Issue | Description | Workaround |
|-------|-------------|-----------|
| **No sound** | Game is currently silent | Planned in v2.0 |
| **No mobile controls** | Spacebar required (not touch-friendly) | Use browser keyboard emulator or wait for v2.0 |
| **No data persistence** | High scores reset on page refresh | Planned fix with localStorage |
| **Star performance** | 100 stars may lag on older devices | Game still playable; cosmetic only |

---

## 🧪 Testing & QA

This project includes a comprehensive **[QA Test Plan](QA_TEST_PLAN.md)** with:
- 100+ test cases across 10 categories
- Functional, edge-case, and stress tests
- Browser compatibility checks
- Performance benchmarks
- Accessibility guidelines

**To run tests locally:**
1. Open `index.html` in your browser
2. Refer to [QA_TEST_PLAN.md](QA_TEST_PLAN.md) for detailed testing procedures
3. Report bugs via GitHub Issues

---

## 🤝 Contributing

We welcome contributions! Here's how to help:

1. **Report bugs** — Open a GitHub Issue with steps to reproduce
2. **Suggest features** — Create an Issue with your idea
3. **Submit code** — Fork the repo, make your improvements, and submit a Pull Request
4. **Improvement ideas** — Discuss in Issues before implementing changes

### Development Guidelines
- Keep code vanilla (no frameworks) unless discussed in an Issue
- Test in all browsers before submitting PRs
- Update `README.md` if adding new features
- Reference related Issues in your commit messages

---

## 📝 Changelog

### v1.0.0 (April 10, 2026) — Initial Release
- ✅ Core jumping game with space theme
- ✅ Physics-based gravity and jump mechanics
- ✅ Asteroid spawning with progressive difficulty
- ✅ Collision detection and scoring system
- ✅ Responsive design for desktop browsers
- ✅ Comprehensive QA testing guide
- 🔄 Future: Sound effects, local high-scores, mobile support

---

## 📄 License

MIT License — Feel free to use, modify, and distribute this game. See LICENSE file for details.

---

## 👨‍💻 Credits

Created by the Community Development Team  
Inspired by the [Scratch Jumping Game Tutorial](https://www.youtube.com/watch?v=1jHvXakt1qw) by Zoe (Zinnea)

**GitHub:** [jazhao-ucm/effective-disco](https://github.com/jazhao-ucm/effective-disco)

---

## 📮 Support & Feedback

- Found a bug? → [Open an Issue](https://github.com/jazhao-ucm/effective-disco/issues)
- Have an idea? → [Start a Discussion](https://github.com/jazhao-ucm/effective-disco/discussions)
- Want to contribute? → [Submit a Pull Request](https://github.com/jazhao-ucm/effective-disco/pulls)

---

**Made with 🚀 and passion by the Space Flight Division**