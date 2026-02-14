const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const question = document.getElementById('question');
const mainGif = document.getElementById('main-gif');

let noCount = 0;

// "No" दबाने पर होने वाले बदलाव
const messages = [
    "Are you sure? 😡",
    "Think again! 😭",
    "Please... 🥺",
    "Don't do this to me",
    "I'm gonna cry...",
    "See this! 🔫"
];

const gifs = [
    "https://media.tenor.com/97S240P7fX0AAAAi/peach-goma.gif", // Angry
    "https://media.tenor.com/9X-tP0XJp3sAAAAi/sad-mochi.gif",  // Crying
    "https://media.tenor.com/An93sL3_P8gAAAAi/mochi-peach.gif", // Gun cat/funny
];

noBtn.addEventListener('click', () => {
    // 1. टेक्स्ट बदलो
    if (noCount < messages.length) {
        question.innerText = messages[noCount];
    }
    
    // 2. GIF बदलो (सिर्फ कुछ स्टेप्स पर)
    if (noCount === 0) mainGif.src = gifs[0];
    if (noCount === 1) mainGif.src = gifs[1];
    if (noCount === 5) mainGif.src = "https://media.tenor.com/yS7hG7S-YmQAAAAi/cat-gun.gif";

    // 3. Yes बटन को बड़ा करो
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize * 1.5) + "px";
    yesBtn.style.padding = (currentSize * 1) + "px " + (currentSize * 2) + "px";

    // 4. No बटन को छोटा करो
    const currentNoSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    if(currentNoSize > 5) {
        noBtn.style.fontSize = (currentNoSize * 0.8) + "px";
    }

    noCount++;
});

// "Yes" दबाने पर फाइनल पेज
yesBtn.addEventListener('click', () => {
    document.getElementById('content').innerHTML = `
        <img src="https://media.tenor.com/gU_669yS8Y8AAAAi/mochi-peach.gif" alt="Success">
        <h1>Happy Valentine Day Baby! 💍</h1>
        <p>Every second with you is a celebration...</p>
        <button id="yes-btn" onclick="location.reload()">SEE MY GIFTS →</button>
    `;
});

