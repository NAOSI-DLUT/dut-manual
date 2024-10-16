---
title: 校园网络
---

## 校园网

### 开发区校区校园网

[开发区校区上网登录过程指引说明](https://eda.dlut.edu.cn/info/1592/43102.htm)

关于校园网：宿舍每个人有一个网口，学校里也有全覆盖的 WIFI。价格方面，校园网每个月 20 元 150GB 流量，通过大工学生系统登陆使用，网络质量尚可，只不过速度一般 （IPv4 限速 100 兆，IPv6 有线连接下理论速度为千兆，实际上由于信号衰减等最多大概在五六百兆左右） 。另外实验室、创中的 WIFI 不限量。或者去 C206 机房也能蹭免费网络。

PS：在每年的大型考试期间 (比如高考中考)，由于校区北邻职业中专南邻开发区一中，信号屏蔽会非常到位，一般这会儿就不得不用校园网了，手机卡流量贼不好使。

### 主校区校园网

[学生上网服务使用方法](https://its.dlut.edu.cn/index/jsfw/fwzn/xywf/xsswfw.htm)

### WebVPN

[大连理工大学WebVPN系统](https://webvpn.dlut.edu.cn/login)

### IPv6 免流

[校园网ipv6免流](https://bing.com/search?q=%E6%A0%A1%E5%9B%AD%E7%BD%91ipv6%E5%85%8D%E6%B5%81)

## 校园卡

校园卡是各大运营商提供的一种带学生优惠套餐的 SIM 卡，和大连理工大学**没有任何关系**，无法直接使用大连理工大学校内网络资源且不受校园网管控。说白了就是流量卡（甚至还不如流量卡，因为有校园基站的限制）。

## DNS

## NTP（授时服务器）

不知道为什么，大连理工大学校园网阻断了外部的 IPv4 NTP 流量，且大工自己的 NTP 服务器（time.dlut.edu.cn）无论 v4 还是 v6 同步时间都是正常的。如要使用外部 NTP 服务器，需要有 IPv6 网络连接。

修改 Windows 默认授时服务器的命令：

```
w32tm /config /manualpeerlist:"time.dlut.edu.cn" /syncfromflags:manual /reliable:yes /update
```
修改后还需重启 Windows 时间服务。