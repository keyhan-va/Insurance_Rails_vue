<template>
    <div>
      
        <el-card class="box-card">
          <p>استعلام بیمه شخص ثالث</p>
          <el-row>
            <el-col :span="12" class="Left-card">
              <p>
                برای استعلام هزینه بیمه اطلاعات زیر را وارد کنید2
              </p>
            </el-col>
            <el-col :span="12" class="Right-card">
              
              <p class="enter_data">
                برای استعلام هزینه بیمه اطلاعات زیر را وارد کنید
              </p>

        
                 <div class="Right_select_box" v-if="step === 1">
              
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
                    <el-select class="Year" v-model="produceYear" placeholder="سال ساخت ">
                      <el-option v-for="Year in Years" :value="Year" :label="Year" :key="Year.index">{{ Year }}</el-option>
                    </el-select>

                    <el-button-group class="btn">
                      <el-button type="primary" plain icon="el-icon-arrow-left" size="small" @click="next">بعدی</el-button>
                      <el-button type="primary" plain size="small" @click="prev" disabled>قبلی<i class="el-icon-arrow-right" ></i></el-button>
                    </el-button-group>

                </div>

                <div  v-if="step === 2">
          
                    <el-select class="prev-co" v-model="PrevCo" placeholder="شرکت بیمه گر قبلی">
                      <el-option v-for="Company in Companys" :value="Company" :label="Company" :key="Company.index">{{ Company }}</el-option>
                    </el-select>

                    <el-button-group class="btn">
                      <el-button type="primary" plain icon="el-icon-arrow-left" size="small" @click="next">بعدی</el-button>
                      <el-button type="primary" plain size="small" @click="prev">قبلی<i class="el-icon-arrow-right" ></i></el-button>
                    </el-button-group>
                    
                
                </div>

                <div  v-if="step === 3">

                    <p class="DateOfEnd_p" >تاریخ شروع و پایان بیمه نامه قبلی</p>
                    <pdatepicker v-model="DateOfEnd" class="pdatepicker" placeholder="تاریخ پایان بیمه"></pdatepicker>
                    <pdatepicker v-model="DateOfStart" class="pdatepicker" placeholder="تاریخ شروع بیمه"></pdatepicker>


                    <el-button-group class="btn">
                       
                      <el-button type="primary" plain icon="el-icon-arrow-left" size="small" @click="next">بعدی</el-button>
                      <el-button type="primary" plain size="small" @click="prev" >قبلی<i class="el-icon-arrow-right" ></i></el-button>
                    </el-button-group>
                    
                </div>


                <div  v-if="step === 4" class="s4_discount">
          
                    <el-select class="percent_discount s4" v-model="ThPaDiscount" placeholder="درصد تخفیف ثالث">
                      <el-option v-for="ThDiscount in ThDiscounts" :value="ThDiscount" :label="ThDiscount" :key="ThDiscount.index">{{ ThDiscount }}</el-option>
                    </el-select>
                    <br>
                    <el-select class="percent_discount" v-model="DriverAccidentDiscount" placeholder="درصد تخفیف حوادث راننده">
                      <el-option v-for="DrAccDiscount in DrAccDiscounts" :value="DrAccDiscount" :label="DrAccDiscount" :key="DrAccDiscount.index">{{ DrAccDiscount }}</el-option>
                    </el-select>
                    <br>
                    <el-select class="percent_discount" v-model="Damage" placeholder="آیا از بیمه نامه ی قبلی خسارت گرفته اید؟">
                      <el-option v-for="DamageAnswer in DamageAnswers" :value="DamageAnswer" :label="DamageAnswer" :key="DamageAnswer.index">{{ DamageAnswer }}</el-option>
                    </el-select>
                    <br>
                    <el-button-group class="btn">
                      <el-button type="primary" plain size="small" @click="submit">استعلام قیمت بیمه<ion-icon name="heart"></ion-icon></el-button>
                      <!-- <el-button type="primary" plain size="small" @click="prev">قبلی<i class="el-icon-arrow-right" ></i></el-button> -->
                    </el-button-group>
                    
                
                </div>


                


            </el-col>
          </el-row>
        </el-card>


        
        
    </div>
</template>




<script>
  export default {
    data() {
      return {
        step:1,
        DateOfStart : '1396/6/8',
        DateOfEnd : '1396/6/8',

                
        Years:["۲۰۱۱-۱۳۹۰","۲۰۱۲-۱۳۹۱","۲۰۱۳-۱۳۹۲","۲۰۱۴-۱۳۹۳","۲۰۱۵-۱۳۹۴"],

        Companys:["ایران","آسیا","معلم","سینا","دانا"],

        ThDiscounts:["صفر درصد","درصد ۵","درصد ۱۰","درصد ۱۵","درصد ۲۰","درصد ۲۵","درصد ۳۰","درصد ۳۵","درصد ۴۰","درصد ۴۵","درصد ۵۰","درصد ۵۵","درصد ۶۰","درصد ۶۵","درصد ۷۰"],
        
        DrAccDiscounts:["صفر درصد","درصد ۵","درصد ۱۰","درصد ۱۵","درصد ۲۰","درصد ۲۵","درصد ۳۰","درصد ۳۵","درصد ۴۰","درصد ۴۵","درصد ۵۰","درصد ۵۵","درصد ۶۰","درصد ۶۵","درصد ۷۰"],
        
        DamageAnswers:["بله","خیر"],
        
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
        PrevCo:'',
        ThPaDiscount: '',
        DriverAccidentDiscount: '',
        Damage: '',



        
        
      };
    },
    methods:{

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
      }

    }
    

  }
</script>







<style>

  
  .text {
    font-size: 14px;
  }

  .item {
    padding: 10px 0;
    
  }


  .box-card {
    font-size: 25px;
    /* text-align: center; */
    width: 90%;
    margin: 20px auto 0 auto;
    float: none;
    height: 500px;
  }

 
  .box-card .Right-card p .enter_data{
    font-size: 12px;
    text-align: right;
    margin: 0px auto 0px auto;

  }

  .box-card .Right-card .el-select{
    margin-top: 5px;

  }

  .box-card .Right-card .Right_select_box{
    margin-top: 30px;
  }

  .box-card .Right-card ::placeholder{
    
    text-align: right;
    

  }

  .box-card .Right-card input{
    
    text-align: right;
    

  }

  .box-card .Right-card .btn{
    margin-top: 20px;
  }

  

 .el-select-dropdown__item {
    text-align: right;
  }
  .box-card .Right-card .Kind{
    
    width: 455px;
  }


  .box-card .Right-card .Year{
    width: 455px;
  }

  .box-card .Right-card .prev-co{
    margin-top: 30px;
    width: 455px;
  }

 
  .box-card .Left-card p{
    
    font-size: 11px;
  }


  .pdatepicker input{
    margin-top: 15px;
    text-align: left;
    direction: rtl;
    width: 500px;
    height: 38px;
    background-color: white;
    color: rgb(204, 13, 13);
}

.box-card .Right-card p{
    font-size: 12px;
    text-align: right;
    margin: 0px auto 0px auto;

  }

  .box-card .Right-card .DateOfEnd_p{
    font-size: 12px;
    text-align: right;
    margin: 50px auto 0px auto;

  }

  .box-card .Right-card .percent_discount{
    margin-top: 10px;
    width: 455px;
  }

  .box-card .Right-card .s4_discount{
    margin-top: 30px;
    width: 455px;
  }

</style>
  


 