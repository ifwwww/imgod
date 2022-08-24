// hexo.extend.filter.register("theme_inject", function (injects) {
// injects.bodyEnd.raw(
//   "adsense",
//   '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7938665406185448" crossorigin="anonymous"></script>'
// );
// injects.head.raw(
//   "adsense",
//   '<style>ins.adsbygoogle[data-ad-status="unfilled"] { display: none !important; }</style>'
// );
// injects.postLeft.raw('adsense', '<aside class="sidebar d-none d-xl-block" style="margin-right:-1rem;z-index:-1"><ins class="adsbygoogle" style="display:flex;justify-content:center;min-width:160px;max-width:300px;width:100%;height:600px;position:sticky;top:2rem" data-ad-client="ca-pub-7938665406185448" data-ad-slot="6797669373"></ins><script> (adsbygoogle = window.adsbygoogle || []).push({}); </script></aside>');
// injects.postCopyright.raw(
//   "adsense",
//   '<div style="width:100%;display:flex;justify-content:center;margin-bottom:1.5rem"><ins class="adsbygoogle" style="display:flex;justify-content:center;max-width:845px;width:100%;height:90px" data-ad-client="ca-pub-7938665406185448" data-ad-slot="6797669373"></ins><script> (adsbygoogle = window.adsbygoogle || []).push({}); </script></div>'
// );
// });
// 全屏背景的需要导入这些js
const { root: siteRoot = "/" } = hexo.config;
hexo.extend.injector.register("body_begin", `<div id="web_bg"></div>`);
hexo.extend.injector.register(
  "body_end",
  `<script src="${siteRoot}js/backgroundize.js"></script>
  <link defer rel="stylesheet" href="${siteRoot}styles/backgroundize.css" />
  `
);
