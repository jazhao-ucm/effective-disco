// Game Variables
const gameArea = document.getElementById('gameArea');
const character = document.getElementById('character');
const scoreDisplay = document.getElementById('score');
const gameOverScreen = document.getElementById('gameOverScreen');
const finalScoreDisplay = document.getElementById('finalScore');

let score = 0;
let gameActive = true;
let isJumping = false;

// Physics
let characterY = 30;
let velocityY = 0;
const gravity = 0.6;
const jumpPower = -15;
const groundLevel = 30;

// Game state
let obstacles = [];
let obstacleSpeed = 3;
let spawnRate = 0.015; // Spawn chance per frame

// Get game area dimensions
function getGameDimensions() {
    return {
        width: gameArea.offsetWidth,
        height: gameArea.offsetHeight
    };
}

// Jump handler
function jump() {
    if (!isJumping && gameActive) {
        velocityY = jumpPower;
        isJumping = true;
    }
}

// Keyboard input
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && gameActive) {
        e.preventDefault();
        jump();
    }
});

// Click to restart
gameArea.addEventListener('click', () => {
    if (!gameActive) {
        resetGame();
    }
});

gameOverScreen.addEventListener('click', () => {
    resetGame();
});

// Update character position
function updateCharacter() {
    velocityY += gravity;
    characterY += velocityY;

    // Ground collision
    if (characterY >= groundLevel) {
        characterY = groundLevel;
        velocityY = 0;
        isJumping = false;
    }

    character.style.bottom = characterY + '%';
}

// Spawn obstacle
function spawnObstacle() {
    if (Math.random() < spawnRate && gameActive) {
        const obstacle = document.createElement('div');
        obstacle.className = 'obstacle';
        obstacle.textContent = '�';
        
        const dims = getGameDimensions();
        obstacle.style.bottom = groundLevel + '%';
        
        gameArea.appendChild(obstacle);

        obstacles.push({
            element: obstacle,
            x: dims.width,
            passed: false
        });
    }
}

// Update obstacles
function updateObstacles() {
    const dims = getGameDimensions();
    const characterWidth = 30; // Approximate emoji width in pixels
    const characterPixelsX = (50 - 50) * (dims.width / 100); // Center position
    const characterPixelsBottom = groundLevel * (dims.height / 100);

    obstacles = obstacles.filter((obs) => {
        obs.x -= obstacleSpeed;
        obs.element.style.left = obs.x + 'px';

        // Check if obstacle passed center
        if (!obs.passed && obs.x < dims.width / 2 - 100) {
            obs.passed = true;
            score++;
            scoreDisplay.textContent = score;
            
            // Increase difficulty every 5 obstacles
            if (score % 5 === 0) {
                obstacleSpeed += 0.5;
                spawnRate += 0.003;
            }
        }

        // Check collision
        if (checkCollision(obs)) {
            endGame();
        }

        // Remove obstacle if off screen
        if (obs.x < -50) {
            obs.element.remove();
            return false;
        }

        return true;
    });
}

// Collision detection
function checkCollision(obstacle) {
    if (!gameActive) return false;

    const dims = getGameDimensions();
    
    // Character bounds
    const charLeft = (50 - 0.5) * (dims.width / 100);
    const charRight = charLeft + (dims.width * 0.08);
    const charTop = (100 - characterY - 5) * (dims.height / 100);
    const charBottom = (100 - characterY + 5) * (dims.height / 100);

    // Obstacle bounds
    const obsLeft = obstacle.x;
    const obsRight = obstacle.x + (dims.width * 0.06);
    const obsTop = (100 - groundLevel - 5) * (dims.height / 100);
    const obsBottom = (100 - groundLevel + 5) * (dims.height / 100);

    // AABB collision
    return charRight > obsLeft &&
           charLeft < obsRight &&
           charBottom > obsTop &&
           charTop < obsBottom;
}

// End game
function endGame() {
    gameActive = false;
    finalScoreDisplay.textContent = score;
    gameOverScreen.classList.remove('hidden');
}

// Reset game
function resetGame() {
    score = 0;
    scoreDisplay.textContent = score;
    characterY = groundLevel;
    velocityY = 0;
    isJumping = false;
    obstacleSpeed = 3;
    spawnRate = 0.015;
    gameActive = true;
    gameOverScreen.classList.add('hidden');

    // Clear obstacles
    obstacles.forEach((obs) => obs.element.remove());
    obstacles = [];
}

// Main game loop
function gameLoop() {
    if (gameActive) {
        updateCharacter();
        spawnObstacle();
        updateObstacles();
    }

    requestAnimationFrame(gameLoop);
}

// Generate random stars
function generateStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Generate stars on load
generateStars();

// Start the game
gameLoop();
