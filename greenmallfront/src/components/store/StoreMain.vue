<template>

  <div id="bg">

    <div>
      <h2 style="margin-top: 10px;margin-left: 48%"> 商家后台</h2>
    </div>
    <div>
      <el-tabs
        style="width: 100%;height: 800px;background: chartreuse"
        tab-position="left">
        <el-tab-pane>
          <span style="font-size: 20px;margin-top: 10px" slot="label"><i class="el-icon-s-home"></i>首页信息</span>
          我的行程
        </el-tab-pane>
        <!--        商品管理-->
        <el-tab-pane style="width: 100%">
          <span style="font-size: 20px" slot="label"><i class="el-icon-s-home"></i>商品管理</span>

          <div style="height:800px;width:100%">
            <el-table
              height="700"
              :data="orderData"
              style="width:100%;height: auto;background-color: #FFCC33">
              <el-table-column
                label="商品名称"
                width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="商品照片"
                width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.src }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="商品价格"
                width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.prices }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="商品标签"
                width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.desc }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="商品描述"
                width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.desc }}</span>
                </template>
              </el-table-column>

              <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="">编辑
                  </el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="">删除
                  </el-button>
                </template>
              </el-table-column>

            </el-table>
            <el-button
              @click="goodsaddDialog"
              style="margin: 5px"
              icon="el-icon-circle-plus-outline"
              type="primary">
              添加商品
            </el-button>

            <!--            添加商品弹窗-->
            <el-dialog
              title="添加信息"
              :visible.sync="dialogVisible1"
              width="30%"
              :before-close="handleClose">
                <span slot="footer" class="dialog-footer">
                   <div style="margin-bottom: 20px">
                      <el-form ref="form" label-width="80px" size="medium" style="border:1px solid #C4E1C5;">
                        <el-form-item label="账号">
                           <el-input v-model="goods.gname" placeholder="用户名"></el-input>
                        </el-form-item>
                      </el-form>
                   </div>

                   <el-button @click="dialogVisible1 = false">取 消</el-button>
                   <el-button type="primary" @click="">登录</el-button>
                   </span>
            </el-dialog>


          </div>

        </el-tab-pane>
        <el-tab-pane style="width: 100%">
          <span style="font-size: 20px" slot="label"><i class="el-icon-s-home"></i>订单管理</span>
          <div style="height:800px;width:100%">
            <el-table
              height="700"
              :data="orderData"
              style="width:100%;height: auto;background-color: #FFCC33">
              <el-table-column
                label="商品名称"
                width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="商品照片"
                width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.src }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="商品价格"
                width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.prices }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="商品标签"
                width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.desc }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="商品描述"
                width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.desc }}</span>
                </template>
              </el-table-column>

              <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="">编辑
                  </el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="">删除
                  </el-button>
                  <el-button
                    size="mini"
                    type="success"
                    @click="">设为默认
                  </el-button>
                </template>
              </el-table-column>

            </el-table>
            <el-button
              style="margin: 5px"
              icon="el-icon-circle-plus-outline"
              type="primary">
              添加商品
            </el-button>
          </div>
        </el-tab-pane>

      </el-tabs>
    </div>

  </div>
</template>

<script>
export default {
  name: "StoreMain",
  data() {
    return {
      //弹窗是否可见
      dialogVisible1: false,

      //商品信息
      goods: {gname: '', gimage: '', gprices: '', glable: '', gintroduce: ''},

      //订单数据
      orderData: [{name: 'name', src: 'src', prices: 'price', desc: 'desc'},
        {name: 'name', src: 'src', prices: 'price', desc: 'desc'},
        {name: 'name', src: 'src', prices: 'price', desc: 'desc'},
        {name: 'name', src: 'src', prices: 'price', desc: 'desc'},
        {name: 'name', src: 'src', prices: 'price', desc: 'desc'},
        {name: 'name', src: 'src', prices: 'price', desc: 'desc'},
        {name: 'name', src: 'src', prices: 'price', desc: 'desc'},
        {name: 'name', src: 'src', prices: 'price', desc: 'desc'},
        {name: 'name', src: 'src', prices: 'price', desc: 'desc'},
        {name: 'name', src: 'src', prices: 'price', desc: 'desc'},
        {name: 'name', src: 'src', prices: 'price', desc: 'desc'},]
    }
  },
  methods: {
    //  弹出商品添加
    goodsaddDialog() {
      this.dialogVisible1 = true;

    },

    //  弹窗关闭提醒
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {
        });
    },
  }
}
</script>

<style>
#bg {
  background: url('../../assets/homeImgs/bg2.jpg') center;
  height: 900px;
  width: 100%;

}
</style>
