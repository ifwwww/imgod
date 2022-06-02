---
title: hexo博客怎么多台电脑同步更新
abbrlink: 63977
categories:
  - Notes
  - Hexo
tags: Hexo
description: hexo博客怎么多设备同步更新
date: 2022-01-16 23:44:39
sticky: 1
password:
abstract:
message:
---

> 前提条件
> hexo 已经安装,[安装方法](https://imgod.me/posts/39317.html)

此方案用于多设备同步以及备份

#### 旧电脑

##### 创建新分支

这里我们创建一个名为`backup`的分支

![](<hexo博客怎么多台电脑同步更新/update%20(1).png>)

##### 把新分支设为默认分支

> 博客项目存储库设置-分支-修改默认分支即可

![](<hexo博客怎么多台电脑同步更新/update%20(2).png>)

##### 将分支克隆到本地

> 这里注意,尽量不要和原博客文件夹在同一路径,如果像我一样库名称和本地问价夹名称相同会出问题(实在不懂什么意思就把原博客文件夹备份一下,出问题还能救)

![](<hexo博客怎么多台电脑同步更新/update%20(4).png>)

##### 把克隆下来的文件夹内的`.git`文件夹全部复制到博客文件夹

> 如果看不到`.git`文件夹就去 windows 此电脑-查看-隐藏的项目勾选上
> 整个文件夹直接替换掉原博客文件夹下的`.git`文件夹即可

![](<hexo博客怎么多台电脑同步更新/update%20(5).png>)

##### 将文件添加到暂存区

`git add –A`

##### 提交到本地仓库

`git commit -m "backup"`

##### 推送到`backup`分支

`git push origin backup`

#### 新电脑

##### 将分支克隆到本地

`git clone 仓库地址`

##### 安装依赖

`npm install`

#### 所有电脑每次更新

##### 都要执行以下指令

(修改完成后直接点击下面代码块右上角`Copy`全部粘贴到 Git Bash 即可)

```
git pull
git add -A
git commit -m "backup"
git push origin backup
hexo cl
hexo g
hexo d

```

以下为本人自用懒人指令，按需修改

> 未开启 pwa 支持

```
hexo cl
git pull
git add -A
git commit -m "backup"
git push origin backup
hexo d
hexo cl

```

> 已开启 pwa 支持

```
hexo cl
git pull
git add -A
git commit -m "backup"
git push origin backup
hexo g
hexo d
hexo cl

```
