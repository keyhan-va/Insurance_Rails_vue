<template>
    <div dir="rtl">
      
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
                    
                <date-picker v-model="start" label="شروع" />
                <date-picker v-model="end" :disabled="!start" :min="start">
                  <div slot="label">
                    <span style="font-size: 14px">«</span>
                    <span>پایان</span>
                    <span style="font-size: 14px">»</span>
                  </div>
                      
                </date-picker>

                   
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
                <br><br>

                <el-button type="primary" plain size="small" @click="dialogFormVisible = true">>استعلام بیمه</el-button>
                

                
                <el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
                  <el-form :model="form">
                    <el-form-item label="Promotion name" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Zones" :label-width="formLabelWidth">
                      <el-select v-model="form.region" placeholder="Please select a zone">
                        <el-option label="Zone No.1" value="shanghai"></el-option>
                        <el-option label="Zone No.2" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
                  </span>
                </el-dialog>
                    
              </div>
            </el-col>
          </el-row>
          <!-- <div v-for="vehicle in vehicles" v-bind:key="vehicle.id">
                <el-card >
                    <h6 class="desciption">خودرو {{vehicle.kind}} برند {{ vehicle.brand}} مدل {{vehicle.model}} قیمت پایه ی بیمه {{vehicle.price}}</h6>
                    <hr><br>
                    <el-button type="danger" icon="el-icon-delete" size="mini"  @click="deletvehicle(vehicle.id)" circle></el-button>
                </el-card>
          </div> -->
        </el-card>
    </div>
</template>




<script>
  export default {
    data() {
      return {
        step:4,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        DateOfStart : '1396/6/8',
        DateOfEnd : '1396/8/8',
        start: '1399/02/09',
        end: '1399/02/31',

                
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

        vehicles: [],
        vehicle:{
            kind: '',
            brand: '',
            model: '',
            price: '',
            
        },




        
        
      };
    },
    created(){
        this.fetchvehicles();
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
      },

      fetchvehicles(){
        fetch('http://localhost:3000/api/v1/thirdparties/')
            .then(res => res.json())
            .then(res => {
            this.vehicles = res.data;
             //console.log(res.data);
            })
        },
      
      

    }
    

  }
</script>







<style>

  .vpd-input-group {
    max-width: 250px;
    box-sizing: border-box;
    font-size: 13px;
    font-weight: 400;
    color: #35495e;
    margin-top: 20px;
    border: black solid 1px ;
}
  
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
    
    width: 505px;
  }


  .box-card .Right-card .Year{
    width: 505px;
  }

  .box-card .Right-card .prev-co{
    margin-top: 30px;
    width: 505px;
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
    width: 505px;
  }

  .box-card .Right-card .s4_discount{
    margin-top: 30px;
    width: 505px;
  }

</style>
  


 