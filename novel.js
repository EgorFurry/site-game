const scenes = {
  start: {
    text: "Вы просыпаетесь в белом пространстве...",
    choices: [
      { text: "Осмотреться", next: "look_around" },
      { text: "Пойти вперёд", next: "go_forward" }
    ]
  },
  look_around: {
    text: "Вокруг туман и летают осколки воспоминаний...",
    choices: [
      { text: "Пойти вперёд", next: "go_forward" }
    ]
  },
  go_forward: {
    text: "Вы видите чёрную дыру. Прикоснуться?",
    choices: [
      { text: "Прикоснуться", next: "memory" }
    ]
  },
  memory: {
    text: "Вас переносит в воспоминание о доме...",
    choices: [
      { text: "Продолжить", next: "end" }
    ]
  },
  end: {
    text: "Конец демо. Спасибо за игру!",
    choices: []
  }
};

let currentScene = "start";
const storyDiv = document.getElementById("story");

function renderScene() {
  const scene = scenes[currentScene];
  storyDiv.innerHTML = `<p>${scene.text}</p>`;
  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => {
      currentScene = choice.next;
      renderScene();
    };
    storyDiv.appendChild(btn);
  });
}

renderScene();
