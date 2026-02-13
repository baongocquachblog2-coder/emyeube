const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');

// Danh sách các câu nói khi bấm "No" trong clip
const messages = [
    "Are you sure?",
    "Think one more time?",
    "Wanna regret?",
    "Please say yes...",
    "Don't do this to me :("
];

let messageIndex = 0;
let yesButtonSize = 1; // Kích thước ban đầu (100%)

noBtn.addEventListener('click', () => {
    // 1. Thay đổi chữ của nút No
    if (messageIndex < messages.length) {
        noBtn.innerText = messages[messageIndex];
        messageIndex++;
    } else {
        noBtn.innerText = "Please? :(";
    }

    // 2. Phóng to nút Yes (như clip)
    yesButtonSize += 0.4; // Tăng thêm 40% mỗi lần bấm
    yesBtn.style.transform = `scale(${yesButtonSize})`;

    // 3. Tăng độ ưu tiên để nút Yes không bị che
    yesBtn.style.zIndex = "1000";
});

yesBtn.addEventListener('click', () => {
    // Đổi sang ảnh gấu hôn nhau
    document.getElementById('main-gif').src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp1ZHZ1bnR5bm0xeXF4eXF4eXF4eXF4eXF4eXF4eXF4eXF4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9iZCZjdD1z/v6AFrdfYI4kKzW6L7q/giphy.gif";
    
    // Hiện thông điệp hạnh phúc
    questionSection.classList.add('hidden');
    successSection.classList.remove('hidden');
});

