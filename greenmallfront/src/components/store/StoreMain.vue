<template>

  <div id="bg">
    <el-button style="margin: 5px"
               icon="el-icon-circle-plus-outline"
               type="primary" @click="date">date
    </el-button>

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
              :data="allGoods"
              style="width:100%;height: auto;background-color: #FFCC33">
              <el-table-column
                label="上传时间"
                width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.goods_time }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="商品名称"
                width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.goods_name }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="商品照片"
                width="180">
                <template slot-scope="scope">
                  <img style="margin-left: 10px;height: 100px;width: 100px" :src="scope.row.goods_photo">
                </template>
              </el-table-column>
              <el-table-column
                label="商品价格"
                width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.goods_prices }}</span>RMB/KG
                </template>
              </el-table-column>
              <el-table-column
                label="商品库存"
                width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.goods_stock }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="商品标签"
                width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.goods_lable }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="商品描述"
                width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.goods_description }}</span>
                </template>
              </el-table-column>
              <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="goodsEdit(scope.$index, scope.row)">编辑
                  </el-button>
                  <el-popconfirm
                    @confirm="goodsDelete(scope.row)"
                    title="确定删除本商品？">
                    <el-button
                      slot="reference"
                      size="mini"
                      type="danger"
                      @click="">删除
                    </el-button>
                  </el-popconfirm>

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
              title="提示"
              :visible.sync="dialogVisible1"
              width="30%"
              :before-close="handleClose">
              <span>
                <el-form
                  class="demo-ruleForm"
                  ref="goods" label-width="80px" size="medium"
                  style="border:1px solid #C4E1C5;padding:20px;">
                    <el-form-item prop="gname" label="商品名称">
                      <el-input v-model="goods.goods_name"></el-input>
                    </el-form-item>
                    <el-form-item label="商品图片">
<!--                      图片上传-->
                       <el-upload
                         :on-change="onUploadChange"
                         class="upload-demo"
                         ref="upload"
                         action=""
                         :on-preview="handlePreview"
                         :on-remove="handleRemove"
                         :file-list="fileList"
                         list-type="picture"
                         :limit="1"
                         :auto-upload="false">
                         <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                         <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                       </el-upload>
                    </el-form-item>
                    <el-form-item label="商品单价">
                      <el-input v-model.number="goods.goods_prices"></el-input>
                    </el-form-item>
                   <el-form-item label="商品库存">
                      <el-input v-model.number="goods.goods_stock"></el-input>
                    </el-form-item>
                  <el-form-item label="商品分类">
<!--商品分类布局-->
                    <el-cascader
                      v-model="value"
                      :options="options"
                      @change=""></el-cascader>
                    </el-form-item>
                  <el-form-item label="商品描述">
                      <el-input type="textarea" v-model="goods.goods_description"></el-input>
                    </el-form-item>
                  </el-form>
              </span>
              <span slot="footer" class="dialog-footer">

                <el-button @click="dialogVisible1 = false">取 消</el-button>

                <el-button type="primary" @click="submitUpload">确 定</el-button>

              </span>
            </el-dialog>

            <!--            修改商品弹窗-->
            <el-dialog
              title="提示"
              :visible.sync="dialogGoodsEdit"
              width="30%"
              :before-close="handleClose">
              <span>
                <el-form
                  class="demo-ruleForm"
                  ref="goods" label-width="80px" size="medium"
                  style="border:1px solid #C4E1C5;padding:20px;">
                    <el-form-item prop="gname" label="商品名称">
                      <el-input v-model="goodsEditInfo.gname"></el-input>
                    </el-form-item>
                    <el-form-item label="商品图片">
<!--                      图片上传-->
                       <el-upload
                         :on-change="onUploadChange"
                         class="upload-demo"
                         ref="upload"
                         action=""
                         :on-preview="handlePreview"
                         :on-remove="handleRemove"
                         :file-list="fileList"
                         list-type="picture"
                         :limit="1"
                         :auto-upload="false">
                         <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                         <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                       </el-upload>
                    </el-form-item>
                    <el-form-item label="商品单价">
                      <el-input v-model.number="goodsEditInfo.gprices"></el-input>
                    </el-form-item>
                  <el-form-item label="商品分类">
                    <el-cascader
                      v-model="valueLable"
                      :options="options"
                      @change=""></el-cascader>
                    </el-form-item>
                  <el-form-item label="商品描述">
                      <el-input type="textarea" v-model="goodsEditInfo.gintroduce"></el-input>
                    </el-form-item>
                  </el-form>
              </span>
              <span slot="footer" class="dialog-footer">

                <el-button @click="dialogGoodsEdit = false">取 消</el-button>

                <el-button type="primary" @click="submitEditGoods">确 定</el-button>

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
      //商品修改删除
      dialogGoodsEdit: false,

      //上传文件信息
      fileList: [],

      //弹窗是否可见
      dialogVisible1: false,


      //添加商品信息
      goods: {goods_photo: ''},

      //修改商品信息
      goodsEditInfo: {},

      //商品列表信息
      allGoods: [],

      //商品标签分类
      value: '',
      valueLable: '',

      options: [{
        value: '蔬菜', label: '蔬菜',
        children: [{
          value: '根菜类', label: '根菜类',
          children: [{value: '萝卜', label: '萝卜'}, {value: '胡萝卜', label: '胡萝卜'}]
        },
          {
            value: '绿叶类', label: '绿叶类',
            children: [{value: '白菜', label: '白菜'}, {value: '菠菜', label: '菠菜'}, {value: '菠菜', label: '菠菜'}]
          }]
      },
        {
          value: '水果', label: '水果',
          children: [{
            value: '瓜果类', label: '瓜果类',
            children: [{value: '西瓜', label: '西瓜'}, {value: '甜瓜', label: '甜瓜'}]
          },
            {
              value: '柑橘类', label: '柑橘类',
              children: [{value: '柠檬', label: '柠檬'}, {value: '柑桔', label: '柑桔'}]
            },
            {
              value: '核果仁果类', label: '核果仁果类',
              children: [{value: '苹果', label: '苹果'}, {value: '菠萝', label: '菠萝'}, {value: '香蕉', label: '香蕉'}]
            }
          ]
        }
      ],

      //添加表单验证

      //订单数据
      orderData: [],
    }
  },
  methods: {
    //
    date() {
      var aData = new Date();
      console.log(aData) //Wed Aug 21 2019 10:00:58 GMT+0800 (中国标准时间)

      this.value =
        aData.getFullYear() + "-" + (aData.getMonth() + 1) + "-" + aData.getDate();
      console.log(this.value) //2019-8-20
      return
    },

    //删除商品
    goodsDelete(row) {
      console.log(row.goods_id)
      this.$http.post('http://localhost:8080/goods/delete', row).then(res => {
        if (res.data == true) {
          this.$confirm('删除成功！！', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'success'
          })
          //重新请求数据 刷新列表
          this.goods.goods_id = '123'
          this.$http.post("http://localhost:8080/goods/findall", this.goods).then(res => {
            this.allGoods = res.data
          })
        } else {
          this.$confirm('删除错误！！', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
        }
      })
    },

    // 修改商品信息
    goodsEdit(index, row) {
      this.dialogGoodsEdit = true;
      this.goodsEditInfo.goods_id = row.goods_id
      this.goodsEditInfo.goods_name = row.goods_name
      this.goodsEditInfo.goods_prices = row.goods_prices
      this.goodsEditInfo.goods_stock = row.goods_stock
      this.goodsEditInfo.goods_description = row.goods_description

    },
    //修改商品提交
    submitEditGoods() {
      this.goodsEditInfo.glable = this.valueLable.toString();
      if (this.goodsEditInfo.gname == '' || this.goodsEditInfo.gimage == '' ||
        this.goodsEditInfo.gprices == '' || this.goodsEditInfo.gintroduce == '' ||
        this.goodsEditInfo.glable.length == 0) {
        this.$confirm('请填写所有内容！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
      } else {
        //向后端发送请求
        this.$http.post('http://localhost:8080/goods/update', this.goodsEditInfo).then(res => {
          if (res.data == true) {
            this.$confirm('修改成功！！', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'success'
            })
            //修改成功 关闭添加窗口
            this.dialogGoodsEdit = false;
            //重新请求数据 刷新列表
            this.goods.sid = '123'
            this.$http.post("http://localhost:8080/goods/findall", this.goods).then(res => {
              this.allGoods = res.data
            })
          } else {
            this.$confirm('修改错误！！', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            })
          }
        })
      }
    },

    //添加商品
    submitUpload() {
      //获取当前时间
      var aData = new Date();
      this.goods.goods_time = aData.getFullYear() + "-" + (aData.getMonth() + 1) + "-" + aData.getDate() + "-" + aData.getHours();
      //获取分类标签值
      this.goods.goods_lable = this.value.toString();
      if (this.goods.goods_name == '' || this.goods.goods_photo == ''
        || this.goods.goods_prices == '' || this.goods.goods_description == ''
        || this.goods.goods_lable.length == 0 || this.goods.goods_stock == '') {
        this.$confirm('请填写所有内容！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
      } else {
        //向后端发送请求
        this.$http.post('http://localhost:8080/goods/add', this.goods).then(res => {
          console.log(res.data)
          if (res.data == true) {
            console.log("true")
            this.$confirm('添加成功！！', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'success'
            })
            //添加成功 关闭添加窗口
            this.dialogVisible1 = false;
            //重新赋值表单goods
            this.goods.goods_name = "";
            this.goods.goods_prices = "";
            this.goods.goods_stock = "";
            this.goods.goods_description = "";
            this.value = [];
            this.fileList = [];

            //重新请求数据 刷新列表
            this.goods.sid = '123'
            this.$http.post("http://localhost:8080/goods/findall", this.goods).then(res => {
              this.allGoods = res.data
            })
          } else {
            this.$confirm('添加错误！！', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            })
          }
        })
      }

    },


    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    onUploadChange(file) {
      const isIMAGE = (file.raw.type === 'image/jpeg' || file.raw.type === 'image/png' || file.raw.type === 'image/gif');
      const isLt1M = file.size / 1024 / 1024 < 1;

      if (!isIMAGE) {
        this.$message.error('上传文件只能是图片格式!');
        return false;
      }
      if (!isLt1M) {
        this.$message.error('上传文件大小不能超过 1MB!');
        return false;
      }
      var This = this;
      var reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onload = function (e) {
        This.goods.goods_photo = this.result;
        This.goodsEditInfo.goods_photo = this.result;
      }
    },


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
  },
  mounted() {
    this.goods.store_id = sessionStorage.getItem("store_id")
    console.log("输出sid")
    console.log(this.goods.store_id)
    this.$http.post("http://localhost:8080/goods/findall", this.goods).then(res => {
      this.allGoods = res.data
    })
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
