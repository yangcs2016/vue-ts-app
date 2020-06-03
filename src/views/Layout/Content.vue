<template>
  <el-container class="layout-content">
      <!-- 左侧菜单 -->
      <el-aside width="200px">
          <slot name="left"></slot>
      </el-aside>
      <!-- 右侧页面 -->
      <el-main>
          <!-- 面包屑 -->
            <div class="top">
                <i class="fa fa-reorder"></i>
                <el-breadcrumb class="breadcrumb" separator="/">
                    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
          <!-- 主页面内容 -->
          <div class="content">
              <slot name="content"></slot>
          </div>
      </el-main>
  </el-container>
</template>

<script>
import {Component,Vue} from 'vue-property-decorator'
@Component({
    components:{}
})
export default class Content extends Vue{

}
</script>

<style>

</style>