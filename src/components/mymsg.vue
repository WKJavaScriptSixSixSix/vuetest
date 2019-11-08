<template>
    <div class="msg">
        <header>
        <img src="../../images/page01.png" alt="">
        <div class="headerin">
            <router-link to="/login">登录</router-link>
            <router-link to="/login">注册</router-link>
            <!-- <a href="">登录</a> -->
            <!-- <a href="">注册</a> -->
        </div>
    </header>
    <div class="top">
        <div class="topleft">我的订单</div>
        <div class="topright">
            <p>全部订单</p>
            <img src="../../images/page10.png" alt="">
        </div>
    </div>
    <div class="topcenter">
        <div>
            <img src="../../images/page02.png" alt="">
            <p>待付款</p>
        </div>
        <div>
            <img src="../../images/page03.png" alt="">
             <p>待收货</p>
        </div>
        <div>
            <img src="../../images/page04.png" alt="">
            <p>待换修</p>
        </div>
    </div>
    <div class="listcenter">
        <li>
            <img class="list1" src="../../images/page05.png" alt="">
            <p>会员中心</p>
            <img class="list2" src="../../images/page10.png" alt="">
        </li>
        <li>
            <img class="list1" src="../../images/page05.png" alt="">
            <p>会员中心</p>
            <img  class="list2" src="../../images/page10.png" alt="">
        </li>
        <li>
            <img class="list1" src="../../images/page05.png" alt="">
            <p>会员中心</p>
            <img class="list2" src="../../images/page10.png" alt="">
        </li>
        <li>
            <img class="list1" src="../../images/page05.png" alt="">
            <p>会员中心</p>
            <img class="list2" src="../../images/page10.png" alt="">
        </li>
        <li>
            <img class="list1" src="../../images/page05.png" alt="">
            <p>会员中心</p>
            <img class="list2" src="../../images/page10.png" alt="">
        </li>
        <li>
            <img class="list1" src="../../images/page05.png" alt="">
            <p>会员中心</p>
            <img class="list2" src="../../images/page10.png" alt="">
        </li>
        <li>
            <img class="list1" src="../../images/page05.png" alt="">
            <p>会员中心</p>
            <img class="list2" src="../../images/page10.png" alt="">
        </li>
    </div>
    <div class="footer1">
        <div>
            <img src="../../images/page06.png" alt="">
            <p>首页</p>
        </div>
        <div>
            <img src="../../images/page07.png" alt="">
            <p>分类</p>
        </div>
        <div>
            <img src="../../images/page08.png" alt="">
            <p>购物车</p>
        </div>
        <div>
            <img src="../../images/page09.png" alt="">
            <p>我的</p>
        </div>
    </div>
    </div>
</template>
<style>
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
/* 将header等盒子设置为垂直方向上的弹性盒子 */
body {
    display:flex;
    flex-direction: column;
}
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
header {
    height:8.33rem;
    width:100%;
    background:#f37d0f;
}
header img {
    width:5.66rem;
    height:5.33rem;
    margin-top:1.75rem;
    margin-left:1.75rem;
}
.headerin {
    width:6.58rem;
    height:4rem;
    margin-top:-4.1rem;
    margin-left:8rem;
}
.headerin a {
    font-size:1rem;
    color:white;
    font-weight:bold;
}
/* 设置top样式 */
.top {
    width:100%;
    height:3.91rem;
    /* background:red; */
    border-bottom:solid 0.125rem #f5f5f5;
}
.topleft {
    float:left;
    margin-top:1.41rem;
    margin-left:1.41rem;
}
.topright {
    float:right;
    /* margin-top:1.41rem; */
    margin-right:1.41rem;
}
/* .topright img {
    margin-top:1rem;
    margin-right:1rem;
} */
.topright img {
    float:right;
    width:2.08rem;
    height:2.58rem;
    margin-top:0.9rem;
}
.topright p {
    float:left;
    margin-top:1.41rem;
}
/* 设置三个图标用弹性盒子 */

.topcenter {
    display:flex;
    justify-content:space-around;
    height:8.75rem;
    border-bottom:solid 1.25rem #f5f5f5;
    align-items:center;
    /* justify-content:center; */
}
.topcenter div {
    /* background:red; */
    width:7.16rem;
    height:7.16rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
.topcenter div img {
    width:3.5rem;
    height:2.58rem;
}
/* 开始设置列表项 */
.listcenter {
    /* flex:1; */
    height:22.4rem;
    overflow:auto;
}
.listcenter li {
    display:block;
    height:5.25rem;
    display:flex;
    border-bottom:0.75rem solid #f5f5f5;
}
.list1 {
    width:3.25rem;
    height:3.25rem;
    float:left;
    margin-top:1.25rem;
    margin-left:1.25rem;
}
.list2 {
    width:2.08rem;
    height:2.55rem;
    float:left;
    margin-top:1.25rem;
    margin-left:13.25rem;
}
.listcenter li p {
    float:left;
    margin-top:2.15rem;
    margin-left:0.75rem;
}
/* 设置footer */
.footer1 {
    width:100%;
    height:4rem;
    display:flex;
    justify-content:space-around;
}
.footer1 div img {
    width:2.58rem;
    height:2.60rem;
}
.footer1 div {
    display:flex;
    flex-direction: column;
}

</style>