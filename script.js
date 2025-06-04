
const scenes = [
  {
    background: "images/bg_lightmist.jpg",
    text: [
      "…",
      "Я опять здесь. Белый туман, пустота. Ничего не понятно…"
    ]
  },
  {
    background: "images/bg_room.jpg",
    text: [
      "Это мой дом? Похоже… Но всё размыто, будто это сон.",
      "Виктор… где ты?"
    ]
  },
  {
    background: "images/bg_kitchen.jpg",
    text: [
      "На кухне пусто. Но это ведь должно быть воспоминание?",
      "Почему всё кажется таким далёким?.."
    ]
  },
  {
    background: "images/bg_dark.jpg",
    text: [
      "Что это? Шар? Он притягивает меня…",
      "Мне нужно дотронуться…"
    ]
  },
  {
    background: "images/bg_flashback.jpg",
    text: [
      "Лейза сидит за компьютером.",
      "Виктор: Хей, Лейз, я пришёл с работы. Как дела?",
      "Лейза: Приветик… Руки опускаются."
    ]
  }
];

let currentScene = 0;
let currentTextIndex = 0;

const background = document.getElementById("background");
const textBox = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");

function showTextWithEffect(text) {
  textBox.innerHTML = "";
  let index = 0;
  const interval = setInterval(() => {
    textBox.innerHTML += text[index];
    index++;
    if (index >= text.length) {
      clearInterval(interval);
    }
  }, 25);
}

const prevBtn = document.getElementById("prevBtn");

prevBtn.addEventListener("click", () => {
  if (isTyping) return;

  if (currentTextIndex > 0) {
    currentTextIndex--;
  } else if (currentScene > 0) {
    currentScene--;
    currentTextIndex = scenes[currentScene].text.length - 1;
  }
  showCurrentScene();
});


function showCurrentScene() {
  const scene = scenes[currentScene];
  background.style.backgroundImage = `url('${scene.background}')`;
  showTextWithEffect(scene.text[currentTextIndex]);
}

nextBtn.addEventListener("click", () => {
  const scene = scenes[currentScene];
  if (currentTextIndex < scene.text.length - 1) {
    currentTextIndex++;
  } else {
    currentScene++;
    currentTextIndex = 0;
    if (currentScene >= scenes.length) {
      currentScene = scenes.length - 1;
    }
  }
  showCurrentScene();
});

// Запуск начальной сцены
window.onload = () => {
  showCurrentScene();
};
