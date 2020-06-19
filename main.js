const quiz = [
  {
    question: "ゲーム市場、最も売れたゲーム機は次のうちどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション２",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS"
  },{
    question: "日本の初代内閣総理大臣は誰？",
    answers: [
      "伊藤博文",
      "大隈重信",
      "安倍晋三",
      "高橋是清",
    ],
    correct: "伊藤博文"
  },{
    question: "横浜ベイスターズが初めて日本一に輝いた時の監督は？",
    answers: [
      "三浦大輔",
      "ラミレス",
      "中畑清",
      "権藤博",
    ],
    correct: "権藤博"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

const setupQuiz = function(){
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++
  }
}
setupQuiz();

const clickHandler = function(e){
  if (quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解");
    } else {
      window.alert("不正解");
    }

    quizIndex++;

    if(quizIndex < quizLength){
      setupQuiz();
    }else{
      window.alert("終了");
    }
}

let handlerIndex = 0;

while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click",function(e){
    clickHandler(e);
  });
  handlerIndex++
}
