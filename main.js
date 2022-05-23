// 最初はストップボタンとリセットボタンをdisableとする。(htmlに記載)
// スタート後はストップボタンをアクティブに、スタートボタンdisableにする。
// ストップボタンを押すとスタートボタンとリセットボタンがアクティブに、ストップボタンをdisableにする。
// リセットボタンを押すとリセットボタンがdisableになる。


let elapsedTime = 0;
let startTime = 0;
let currentTime = 0;
let timerId;


$(".start").click(function () {
  // 押せるボタンの変更
  $(this).prop('disabled', true);
  $(".stop").prop('disabled', false);
  $(".reset").prop('disabled', false);

  // タイマースタート
  startTime = Date.now();
  timerId = setInterval(() => {
    currentTime = Date.now();
    let d = new Date(currentTime - startTime + elapsedTime);

    // 時、分、秒、ミリ秒を取得
    let getHr = d.getUTCHours();
    let getMin = d.getMinutes();
    let getSec = d.getSeconds();
    let getMillisec = Math.floor(d.getMilliseconds() / 100);

    // 取得した値をタイマーに反映
    $(".time").text(`${String(getHr)}: ${String(getMin)}: ${String(getSec)}: ${String(getMillisec)}`)

    //ゼロパディングする場合
    // $(".time").text(`${String(getHr).padStart(2,'0')}:${String(getMin).padStart(2,'0')}:${String(getSec).padStart(2,'0')}:${String(getMillisec)/*.padStart(2,'0')*/}`);
  }, 100)
});

$(".stop").click(function () {
  // 押せるボタンの変更
  $(this).prop('disabled', true);
  $(".start").prop('disabled', false);
  $(".reset").prop('disabled', false);

  // タイマーを一時停止
  clearInterval(timerId);
  elapsedTime += currentTime - startTime
});

$(".reset").click(function () {
  // 押せるボタンの変更
  $(this).prop('disabled', true);
  $(".stop").prop('disabled', true);
  $(".start").prop('disabled', false);

  // タイマーをストップ＆リセット
  clearInterval(timerId);
  elapsedTime = 0
  $(".time").text("0: 0: 0: 0");
});

