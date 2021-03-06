auto.waitFor();

// 使用Server酱发送任务完成通知
function send(token) {
  const url = "https://sctapi.ftqq.com/" + token + ".send";
  const title = "Hamibot-勇士食堂";
  const date = new Date();
  const desp = date + "\n自动做饭已经完成";
  http.post(url, {
    "text": title,
    "desp": desp,
  });
}

// 1920x1080分辨率自动做饭
function cook(opts) {
  // 启动应用
  app.launch("com.tapas.heroesrestaurant");
  // 应用冷启动时可能较慢，等待10s
  sleep(10000);
  // 点击 Menu
  click(77, 961);
  sleep(2000);
  // 点击 快速制作
  click(1380, 165);
  sleep(1000);
  // 是否勾选 按照固定比例制作
  if ( opts.indexOf("fixedRatio") > -1 ) {
    click(1198, 616);
  }
  // 是否勾选 使用追加动力
  if ( opts.indexOf("morePower") > -1 ) {
    // 游戏默认勾选了 使用追加动力，所以此处不再点击
  } else {
    // 点击勾选 使用追加动力
    click(1192, 679);
  }
  // 滑动选择全部动力
  swipe(756, 550, 1147, 549, 500);
  sleep(500);
  // 点击 快速制作
  click(891, 780)
  sleep(1000);
  // 点击 
  click(890, 780);
  sleep(500);
  // 点击
  click(900, 800);
  sleep(500);
  // 点击x，关闭 Menu
  click(1588, 161);
  sleep(1000);
  console.log("自动做饭完成");

  if ( opts.indexOf("autoFusion") > -1 ) {
    // 点击 自动召唤服装家具
    click(1737,153);
    sleep(500);
    // 点击
    click(1384,964);
    sleep(500);
    // 点击画面，打开宝箱
    click(960,560);
    sleep(1000);
    // 点击获取服装、家具
    click(1000,550);
    sleep(500);
    // 点击获取星星
    click(950, 670);
    sleep(500);
    // 关闭召唤服装、家具页面
    click(1565,167);
    console.log("自动【召唤服装.家具】完成.");
  }

  // 返回桌面
  home();
}

function start() {
  console.log("开始任务");
  setScreenMetrics(1080,1920);

  const { serverToken, opts } = hamibot.env;
  // const deviceHeight = device.height;
  // const deviceWidth = device.width;

  cook(opts);

  // if (deviceHeight == 1920 && deviceWidth == 1080) {
  //   console.log("设备分辨率为1920x1080");
    
  // } else {
  //   console.log("没有发现对应分辨率脚本，执行完成");
  // }

  if (serverToken == "" || serverToken == undefined || serverToken == null) {
    console.log("没有检测到Server酱token, 不推送消息");
  } else {
    send(serverToken);
  }

  console.log("任务完成");
}
start();