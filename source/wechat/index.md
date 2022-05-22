---
title: wechat
date: 2022-05-22 16:46:46
---

  <style>
    .pic {
      text-align: center;
    }
    span.text {
      font-size: 30px;
    }
    p {
      font-size: 20px;
    }
  </style>
  <script type="text/javascript"
    src="https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/qrious/4.0.2/qrious.min.js"></script>
  <script>
    window.onload = function () {
      setInterval(function () {
        fnDate();
      }, 1000);
    };

    function fnDate() {
      var oDiv = document.getElementById("time");
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth();
      var data = date.getDate();
      var hours = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      var time =
        year +
        "-" +
        fnW(month + 1) +
        "-" +
        fnW(data) +
        " " +
        fnW(hours) +
        ":" +
        fnW(minute) +
        ":" +
        fnW(second);
      oDiv.innerHTML = time;
    }
    function fnW(str) {
      var num;
      str > 10 ? (num = str) : (num = "0" + str);
      return num;
    }
  </script>
</head>
<body class="pic">
  <div class="bg">
    <span class="text">健康码</span>
    <div id="time"></div>
    <img id="qr" />
    <p class:"text">检测结果:没毛病</p>
    <p class:"text">检测机构:某某医院</p>
    <p class:"text">禁止使用支付宝以及微信扫码</p>
  </div>
  <script>
    var qr = new QRious({
      element: document.getElementById("qr"),
      size: 300,
      background: "rgba(0,0,0,0)",
      foreground: "green",
      level: "H",
      value:
        "vmess://eyJwcyI6IkpNUy01MDU5MTNAYzkzczgwMS5qYW1qYW1zLm5ldDoyODE4NiIsInBvcnQiOiIyODE4NiIsImlkIjoiMzk0NWU0NmItY2UzMy00YWNkLTgyYTctNTdjYjVhMTdiN2Q3IiwiYWlkIjowLCJuZXQiOiJ0Y3AiLCJ0eXBlIjoibm9uZSIsInRscyI6Im5vbmUiLCJzbmkiOiIiLCJhZGQiOiJjOTNzODAxLmphbWphbXMubmV0In0",
    });
  </script>
