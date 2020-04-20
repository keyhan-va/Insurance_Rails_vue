<template>
    <el-tabs type="border-card">
        
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
        <el-tab-pane label="شخص ثالث">
            
            <el-select class="Kind" v-model="selectedKind" @change="selectKind"  placeholder="نوع خودرو">
                <el-option v-for="(Kind,index) in Kinds" :value="index" :label="Kind.label" :key="Kind.index">{{ Kind.label }}</el-option>
            </el-select>
                    
            <br>

            <el-select v-model="selectedModel"  placeholder="مدل خودرو" no-data-text ="موردی یافت نشد">
                <el-option v-for="model in models" :value="model" :label="model" :key="model.index">{{ model }}</el-option>
            </el-select>
                   
            <el-select v-model="selectedBrandIndex" @change="selectbrand"  placeholder="برند خودرو" no-data-text ="موردی یافت نشد">
                <el-option v-for="(brand,index) in brands" :value="index" :label="brand" :key="brand.index">{{ brand }}</el-option>
            </el-select>

            <br>
            <el-input class="priceinput" placeholder="قیمت پایه ی بیمه" v-model="input" @input="changeprice"></el-input>
                <p>قیمت پایه ی بیمه {{showprice}} تومان</p>
            <br>

            <el-button-group class="btn">
                <el-button type="primary" plain icon="el-icon-arrow-left" size="small" @click="next">بعدی</el-button>
                <el-button type="primary" plain size="small" @click="prev" disabled>قبلی<i class="el-icon-arrow-right" ></i></el-button>
            </el-button-group>
        </el-tab-pane>
    </el-tabs>
</template>




<script>
  export default {
    data() {
      return {
        activeName: 'first',
        input:'',
        showprice:'0',

        Kinds:[
          {
            label:"سواری",
            brands:["پژو","پراید","تیبا"],
            models:[
              ["پژو ۲۰۶","پژو ۴۰۵","پژو پارس","روا","پژو ۲۰۷","آریان"],
              ["صبا","کوییک","۱۳۱SL","131SE","۱۱۱SL","۱۱LE"],
              ["صندق دار","هاچبک"]
            ]

          },
          {
            label:"وانت",
            brands:["پژو","پراید","تیوتا"],
            models:[
              [" تن تا ۳ تن"],
              ["۱۵۱Le","۱۵۱SE","۱۵۱SL","۱۵۱TL"],
              ["بارکش تا ۱ تن","بیش از یک تن تا ۳ تن","هایلوکس وانت ۱ تن",]
            ]

          },
          {
            label:"کامیون",
            brands:["بنز","ولوو","هیوندای"],
            models:[
              ["بارکش تا ۱ تن","بیش از ۱ تن تا ۳ تن","بیش از ۱۰ تن تا ۲۰ تن","بیش از ۲۰ تن"],
              ["بارکش تا ۱ تن","بیش از ۱ تن تا ۳ تن","بیش از ۱۰ تن تا ۲۰ تن","بیش از ۲۰ تن"],
              ["بارکش تا ۱ تن","بیش از ۱ تن تا ۳ تن","بیش از ۱۰ تن تا ۲۰ تن","بیش از ۲۰ تن"],
            ]
          }
        ],
        produceYear: '',
        selectedKind:'',
        selectedBrandIndex:'',
        selectedBrand: '',
        selectedModelIndex:'',
        selectedModel:'',
        brands:[],
        models:[],
        selectedKindLabel:'',
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      selectKind: function() {
        this.brands='',
        this.selectedKindLabel = this.Kinds[this.selectedKind].label;
        this.brands = this.Kinds[this.selectedKind].brands;
      },

      selectbrand: function() {
        this.selectedBrand= '';
        this.models='';
        this.selectedBrand = this.brands[this.selectedBrandIndex];
        this.models= this.Kinds[this.selectedKind].models[this.selectedBrandIndex];
      },
      prev: function() {
        this.step--;
      },
      next: function() {
        this.step++;
      },
      submit: function() {
        alert('Submit to blah and show blah and etc.');      
      },

      changeprice: function(){
          
        this.showprice = this.input;
      }
      
    }
  };
</script>

<style>

    .el-tabs__nav-scroll {
        overflow: hidden;
        float: right;
    }

    .el-tabs__content {
        overflow: hidden;
        position: relative;
            text-align: right;
        /* align-content: center;
        align-items: center; */
    }

    .el-select {
        display: inline-block;
        position: relative;
        width: 250px;
    }

    .Kind{
        width: 505px;
    }

    .el-tabs .el-tab-pane .priceinput {
        width: 505px;
    }


</style>