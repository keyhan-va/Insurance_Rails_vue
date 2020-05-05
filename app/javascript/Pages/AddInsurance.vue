<template>
    <el-tabs type="border-card" >
        
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
        <el-tab-pane label="شخص ثالث">
            
            <el-select class="Kind" v-model="selectedKind" @change="selectKind"  placeholder="نوع خودرو">
                <el-option v-for="(Kind,index) in Kinds" :value="index" :label="Kind.label" :key="Kind.index">{{ Kind.label }}</el-option>
            </el-select>
                    
            <br>

            <el-select v-model="vehicle.model"  placeholder="مدل خودرو" no-data-text ="موردی یافت نشد">
                <el-option v-for="model in models" :value="model" :label="model" :key="model.index">{{ model }}</el-option>
            </el-select>
                   
            <el-select v-model="selectedBrandIndex" @change="selectbrand"  placeholder="برند خودرو" no-data-text ="موردی یافت نشد">
                <el-option v-for="(brand,index) in brands" :value="index" :label="brand" :key="brand.index">{{ brand }}</el-option>
            </el-select>

            <br>
            <el-input class="priceinput" placeholder="قیمت پایه ی بیمه" v-model="vehicle.price" @input="changeprice"></el-input>
            <br> <br>
            <p>قیمت پایه ی بیمه {{showprice}} تومان</p>

            <!-- <p>{{ vehicle.kind}} , {{vehicle.brand}},{{vehicle.model}}</p> -->
            <br>

            
            <el-button class="Savebtn" type="Submit" @click="addvehicle(vehicle.id)">ثبت</el-button>
            <br><br>
            <div v-for="vehicle in vehicles" v-bind:key="vehicle.id">
                <el-card >
                    <h6 class="desciption">خودرو {{vehicle.kind}} برند {{ vehicle.brand}} مدل {{vehicle.model}} قیمت پایه ی بیمه {{vehicle.price}}</h6>
                    <hr><br>
                    <el-button type="danger" icon="el-icon-delete" size="mini"  @click="deletvehicle(vehicle.id)" circle></el-button>
                    <el-button type="primary" icon="el-icon-edit" size="mini" @click="editvehicle(vehicle)" circle></el-button>
                </el-card>
            </div>
        </el-tab-pane>
    </el-tabs>
    
    
    
</template>




<script>
  import axios from 'axios'
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

        vehicles: [],
        vehicle:{
            kind: '',
            brand: '',
            model: '',
            price: '',
            
        },
        vehicle_id: '',
        edit: false
      };
    },

    created(){
        this.fetchvehicles();
    },


    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      selectKind: function() {
        this.brands='',
        this.selectedKindLabel = this.Kinds[this.selectedKind].label;
        this.brands = this.Kinds[this.selectedKind].brands;
        this.vehicle.kind = this.selectedKindLabel;
      },

      selectbrand: function() {
        this.selectedBrand= '';
        this.models='';
        this.selectedBrand = this.brands[this.selectedBrandIndex];
        this.vehicle.brand = this.selectedBrand;
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
      },


      
      fetchvehicles(){
        fetch('http://localhost:3000/api/v1/thirdparties/')
            .then(res => res.json())
            .then(res => {
            this.vehicles = res.data;
             //console.log(res.data);
            })
        },
        deletvehicle(id){
            if(confirm('Are You Sure?')){
                fetch(`http://localhost:3000/api/v1/thirdparties/${id}`,{
                method: 'delete'
                })
                .then(res => res.json())
                .then(data => {
                alert('vehicle Removed');
                this.fetchvehicles();
                })
                .catch(err => console.log(err));
            }
        },
        addvehicle(id){
            if (this.edit === false) {
                //Add
                
                fetch('http://localhost:3000/api/v1/thirdparties/',{
                method: 'post',
                body: JSON.stringify(this.vehicle),
                headers: {
                    'content-type': 'application/json'
                }
                })
                .then(res => res.json())
                .then(data => {
                this.selectedKind = '';
                this.selectedBrandIndex = '';
                this.vehicle.kind ='';
                this.vehicle.brand = '';
                this.vehicle.model = '';
                this.vehicle.price = '';
                this.vehicle.year = '';
                alert('vehicle Added');
                this.fetchvehicles();
                })
                .catch(err => console.log(err));
            }
            else{
                //Update1
          
                fetch(`http://localhost:3000/api/v1/thirdparties/${id}`,{
                method: 'put',
                body: JSON.stringify(this.vehicle),
                headers: {
                    'content-type': 'application/json'
                }
                })
                .then(res => res.json())
                .then(data => {
                this.selectedKind = '';
                this.selectedBrandIndex = '';
                this.vehicle.kind ='';
                this.vehicle.brand = '';
                this.vehicle.model = '';
                this.vehicle.price = '';
                this.vehicle.year = '';
                alert('vehicle Updated');
                this.fetchvehicles();
                })
                .catch(err => console.log(err));
            }
        },
        editvehicle(vehicle) {
            this.edit = true;

            this.vehicle.id = vehicle.id;
            this.vehicle.vehicle_id = vehicle.id;
            // this.selectedKind = vehicle.kind;
            // this.selectedBrand = vehicle.brand;
            this.vehicle.model = vehicle.model;
            this.vehicle.price = vehicle.price;
            
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

    .el-tabs .el-tab-pane .el-button--primary {
        color: #FFF;
        background-color: #409EFF;
        border-color: #409EFF;
        margin-bottom: 20px;
    }

    .el-tabs .el-tab-pane .desciption{
        margin-bottom: 20px;
    }


</style>