---
title: ssh key绑定GitHub时提示22端口连接超时
abbrlink: 34120
date: 2022-02-14 00:40:00
categories:
  - Notes
  - Hexo
tags:
  - Hexo
description: 绑定GitHub时提示22端口连接超时
password:
abstract: 有东西被加密了, 请输入密码查看.
message: 您好, 这里需要密码.
---

![](ssh-key绑定GitHub时提示22端口连接超时/ssh.png)

帮朋友调试 Hexo，输入<code>ssh -T git@github.com</code>验证是否成功绑定 GitHub 时，提示<code>ssh: connect to host github.com port 22: Connection timed out</code>

<!-- more -->

#### ~~第一次测试~~

首先我根据下面大佬的案例，在.ssh 文件夹下配置了一个 config 文件，试了下老哥说的修改端口的方案，然后重新配置 git，验证用户名、邮箱，然后失败，依然提示连接 github. com 22 端口:超时

> 以上参考[“ssh:connect to host github.com port 22: Connection timed out“问题的解决](https://blog.csdn.net/qq_38330148/article/details/109371362)

#### ~~第二次测试~~

我怀疑是网络问题，切换了一下网络节点，重新测试，但是由于网络太差，在我这里的节点速度能跑到 6 兆的节点，在朋友那里居然只能跑到 0.3 兆，依然报错，在期间我试图用其他 GitHub 账户来测试，但在登陆时，提示输入验证码时，重新发送了三次都没有收到短信，换账号依然如此，然后放弃，这时候第一条 GitHub 的短信验证才收到，期间差不多过了五分钟，这时候我还没有意识到网络的延迟这么大。

#### 第三次测试 √

这次我怀疑是密钥的问题，我在<code>控制面板\用户帐户\凭据管理器</code>删除了之前绑定的密钥，但这次我没有第一时间测试，我去翻看了一下网络不好怎么访问 GitHub，然后又看到知乎大神修改 host 访问 GitHub，于是死马当活马医，修改了 host 文件,文件路径为

```
C:\Windows\System32\drivers\etc
```

用 VScode 打开 hosts 在后面加上如下内容

```
140.82.114.4 github.com
140.82.114.10 nodeload.github.com
140.82.114.6 api.github.com
140.82.114.10 codeload.github.com
185.199.108.133 raw.github.com
185.199.108.153 training.github.com
185.199.108.153 assets-cdn.github.com
185.199.108.153 documentcloud.github.com
185.199.108.154 help.github.com

# domain: githubstatus.com
185.199.108.153 githubstatus.com

# domain: fastly.net
199.232.69.194 github.global.ssl.fastly.net

# domain: githubusercontent.com
185.199.108.133 raw.githubusercontent.com
185.199.108.154 pkg-containers.githubusercontent.com
185.199.108.133 cloud.githubusercontent.com
185.199.108.133 gist.githubusercontent.com
185.199.108.133 marketplace-screenshots.githubusercontent.com
185.199.108.133 repository-images.githubusercontent.com
185.199.108.133 user-images.githubusercontent.com
185.199.108.133 desktop.githubusercontent.com
```

重新生成密钥，绑定密钥，测试，完事

---

在写这篇文章的时候，我重新梳理了一下过程，实际上原因很简单，就是网络延迟太高，在我过了那么久才收到短信的时候后，就应该想到为什么这么慢，朋友在西部地区，外网延迟高的太离谱，实测不能直接访问 vercel 托管的站点，gitpage 更不敢想象。
