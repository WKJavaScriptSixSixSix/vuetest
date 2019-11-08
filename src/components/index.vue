<template>
<div class="index">
    <div class="search">
        <img src="../../images/logo.png" alt="">
        <input type="text" placeholder="搜一搜">
    </div>
    <div class="banner">
        <img src="../../images/banner.jpg" alt="">
    </div>
    <div class="center">
        <div>
            <img src="../../images/page11.png" alt="">
            <p>每日新品</p>
        </div>
        <div>
            <img src="../../images/page12.png" alt="">
            <p>小米众筹</p>
        </div>
        <div>
            <img src="../../images/page13.png" alt="">
            <p>限时抢购</p>
        </div>
        <div>
            <img src="../../images/page14.png" alt="">
            <p>热销榜单</p>
        </div>
        <div>
            <img src="../../images/page15.png" alt="">
            <p>小米自营</p>
        </div>
    </div>
    <div class="list3">
        <div>
            <img src="../../images/goods01.jpg" alt="">
            <p>小米笔记本</p>
        </div>
        <div>
            <img src="../../images/goods01.jpg" alt="">
            <p>小米笔记本</p>
        </div>
        <div>
            <img src="../../images/goods01.jpg" alt="">
            <p>小米笔记本</p>
        </div>
        <div>
            <img src="../../images/goods01.jpg" alt="">
            <p>小米笔记本</p>
        </div>
        <div>
            <img src="../../images/goods01.jpg" alt="">
            <p>小米笔记本</p>
        </div>
        <div>
            <img src="../../images/goods01.jpg" alt="">
            <p>小米笔记本</p>
        </div>
    </div>
    <div class="footer2">
        <div>
            <img src="../../images/page16.png" alt="">
            <p>首页</p>
        </div>
        <div>
            <img src="../../images/page16.png" alt="">
            <p>品味</p>
        </div>
        <div>
            <img src="../../images/page16.png" alt="">
            <p>分类</p>
        </div>
        <div>
            <img src="../../images/page17.png" alt="">
            <p>购物车</p>
        </div>
        <router-link to="/mymsg" tag="div" active-class="index_active">
            <img src="../../images/page18.png" alt="">
            <p>个人</p>
        </router-link>
        <!-- <div>
            <img src="../../images/page18.png" alt="">
            <p>个人</p>
        </div> -->
    </div>
</div>
</template>

<style>
* {
    margin:0;
    padding:0;
    box-sizing:border-box;
}
/* 设置跳转时样式 */
.index_active {
    color:red;
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
/* 开始设置最上面的搜索框 */
.search {
    width:100%;
    height:3rem;
    display:flex;
    /* background: red; */
}
.search img {
    width:3.33rem;
    height:3.2rem;
}
.search input {
    width:23.9rem;
    height:2.54rem;
    background:#eeeeee;
    border:none;
    margin-top:0.2rem;
}
/* 设置banner样式 */
.banner {
    height:11.3rem;
    /* background:blue; */
}
.banner img {
    width:100%;
    height:11.3rem;
}
/* 设置四个小图标中间 */
.center {
    height:5.125rem;
    /* background:purple; */
    display:flex;
    justify-content:space-between;
}
.center div {
    width:3.875rem;
    height:100%;
    /* display:flex; */
    /* flex-direction:column;
    align-items:center;
    justify-content:center; */
}
.center div img {
    width:3.875rem;
    height:3.75rem;
}
.center div p {
    font-size:0.4rem;
    text-align:center;
}
/* 设置列表页样式 */
.list3 {
    /* background:red; */
    /* flex:1; */
    height:23.8rem;
    overflow:auto;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
}
.list3 div {
    width:49%;
    border:solid 1px #e5e5e5;
    margin-bottom:0.41rem;
}
.list3 div img {
    width:100%;
}
.list3 div p {
    height:2.46rem;
    border-top:1px solid #e5e5e5;
    text-align:center;
    line-height:2.46rem;
    font-size:12px;
}
/* 设置尾部样式 */
.footer2 {
    width:100%;
    height:3.96rem;
    /* background:blue; */
    display:flex;
    justify-content:space-between;
}
.footer2 div {
    width:4.33rem;
    height:100%;
    flex-direction:column;
    display:flex; 
    align-items:center;
     justify-content:center;
}
.footer2 div img {
    width:1.75rem;
    height:2.0rem;
    /* margin:0 auto; */
}
.footer2 div p {
    text-align:center;
}
</style>


