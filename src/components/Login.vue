<template>
   <div class="login">
        <div class="toplogo">
            <div class="box">
                <img src="../../images/logo.png" alt="">
            </div>
            <p>小米账号登录</p>
        </div>
        <div class="input">
            <input type="password" placeholder="+86>手机号码">
            <input type="password" placeholder="短信验证码">
            <input type="button" value="立即登录/注册">
            <input type="button" value="用户名密码登录">
        </div>
        <div class="alipay">
            <p>其他方式登录</p>
        <div class="box1">
            <img src="../../images/alipay.png" alt="">
        </div>
        </div>
        <div class="footer">
            <p>简体|繁体|English|常见问题|隐私政策</p>
        </div>
   </div>
</template>
<style>
    /* 基础样式设置 */
* {
    margin:0;
    padding:0;
    box-sizing:border-box;
}
ul,li {
    list-style:none;
}
a {
    text-decoration: none;
}

html,body {
    height:100%;
}
/* 基础样式上设置结束 */
/* 设置基础font-size值,响应式 */
@media all and (max-width:320px) {
    html {
        font-size:12px;
    }
}
@media all and (min-width:321px)and (max-width:375px){
    html {
        font-size:14px;
    }
}
@media all  and (min-width:376px) {
    html {
        font-size:16px;
    }
}
/* 正式样式设置 */

 .toplogo {
    height:10rem;
    width:100%;
 }
 .box {
     width:4.91rem;
     height:4.5rem;
     margin:0 auto;
 }
 .box img {
     width:100%;
     height:100%;
 }
 .toplogo p  {
     color:black;
     margin-top:1.25rem;
     height:1.75rem;
     line-height:1.75rem;
     text-align:center;
     font-size:14px;
     font-weight:bold;
 }
 .input input {
     display:block;
     margin-bottom:2.16rem;
     height:3.67rem;
     width:100%;
 }
 .input input:nth-child(1),.input input:nth-child(2){
     border:none;
     border-bottom:1px black solid;
     font-size:14px;
     font-weight:bolder;
     margin-bottom:2rem;
 }
 .input input:nth-child(3),.input input:nth-child(4){
     background-color:#ff6700;
     font-size:14px;
     font-weight:bolder;
     line-height:3.67rem;
     text-align:center;
     border:none;
     border-radius:4px;
 }
 .input input:nth-child(4){
     margin-bottom:0;
 }
 /* 设置倒数第二下面的样式 */
 .alipay {
     margin:4rem auto;
     margin-bottom:0;
     height:5rem;
     width:100%;
     /* background-color:red; */
 }
 .alipay p {
     text-align:center;
 }
 .box1 {
    width:11.9rem;
    height:3.9rem;
    margin:0 auto;
 }
 .alipay img {
     width:11.9rem;
     height:3.9rem;
 }
 .footer {
     margin-top:5.25rem;
 }
 .footer p {
     text-align:center;
 }

</style>