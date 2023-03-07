<template>
  <div>
    <el-container>
      <div id="bg">
        <div style="font-size: 40px;margin-top: 20px;color: #606266;margin-left: 45%">{{ title }}</div>

        <div style="margin-left:18%;height: 700px;width: 1200px;margin-top: 40px">

          <el-carousel
            style="height: 800px"
            indicator-position="outside">
            <el-carousel-item
              style="height: 700px"
              v-for="item in imgs" :key="item.id">
              <el-image
                style="height: 100%"
                fit="fit"
                :src="item.src">

              </el-image>
              <p
                style="width: 400px;position: absolute;top: 100px; left: 100px;border-radius:4px;font-size: 25px;line-height: 50px">
                {{ item.name }}
              </p>

            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </el-container>
    <!--    轮播图实现-->


  </div>
</template>

<script>


export default {
  name: "About",
  data() {
    return {
      title: '关于我们',
      imgs: [
        {
          name: '疫情冲击对中国经济社会产生了极大影响，乡村经济发展也受到影响，农产品供应链短期中断.农产品销售问题日益严重,百姓收入降低。在乡村振兴的大背景下，各地大力发展互联网+，解决土地农产品销路，提高百姓收入，让有需求的人买到实惠农产品，基于此设计出基于Java的绿色助农销售系统平台。',
          src: require('../assets/homeImgs/slider7.jpg')
        },
        {
          name: '疫情冲击对中国经济社会产生了极大影响，乡村经济发展也受到影响，农产品供应链短期中断.农产品销售问题日益严重,百姓收入降低。在乡村振兴的大背景下，各地大力发展互联网+，解决土地农产品销路，提高百姓收入，让有需求的人买到实惠农产品，基于此设计出基于Java的绿色助农销售系统平台。',
          src: require('../assets/homeImgs/slider8.jpg')
        },
      ]
    }

  }
}
</script>

<style scoped>
#bg {
  background: url('../assets/homeImgs/bg1.jpg') center;
  height: 100px;
  width: 100%;
  align-content: center;
}
</style>
