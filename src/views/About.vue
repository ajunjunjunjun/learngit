<template>
  <div class="about">
	  <h1>This is an about page</h1>
	  <hr>
	  <router-link to="/about/arg">参数</router-link> |
	  <router-link to="/about/detail">详细信息</router-link>
	  <hr>
	  <router-view></router-view>
  </div>

</template>
