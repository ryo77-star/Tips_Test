const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// キーワードとそれに関連した占い結果のマップ
const keywordFortunes = [
  {
    keywords: ["お金", "収入", "給料", "金運"],
    fortunes: [
      "臨時収入がありそうです。お財布のひもは緩めすぎないように！",
      "今日は節約が功を奏します。買い物は少し我慢して◎",
      "ふとしたきっかけで投資に興味を持つかも。勉強するチャンス！"
    ]
  },
  {
    keywords: ["恋", "恋愛", "好き", "デート"],
    fortunes: [
      "思いがけない出会いがあるかも。今日は人に優しくしてみて。",
      "LINEの返事が来るかもしれません。焦らず、落ち着いて！",
      "意外な人があなたに好意を持っている予感…観察してみて！"
    ]
  },
  {
    keywords: ["仕事", "キャリア", "残業", "転職"],
    fortunes: [
      "今日は意外とサクッと仕事が終わります。集中あるのみ！",
      "上司との関係が良好に。報連相を丁寧にすると◎",
      "転職のヒントは意外とSNSの中にあるかも…？"
    ]
  },
  {
    keywords: ["勉強", "試験", "資格", "TOEIC"],
    fortunes: [
      "勉強のコツが掴めるタイミング。小さな成功体験を大事に！",
      "過去問の中にヒントあり。見返してみよう！",
      "やる気が出ない日は、とにかく机に座るだけでもOK。"
    ]
  },
  {
    keywords: [], // その他、マッチしない場合
    fortunes: [
      "何か新しいことを始めるのに良い日です。",
      "深呼吸して、前向きな気持ちを持ちましょう。",
      "小さな幸せを見逃さないで。日常にヒントがあるかも！"
    ]
  }
];

// 質問に応じて占いを選ぶ関数
function findFortune(question) {
  for (const group of keywordFortunes) {
    for (const keyword of group.keywords) {
      if (question.includes(keyword)) {
        return randomPick(group.fortunes);
      }
    }
  }
  // 該当がなければ「その他」カテゴリ
  return randomPick(keywordFortunes[keywordFortunes.length - 1].fortunes);
}

// ランダムに1つ選ぶ
function randomPick(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// 実行部分
rl.question("未来について知りたいことをどうぞ 👁️‍🗨️: ", (question) => {
  console.log("\n占い中...\n");
  setTimeout(() => {
    const result = findFortune(question);
    console.log(`🔮 あなたの未来: ${result}`);
    rl.close();
  }, 2000);
});