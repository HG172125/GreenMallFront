<template>

  <div id="bg">
    <el-row>
      <el-col :span="8">
        <div style="color:Transparent;" class="grid-content bg-purple">1</div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light"><h2 style="margin-top: 10px;margin-left: 48%"> 商家后台</h2></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-button @click="out" style="margin-left: 80%;margin-top: 10px" type="danger" plain>退出</el-button>
        </div>
      </el-col>
    </el-row>

    <div>
      <el-tabs
        style="width: 100%;height: 800px"
        tab-position="left">
        <el-tab-pane>
          <span style="font-size: 20px;margin-top: 10px" slot="label"><i class="el-icon-s-home"></i>首页信息</span>
          <el-row>
            <el-col style="height: 200px;background: #FFFFFF" :span="12">
              <div style="line-height: 100px;margin-left: 20px" class="grid-content bg-purple">
                <h1>今日订单量：<span style="font-size: 50px;color: red">{{ this.todayOrder }}</span></h1>
              </div>
            </el-col>
            <el-col style="height: 200px" :span="12">
              <div style="line-height: 100px;margin-left: 20px" class="grid-content bg-purple">
                <h1>总订单量：<span style="font-size: 50px;color: red">{{ this.allOrder }}</span></h1>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col style="height: 400px" :span="12">
              <div class="grid-content bg-purple">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <div class="grid-content bg-purple"><h2>订单状态</h2></div>
                  </el-col>
                  <el-col :span="20">
                    <div class="grid-content bg-purple">
                      <div id="main"></div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col style="height: 400px;background: #FFFFFF" :span="12">
              <div style="line-height: 100px;margin-left: 20px" class="grid-content bg-purple">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <div class="grid-content bg-purple"><h2>商品销量</h2></div>
                  </el-col>
                  <el-col :span="20">
                    <div class="grid-content bg-purple">
                      <el-table
                        :data="hotGoods"
                        height="400"
                        border
                        style="width: 100%">
                        <el-table-column
                          prop="goods_id"
                          label="商品编号"
                        >
                        </el-table-column>
                        <el-table-column
                          prop="goods_name"
                          label="商品名称">
                        </el-table-column>
                        <el-table-column
                          prop="goods_state"
                          label="商品销量">
                        </el-table-column>
                      </el-table>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!--        商品管理-->
        <el-tab-pane style="width: 100%">
          <span style="font-size: 20px" slot="label"><i class="el-icon-s-home"></i>商品管理</span>

          <div style="height:800px;width:100%">
            <el-table
              height="700"
              :data="allGoods.filter(data => !search || data.goods_name.toLowerCase().includes(search.toLowerCase()))"
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
              <el-table-column fixed="right">
                <template slot="header" slot-scope="scope">
                  <el-input
                    v-model="search"
                    size="mini"
                    placeholder="输入关键字搜索"/>
                </template>
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
                      <el-input placeholder="" v-model="goodsEditInfo.goods_name"></el-input>
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
                  <el-form-item label="商品库存">
                      <el-input v-model.number="goodsEditInfo.goods_stock"></el-input>
                    </el-form-item>
                    <el-form-item label="商品单价">
                      <el-input v-model.number="goodsEditInfo.goods_prices"></el-input>
                    </el-form-item>
                  <el-form-item label="商品分类">
                    <el-cascader
                      v-model="valueLable"
                      :options="options"
                      @change=""></el-cascader>
                    </el-form-item>
                  <el-form-item label="商品描述">
                      <el-input type="textarea" v-model="goodsEditInfo.goods_description"></el-input>
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
          <span style="font-size: 20px" @click="getYixiadan" slot="label"><i class="el-icon-s-home"></i>未处理单</span>
          <div style="height:800px;width:100%">
            <el-table
              height="780"
              :data="yixiadan.filter(data => !search || data.goods_name.toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%">
              <el-table-column
                label="商品id"
                prop="goods_id">
              </el-table-column>
              <el-table-column
                label="商品名称"
                prop="goods_name">
              </el-table-column>
              <el-table-column
                label="商品照片"
                width="180">
                <template slot-scope="scope">
                  <img style="margin-left: 10px;height: 100px;width: 100px" :src="scope.row.goods_photo">
                </template>
              </el-table-column>
              <el-table-column
                label="商品数量"
                prop="order_goodsnumber">
              </el-table-column>
              <el-table-column
                label="收货人姓名"
                prop="user_name">
              </el-table-column>
              <el-table-column
                label="收货人电话"
                prop="user_phone">
              </el-table-column>
              <el-table-column
                label="收货人地址"
                prop="user_address">
              </el-table-column>
              <el-table-column
                label="订单状态"
                prop="order_state">
              </el-table-column>


              <el-table-column
                align="right">
                <template slot="header" slot-scope="scope">
                  <el-input
                    v-model="search"
                    placeholder="输入关键字搜索"/>
                </template>
                <template slot-scope="scope">
                  <el-popconfirm
                    @confirm="Fahuo(scope.row)"
                    title="确认发货？">
                    <el-button
                      slot="reference"
                      type="primary"
                      @click="">发货
                    </el-button>
                  </el-popconfirm>
                </template>
              </el-table-column>
            </el-table>

          </div>
        </el-tab-pane>
        <el-tab-pane style="width: 100%">
          <span style="font-size: 20px" @click="getYiyiwancheng" slot="label"><i class="el-icon-s-home"></i>已完成单</span>
          <div style="height:800px;width:100%">
            <el-table
              height="780"
              :data="yiwancheng.filter(data => !search || data.goods_name.toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%">
              <el-table-column
                label="商品id"
                prop="goods_id">
              </el-table-column>
              <el-table-column
                label="商品名称"
                prop="goods_name">
              </el-table-column>
              <el-table-column
                label="商品照片"
                width="180">
                <template slot-scope="scope">
                  <img style="margin-left: 10px;height: 100px;width: 100px" :src="scope.row.goods_photo">
                </template>
              </el-table-column>
              <el-table-column
                label="商品数量"
                prop="order_goodsnumber">
              </el-table-column>
              <el-table-column
                label="收货人姓名"
                prop="user_name">
              </el-table-column>
              <el-table-column
                label="收货人电话"
                prop="user_phone">
              </el-table-column>
              <el-table-column
                label="收货人地址"
                prop="user_address">
              </el-table-column>
              <el-table-column
                label="订单状态"
                prop="order_state">
              </el-table-column>


              <el-table-column
                align="right">
                <template slot="header" slot-scope="scope">
                  <el-input
                    v-model="search"
                    placeholder="输入关键字搜索"/>
                </template>
                <template slot-scope="scope">

                </template>
              </el-table-column>
            </el-table>

          </div>
        </el-tab-pane>
        <el-tab-pane>
          <span @click="getStoreInfo" style="font-size: 20px;margin-top: 10px" slot="label"><i
            class="el-icon-s-home"></i>店铺信息</span>
          <el-descriptions size="medium" title="店铺信息" direction="vertical" :column="4" border>
            <el-descriptions-item label="店铺编号">{{ this.storeInfo.store_id }}</el-descriptions-item>
            <el-descriptions-item label="店铺名称">{{ this.storeInfo.store_name }}</el-descriptions-item>
            <el-descriptions-item label="店铺所有人">{{ this.storeInfo.store_username }}</el-descriptions-item>
            <el-descriptions-item label="备注">

            </el-descriptions-item>

          </el-descriptions>

        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import {BarChart} from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局、全局过渡动画等特性
import {LabelLayout, UniversalTransition} from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {CanvasRenderer} from 'echarts/renderers';

export default {
  name: "StoreMain",
  data() {
    return {
      //订单数据
      orderData1: '',
      orderData2: '',

      //店铺信息
      storeInfo: {},

      //商品修改删除
      dialogGoodsEdit: false,

      search: '',
      //上传文件信息
      fileList: [],

      //弹窗是否可见
      dialogVisible1: false,


      //添加商品信息
      goods: {goods_photo: ''},

      //修改商品信息
      goodsEditInfo: {
        goods_id: '',
        goods_name: '',
        goods_photo: '',
        goods_prices: '',
        goods_lable: '',
        goods_stock: '',
        goods_description: ''
      },


      //商品列表信息
      allGoods: [],
      yixiadan: [],
      yiwancheng: [],

      //修改订单已发货
      orderInfo: {},

      //商品标签分类
      value: '',
      valueLable: '',

      //饼状图数据
      formdata: [{order_goodsnumber: '', order_state: ''}],

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


      hotGoods: [],

      //订单数据
      orderData: [],

      todayOrder: '',
      allOrder: '',
    }
  },

  created() {
    echarts.use([
      TitleComponent,
      TooltipComponent,
      GridComponent,
      DatasetComponent,
      TransformComponent,
      BarChart,
      LabelLayout,
      UniversalTransition,
      CanvasRenderer
    ]);
  },

  methods: {

    getStoreInfo() {
      this.storeInfo.store_id = sessionStorage.getItem("store_id")

      this.$http.post('http://localhost:8080/store/findOneBySid', this.storeInfo).then(res => {
        this.storeInfo = res.data
      })
    },
    //发货
    Fahuo(row) {
      this.orderInfo.order_id = row.order_id
      this.orderInfo.order_state = '已发货'
      console.log("确认发货")
      this.$http.post("http://localhost:8080/order/updateState", this.orderInfo).then(res => {
        if (res.data == true) {
          this.$message({
            type: 'success',
            message: '发货成功'
          });

          this.getYixiadan()
        } else {
          this.$message({
            type: 'error',
            message: '发货失败'
          });
        }
      })

    },

    //获取已下单的订单
    getYixiadan() {
      this.storeInfo.order_id = sessionStorage.getItem("store_id")
      console.log(sessionStorage.getItem("store_id"))
      console.log(this.storeInfo)

      this.$http.post("http://localhost:8080/order/findYixiadanBsid", this.storeInfo).then(res => {
        this.yixiadan = res.data
        console.log(res.data[1])
      })
    },
    getYiyiwancheng() {
      this.storeInfo.order_id = sessionStorage.getItem("store_id")
      console.log(sessionStorage.getItem("store_id"))
      console.log(this.storeInfo)

      this.$http.post("http://localhost:8080/order/findYiwanchengBsid", this.storeInfo).then(res => {
        this.yiwancheng = res.data

      })


    },


    //退出登录状态
    out() {
      this.$router.push("/index")
    },

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
      console.log(row.goods_name)
      this.goodsEditInfo.goods_id = row.goods_id
      this.goodsEditInfo.goods_name = row.goods_name
      this.goodsEditInfo.goods_prices = row.goods_prices
      this.goodsEditInfo.goods_stock = row.goods_stock
      this.goodsEditInfo.goods_description = row.goods_description
      this.dialogGoodsEdit = true;

    },
    //修改商品提交
    submitEditGoods() {
      this.goodsEditInfo.goods_lable = this.valueLable.toString();
      if (this.goodsEditInfo.goods_name == '' || this.goodsEditInfo.goods_photo == '' ||
        this.goodsEditInfo.goods_prices == '' || this.goodsEditInfo.goods_stock == '' ||
        this.goodsEditInfo.goods_lable.length == 0 || this.goodsEditInfo.goods_description == '') {
        this.$confirm('请填写所有内容！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
      } else {
        console.log(this.goodsEditInfo)
        //向后端发送请求
        this.$http.post('http://localhost:8080/goods/update', this.goodsEditInfo).then(res => {
          console.log(res.data)
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
    this.$http.post("http://localhost:8080/goods/findall", this.goods).then(res1 => {
      this.allGoods = res1.data
    })
    //查询热门商品
    this.storeInfo.store_id = sessionStorage.getItem("store_id")
    this.$http.post("http://localhost:8080/goods/findgoodsNumberBysid", this.storeInfo).then(res4 => {
      this.hotGoods = res4.data
      console.log(this.todayOrder)
    })

    //查询所有订单
    this.storeInfo.store_id = sessionStorage.getItem("store_id")
    this.$http.post("http://localhost:8080/order/findAllOrder", this.storeInfo).then(res3 => {
      this.allOrder = res3.data.order_goodsnumber
      console.log(this.todayOrder)
    })

    //查询今日订单
    this.storeInfo.store_id = sessionStorage.getItem("store_id")
    this.$http.post("http://localhost:8080/order/findTodaysOrder", this.storeInfo).then(res2 => {
      this.todayOrder = res2.data.order_goodsnumber
      console.log(this.todayOrder)
    })
    //根据store id 订单状态
    this.storeInfo.store_id = sessionStorage.getItem("store_id")
    console.log("chaxun")
    console.log(this.storeInfo.store_id)

    this.$http.post("http://localhost:8080/order/findState", this.storeInfo).then(res => {
      this.formdata = res.data
      var myChart = echarts.init(document.getElementById('main'));
      let option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: '订单状态分析',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: res.data[2].order_goodsnumber, name: res.data[2].order_state},
              {value: res.data[3].order_goodsnumber, name: res.data[3].order_state},
              {value: res.data[0].order_goodsnumber, name: res.data[0].order_state},
              {value: res.data[1].order_goodsnumber, name: res.data[1].order_state},
            ],
          }
        ]
      };
      myChart.setOption(option);
    })
    console.log(this.formdata[0].order_state)

  }



}
</script>

<style>
#bg {
  background: url('../../assets/homeImgs/bg2.jpg') center;
  height: 900px;
  width: 100%;

}

#main {
  height: 400px;
  width: 600px;
}

</style>
