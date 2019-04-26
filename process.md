### websocket实战

启动编写好的服务器：

![1556074617706](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556074617706.png)

先运行服务器，再运行客户端。

![1556202244059](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556202244059.png)

客户端运行结果：

![1556202256723](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556202256723.png)

*具体demo实现过程*

#### demo1：

![1556036331394](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556036331394.png)

连接远程服务器，注意使用的是websocket协议：

![1556036387547](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556036387547.png)

服务器：客户端将消息发送到这个服务器，它又原封不动的将数据返回给客户端，所以取名echo也是很形象了。

**在开始运行自己创建的服务器demo之前，需要安装websocket模块：**

![1556036686847](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556036686847.png)

**根据测试样例，测试环境是否安装成功：**

![1556036789432](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556036789432.png)

将官网的代码复制到本地：

![1556036832240](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556036832240.png)

**代码解析：客户端有消息发送过来：**

![1556036943369](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556036943369.png)

数据放在str里面，sendtxt函数将处理之后的str又发送回去。

![1556037017733](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556037017733.png)

链接关闭时……



#### demo2：要使用自己创建的服务器，将地址改成本地的服务器

![1556037064350](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556037064350.png)

运行编写好的服务器文件，连接成功：

![1556037108240](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556037108240.png)

运行HTML界面，发送消息，在控制台可以看到服务器的信息

但是有点问题，当直接在浏览器关闭网页时，控制台会输出一个错误，导致服务器停止运行：

![1556037199397](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556037199397.png)

根据提示，有个错误事件未处理。

一切问题先找官方文档，毕竟官方吐槽最为致命，官方指导较为准确：

添加处理错误事件的代码：

![1556037346887](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556037346887.png)

命令行重新启动服务器即可：

![1556037395311](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556037395311.png)

#### demo3：

![1556037638738](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556037638738.png)

实现的主要功能，当我们点击按钮的时候，发送数据给server。

![1556037714098](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556037714098.png)

客户端接受到返回的数据时，新建div，将数据展示出来。

![1556037863010](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556037863010.png)

广播，将服务器接收到的信息发送给各个客户端：

![1556038497477](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556038497477.png)

广播函数，获取服务器存在的连接，为每个连接调用广播函数，发出消息。

改造好之后的服务器端代码：

![1556038634889](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556038634889.png)

运行结果：

![1556197546467](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556197546467.png)

![1556197561563](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556197561563.png)

![1556197573274](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556197573274.png)

#### demo4：

建立对象存储数据，对对象的style属性进行设置，区分广播信息：

![1556038877765](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556038877765.png)

连接与关闭状态处理的改动：

![1556038949082](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556038949082.png)

显示函数改造：

![1556039041223](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556039041223.png)

![1556039141576](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556039141576.png)

明确消息发送主体（这里标错文件了，应该是html文件中的代码）：

![1556039226509](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556039226509.png)

**运行结果：**

![1556198632666](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556198632666.png)

![1556198653166](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556198653166.png)



![1556198680774](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556198680774.png)

![1556198699664](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556198699664.png)

#### demo5

**socket.io是实现socket通信的框架**

安装socket.io模块：

![1556039445313](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556039445313.png)

将socket.io.js文件下载到本地：

![1556039485008](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556039485008.png)

开始demo5的编写，拷贝官网的样例代码（第一个文件名标错了）

![1556039781905](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556039781905.png)

![1556039808295](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556039808295.png)



socket.io的优势：

1. 可以直接发送对象；

2. 可以自定义事件。

**复制一份到了demo6：**

![1556039876618](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556039876618.png)

复制文件：

![1556039921579](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556039921579.png)

![1556039960917](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556039960917.png)

引入socket.io.

![1556040012537](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556040012537.png)

引入模块：

![1556040179496](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556040179496.png)



![1556040146699](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556040146699.png)

接在上一个函数内部：![1556040261153](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556040261153.png)

![1556040306332](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556040306332.png)

改造完毕：

![1556040342114](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556040342114.png)

HTML界面的主要改造：

![1556201980726](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556201980726.png)

运行结果：

![1556202156143](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\1556202156143.png)

可以看到使用socket.io框架，在服务器端较大的减少了开发的工作量。

代码仅供参考：

https://github.com/catherinela/simple-project-of-websocket

