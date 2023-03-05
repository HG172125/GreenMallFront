<template>
  <div>
    <div>
      <UserHeader></UserHeader>
    </div>
    <!--    题目-->
    <div id="divImg">
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="8">
          <div
            style="text-align: center"
            class="grid-content bg-purple-light">
            <div style="font-size: 40px;margin-top: 20px;color: #606266">我的账户</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">1</div>
        </el-col>
      </el-row>
    </div>
    <el-container>
      <el-tabs
        type="border-card" style="height: 500px;width: 60%;margin-left: 20%">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i>个人信息</span>

          <el-tabs tab-position="left" style="height:430px;width:500;background-color: green">
            <el-tab-pane label="个人信息">
              <!--              用户信息展示-->
              <el-descriptions class="margin-top" title="用户基本信息" :column="3" :size="size" border>
                <template slot="extra">
                  <el-button type="primary" size="small">修改</el-button>
                </template>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-user"></i>
                    用户名
                  </template>
                  {{ user.userName }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-mobile-phone"></i>
                    手机号
                  </template>
                  {{ user.phoneNumber }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-location-outline"></i>
                    居住地
                  </template>
                  苏州市
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-tickets"></i>
                    备注
                  </template>
                  <el-tag size="small">学校</el-tag>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-office-building"></i>
                    联系地址
                  </template>
                  江苏省苏州市吴中区吴中大道 1188 号
                </el-descriptions-item>
              </el-descriptions>
            </el-tab-pane>
            <el-tab-pane label="地址管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          </el-tabs>

        </el-tab-pane>
        <el-tab-pane label="消息中心">消息中心</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>

      <!--      用户侧边栏-->
      <!--      <el-tabs  tab-position="top" style="background-color: #FFCC33;height: 500px;width: 100%;margin-left: 20px">-->
      <!--        <el-tab-pane style="background-color: black" label="购物车">-->
      <!--          <div>-->
      <!--            <el-tabs tab-position="left" style="background-color: green;height: 450px">-->
      <!--              <el-tab-pane label="用户管理">用户管理</el-tab-pane>-->
      <!--              <el-tab-pane label="配置管理">配置管理</el-tab-pane>-->
      <!--              <el-tab-pane label="角色管理">角色管理</el-tab-pane>-->
      <!--              <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>-->
      <!--            </el-tabs>-->
      <!--          </div>-->
      <!--        </el-tab-pane>-->
      <!--        <el-tab-pane label="我的订单"><div >-->
      <!--          <el-tabs tab-position="left" style="background-color: green;height: 450px">-->
      <!--            <el-tab-pane label="用户管理">用户管理</el-tab-pane>-->
      <!--            <el-tab-pane label="配置管理">配置管理</el-tab-pane>-->
      <!--            <el-tab-pane label="角色管理">角色管理</el-tab-pane>-->
      <!--            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>-->
      <!--          </el-tabs>-->
      <!--        </div></el-tab-pane>-->
      <!--        <el-tab-pane label="个人信息"><div >-->
      <!--          <el-tabs tab-position="left" style="background-color: green;height: 450px">-->
      <!--            <el-tab-pane label="用户管理">用户管理</el-tab-pane>-->
      <!--            <el-tab-pane label="配置管理">配置管理</el-tab-pane>-->
      <!--            <el-tab-pane label="角色管理">角色管理</el-tab-pane>-->
      <!--            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>-->
      <!--          </el-tabs>-->
      <!--        </div></el-tab-pane>-->
      <!--        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>-->
      <!--      </el-tabs>-->

    </el-container>
  </div>
</template>

<script>
//引入UserHeade
import UserHeader from "./UserHeader";

export default {
  name: "UserSet",
  components: {
    UserHeader,
  },
  data() {
    return {
      //  用户基本信息
      user: {
        userName: 'null',
        phoneNumber: 'null',
      }

    }
  },
  methods: {}

}
</script>

<style scoped>
#divImg {
  background: url("../../assets/homeImgs/bg1.jpg") center;
  height: 100px;
  width: 100%;
  align-content: center;
  color: Transparent;
}

</style>
