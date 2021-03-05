//auto.waitFor();

function send(token) {
    const url = "https://sctapi.ftqq.com/" + token + ".send";
    const title = "Hamibot-勇士食堂";
    const date = new Date();
    const desp = date + "\n 勇士食堂自动做饭已经完成";
    http.post(url, {
      "text": title,
      "desp": desp,
    });
  }
  
  function cookie1920x1080(ration, power) {
      // 启动应用
      app.launch("com.tapas.heroesrestaurant");
      sleep(10000);
      // 点击 Menu
      click(77,1024);
      sleep(2000);
      // 点击 快速制作
      click(1380,165);
      sleep(1000);
    // 是否勾选 按照固定比例制作
    if (ration === "fixedRatio") {
        click(1198,616);
    }
    // 是否勾选 使用追加动力
    if (power === "morePower") {
      click(1192,679);
    }
      // 滑动选择全部动力
      swipe(756,550,1147,549,500);
      sleep(500);
      // 点击 快速制作
      click(891,780)
      sleep(1000);
      // 点击 
      click(890,780);
      sleep(500);
      // 点击
      click(900,800);
      sleep(500);
      // 点击x，关闭 Menu
      click(1588,161);
    sleep(1000);
      // 返回桌面
      home(); 
  }
  
  function start() {
    console.log("开始任务");
  
      const { serverToken, opts } = hamibot.env;
      const deviceHeight = device.height;
      const deviceWidth = device.width;
    
      if ( deviceHeight == 1920 && deviceWidth == 1080 ) {
            console.log("设备分辨率为1920x1080");
            cookie1920x1080(opts[0], opts[1]);
      } else {
      console.log("没有发现对应分辨率脚本，执行完成");
    }
    
    if ( serverToken == "" || serverToken == undefined || serverToken == null ) {
      console.log("没有检测到Server酱token, 不推送消息");
    } else {
      send(serverToken);
    }
    
    console.log("任务完成");
  }
  start();