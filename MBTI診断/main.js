const q1 = document.querySelector('input[name="q1"]:checked');
const q2 = document.querySelector('input[name="q2"]:checked');
const q3 = document.querySelector('input[name="q3"]:checked');
const q4 = document.querySelector('input[name="q4"]:checked');

if (!q1 || !q2 || !q3 || !q4) {
  console.log("未回答の質問があります");
} else {
  const type = q1.value + q2.value + q3.value + q4.value;
  console.log("診断タイプ:", type);
}
