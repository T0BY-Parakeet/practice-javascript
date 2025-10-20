// MBTI風 性格診断（質問未選択チェック付き）
// 各質問は 4つの指標のどれかに +1（左）か -1（右）を足す形。
// 指標: EI, SN, TF, JP
// 最終的に各指標で正負を見て4文字タイプを作る。

const questions = [
  {q:"パーティーでは人と話す方が好きだ", axis:"EI", a:"はい（話す）", b:"いいえ（落ち着く）"},
  {q:"新しいアイディアや可能性にワクワクする", axis:"SN", a:"そう思う", b:"事実や現実を重視する"},
  {q:"決断は論理や理屈で下すことが多い", axis:"TF", a:"はい（論理）", b:"いいえ（感情）"},
  {q:"予定は整理しておく方が安心する", axis:"JP", a:"整理する", b:"柔軟に対応する"},
  {q:"初対面でも比較的に打ち解けやすい", axis:"EI", a:"はい", b:"いいえ"},
  {q:"物事を抽象的に考えるのが得意だ", axis:"SN", a:"抽象的", b:"具体的"},
  {q:"人の気持ちを考えて行動する方だ", axis:"TF", a:"感情重視", b:"論理的に考える"},
  {q:"計画があった方が効率よく動ける", axis:"JP", a:"計画派", b:"行き当たりばったり"},
  {q:"グループでアイデアを出し合うのが好き", axis:"EI", a:"好き", b:"苦手"},
  {q:"理論やパターンを見つけるのが好き", axis:"SN", a:"そう", b:"あまり"},
  {q:"公平さや客観性を大切にする", axis:"TF", a:"そう", b:"優しさ重視"},
  {q:"期限に合わせてきっちり仕上げるのが得意", axis:"JP", a:"得意", b:"苦手"},
  {q:"エネルギーは人と会うことで回復する", axis:"EI", a:"そう", b:"一人で回復する"},
  {q:"未来の可能性に目を向ける方だ", axis:"SN", a:"未来派", b:"現実派"},
  {q:"議論では事実を重視する傾向がある", axis:"TF", a:"はい", b:"時に感情を優先"},
  {q:"物事を区切って終わらせるのが好き", axis:"JP", a:"好き", b:"延長しがち"},
  {q:"初めてのことにワクワクする", axis:"EI", a:"ワクワク", b:"慎重になる"},
  {q:"詳細や手順を正確に覚えるのが得意", axis:"SN", a:"得意（具体）", b:"大枠で把握（抽象）"},
  {q:"人を思いやる判断を優先することが多い", axis:"TF", a:"そう", b:"状況次第"},
  {q:"予定が変わっても柔軟に対応できる", axis:"JP", a:"できる", b:"苦手"}
];

const typeDescriptions = {
  "INTJ":"分析的で戦略的。計画を立てて目標に向かうタイプ。",
  "INTP":"理論的で好奇心旺盛。概念やアイディアを追求する。",
  "ENTJ":"リーダーシップがあり目標志向。組織を導くのが得意。",
  "ENTP":"機転が利き新しいアイデアを生む。議論を楽しむ。",
  "INFJ":"深い洞察力と共感性。人の成長を支える。",
  "INFP":"価値観を大切にする理想主義者。創造的で内省的。",
  "ENFJ":"人を励ますことが得意。協調性が高くまとめ役。",
  "ENFP":"情熱的で自由を好む。可能性を見つけるのが上手。",
  "ISTJ":"責任感が強く現実的。ルールを守って着実に進める。",
  "ISFJ":"人に寄り添う世話焼きタイプ。細やかな気配りが得意。",
  "ESTJ":"実行力があり組織を回すのが得意。現実志向。",
  "ESFJ":"社交的で協力的。周囲の調和を大切にする。",
  "ISTP":"実践的で臨機応変。手を動かして学ぶタイプ。",
  "ISFP":"感受性が豊かで自由を重んじる。美的センスがある。",
  "ESTP":"行動的で現場力がある。冒険心があり決断が早い。",
  "ESFP":"社交的で楽しいことが好き。場を盛り上げるムードメーカー。"
};

let index = 0;
let answers = Array(questions.length).fill(null);

function initScores(){ return {EI:0,SN:0,TF:0,JP:0}; }

function renderQuestion(i){
  const qArea = document.getElementById("question-area");
  const q = questions[i];
  qArea.innerHTML = `
    <div class="q-index">質問 ${i+1} / ${questions.length}</div>
    <div class="q-text">${q.q}</div>
    <div class="options">
      <button class="option-btn" data-choice="A">${q.a}</button>
      <button class="option-btn" data-choice="B">${q.b}</button>
    </div>
    <div id="warning" style="color:red;margin-top:8px;display:none;">選択してください</div>
  `;

  const btns = qArea.querySelectorAll(".option-btn");
  btns.forEach(b=>{
    b.addEventListener("click", ()=> {
      qArea.querySelectorAll(".option-btn").forEach(x=>x.classList.remove("active"));
      b.classList.add("active");
      answers[i] = b.dataset.choice;
      document.getElementById("warning").style.display = "none";
    });
  });

  if(answers[i]){
    const sel = qArea.querySelector(`.option-btn[data-choice="${answers[i]}"]`);
    if(sel) sel.classList.add("active");
  }
}

function showQuiz(){
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
  renderQuestion(index);
  updateNav();
}

function updateNav(){
  document.getElementById("btn-prev").style.display = index===0 ? "none":"inline-block";
  document.getElementById("btn-next").textContent = index === questions.length-1 ? "診断する ▶":"次へ ▶";
}

function calcResult(){
  const scores = initScores();
  for(let i=0;i<questions.length;i++){
    const ans = answers[i] || "A";
    const q = questions[i];
    const delta = ans === "A" ? 1 : -1;
    scores[q.axis] += delta;
  }
  const EI = scores.EI >= 0 ? "E":"I";
  const SN = scores.SN >= 0 ? "N":"S";
  const TF = scores.TF >= 0 ? "T":"F";
  const JP = scores.JP >= 0 ? "J":"P";
  return {type: `${EI}${SN}${TF}${JP}`, scores};
}

function showResult(){
  const r = calcResult();
  document.getElementById("type").textContent = r.type;
  document.getElementById("type-desc").textContent = typeDescriptions[r.type] || "特徴情報がありません。";
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  const shareText = encodeURIComponent(`私のMBTI風タイプ: ${r.type} — ${typeDescriptions[r.type] || ""}`);
  document.getElementById("share-link").href = `https://twitter.com/intent/tweet?text=${shareText}`;
}

// 「次へ」ボタン押下
document.getElementById("btn-next").addEventListener("click", ()=>{
  if(!answers[index]){
    document.getElementById("warning").style.display = "block";
    return;
  }

  if(index < questions.length-1){
    index++;
    renderQuestion(index);
    updateNav();
  } else {
    showResult();
  }
});

document.getElementById("btn-prev").addEventListener("click", ()=>{
  if(index>0){ index--; renderQuestion(index); updateNav(); }
});

document.getElementById("btn-restart").addEventListener("click", ()=>{
  index = 0;
  answers = Array(questions.length).fill(null);
  showQuiz();
});

showQuiz();
