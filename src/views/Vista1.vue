<template>
    
  
    
  <!-- Page Content -->
  <div class="content pt-0">
    <!-- Checkable Table (.js-table-checkable class is initialized in Helpers.cbTableToolsCheckable()) -->
    <div class=" block-content">

      <span class="block-title">{{this.strings[0]}}</span> <br/>
  
      <div class="card-group col-md-12 block block-rounded">
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">Precio Venta</h5>
          <h6 class="card-subtitle mb-2 text-muted"> <span>{{this.strings[1]}}</span></h6>
          <p class="card-text"> <span v-for="v in venta" :key="v">{{v}} US$ <br/></span></p>
        </div>
        </div>

        <div class="card">
        <div class="card-body">
          <h5 class="card-title">Precio Alquiler</h5>
          <h6 class="card-subtitle mb-2 text-muted"> <span>{{this.strings[1]}}</span></h6>
          <p class="card-text">  <span v-for="v in alquileres" :key="v">{{v}} US$ <br/></span></p>
        </div>
        </div>

        <div class="card">
        <div class="card-body">
          <h5 class="card-title">Precio Alquiler Amueblado</h5>
          <h6 class="card-subtitle mb-2 text-muted"> <span>{{this.strings[1]}}</span></h6>
          <p class="card-text">  <span v-for="v in alquilerAmueblados" :key="v">{{v}} US$ <br/></span></p>
        </div>
        </div>
      </div>
      <div class="block block-rounded  block-rounded block-header-default">
        <div class="block block-rounded">
          <!-- Grid Based -->
          <h3 class="block-title ms-4" style="color:blue">Filtro de Búsqueda</h3>
        </div>
        <div class="row col-12">
         
          <div class="col-12">
            <!-- Form Grid -->
            <div >
              <div class="row mb-4 ms-1">

                <div class="col-12 col-md-2">
                  <input class="form-control"  v-model="filterField"  id="buscar" name="buscar" placeholder="Buscar por Código"/>
                </div>
                <div class="col-12 col-md-2">
                  <select v-model="BuscarTipo" class="form-select" id="example-select" name="example-select">
                    <option value="">Tipo</option>
                    
                        <option  value="1">Venta</option>
                        <option  value="2">Alquiler</option>
                        <option  value="3">AlquilerAmueblado</option>
                    
                  </select>
                </div>
                <div class="col-12 col-md-2">
                  <select v-model="BuscarHabitaciones" class="form-select" id="example-select" name="example-select">
                    <option value="">Habitaciones</option>
                    
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3 o más</option>
                  </select>
                </div>
                
                <div class="col-12 col-md-3">
                  <input class="form-control" type="date" min="1980-01-01"   v-model="FechaMinima" >
              </div>
              <div class="col-12 col-md-3">
                <input class="form-control " type="date"   v-model="FechaMaxima" >
              </div>
              </div>

              <div class="row mb-4">
                
                <div class="col-12 col-md-3">
                  <h4 class="block-title ms-4">Estado:</h4>
                  <div class="form-check  form-check-inline">
                    <label class="ms-1">Usada</label>
                  <input type="checkbox"  class="ms-1"   v-model="filterUsado"/> 
                  <label class="ms-2">Construncción</label>
                  <input class="ms-1" type="checkbox"  v-model="filterEnConstruccion"/>
              
                  <label class="ms-2">Nueva</label>
                  <input type="checkbox"    v-model="filterNueva"/>

                  <label class="ms-2">Segundo Uso</label>
                  <input type="checkbox"    v-model="filterUsada"/>

                  <label class="ms-2">Reformado</label>
                  <input type="checkbox"    v-model="filterReformado"/>
                  </div>
                </div>
                <div class="col-12 col-md-2">
                 
                  <div class="form-check  form-check-inline">
                 
                    <select v-model="BuscarBannos" class="form-select" id="example-select" name="example-select">
                      <option value="">Baños</option>
                      
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3 o más</option>
                    </select>

                    <select v-model="cambio" class="form-select mt-3" id="example-select" >
                      <option value="">Cambios</option>
                        <option v-for="parametro in parametros.estados" :key="parametro" :value="parametro.nombre">{{parametro.nombre}}</option>
                      </select>
                  </div>
                </div>
              
                <div class="col-12 col-md-3">
                  <div class="input-group">
                    <div class="col-md-6">
                    <select v-model="operacionesPrecio" class="form-select" id="example-select2" >
                      <option value="==">=</option>
                      
                          <option value=">="> Menor a </option>
                          <option value="<="> Mayor a </option>
                         
                    </select>
  
                  </div>
                    <input v-model="precio" type="number" class="form-control" placeholder="Precio"/>
                  </div>

                  <select v-model="web" class="form-select mt-3" id="example-select" >
                    <option value="">Sitio Web</option>
                      <option value="supercasas.com/">SuperCasas.com</option>
                      <option value="indominicana.com/">Indominicana.com</option>
                       
                    </select>
                </div>
                <div class="col-12 col-md-2">
                 
                  <select v-model="filterDivisa" class="form-select" id="example-select" >
                    <option value="">Divisa</option>
                    
                        <option value="US$"> US$ </option>
                        
                        <option value="RD$"> RD$ </option>
                  </select>

                    <select v-model="parking" class="form-select mt-3" id="example-select" >
                      <option value="">Parking</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4 o más</option>
                         
                      </select>
                    <!--
                    <input  v-on:click="getDataPagina(this.paginaActual)" type="button"  class="btn btn-secondary col-md-12  mt-3" value="Buscar"/>-->
                </div>
                <div class="col-12 col-md-2">

                  <select v-model="zona" class="form-select" id="example-select" >
                    <option value="">Zona</option>
                      <option v-for="parametro in parametros.zonas" :key="parametro" :value="parametro.zona">{{parametro.zona}}</option>
                       
                    </select>
                  
                  <input  v-on:click="resetFilter()" type="button"  class="btn btn-danger col-md-12  mt-3" value="Reset"/>
                  
                </div>
                
              </div>
             
            </div>
            <!-- END Form Grid -->
          </div>
        </div>
        </div>
        </div>
      
     

    <!-- END Checkable Table -->

     
      
      
   
    <!-- <span v-html="this.parametros.estadistica"></span>-->
   

    <!-- Table Sections (.js-table-sections class is initialized in Helpers.cbTableToolsSections()) -->
    <h2 class="content-heading"> 
      <vue-excel-xlsx style="border:0px;"
        :data="filterArray"
        :columns="columns"
        :file-name="'filename'"
        :file-type="'xls'"
        :sheet-name="'sheetname'"
        
        >
        <button class="btn btn-success"> Export to Excel </button>
    </vue-excel-xlsx>
    <!-- <button class="btn btn-success" @click.prevent = "downloadExl"> Export to Excel </button> -->
    </h2>  

    <div class="block block-rounded">
      <div class="block-header block-header-default">
        <h3 class="block-title">
          <code v-if="web=='supercasas.com/'">SuperCasas.com</code>
          <code v-else-if="web=='indominicana.com/'">Indominicana.com</code>
          <code v-else>SuperCasas.com/Indominicana.com</code>

          
        </h3>
      </div>
      <div class="block-content">
        <!--
        Separate your table content with multiple tbody sections. Add one row and add the class .js-table-sections-header to a
        tbody section to make it clickable. It will then toggle the next tbody section which can have multiple rows. Eg:

        <tbody class="js-table-sections-header">One row</tbody>
        <tbody>Multiple rows</tbody>
        <tbody class="js-table-sections-header">One row</tbody>
        <tbody>Multiple rows</tbody>
        <tbody class="js-table-sections-header">One row</tbody>
        <tbody>Multiple rows</tbody>

        You can also add the class .show in your tbody.js-table-sections-header to make the next tbody section visible by default
        -->
        <table id="excel" class="js-table-sections table table-hover">
          <thead>
            <tr style="with:auto;">
              <th class="text-center" style="width: 10%;">#</th>
              <th style="width: 12%;">Código</th>
              <th style="width: 3%;">Año de construcción</th>
              <th style="width: 3%;">Metros Construidos</th>
              <th style="width: 20%;">Nombre</th>
              <th style="width: 20%;">Zona</th>
              <th style="width: 9%;">Tipo</th>
              <th class="d-none d-sm-table-cell" style="width: 11%;">Precio</th>
              <th style="width: 18%;">Sitio Web</th>
            </tr>
          </thead>
          
          <tbody  v-for="post in  datosPaginados" :key="post.anuncio" class="js-table-sections">
        
            <tr>
              <td class="text-center">
                <button :id="post.anuncio"  class="btn btn-sm btn-alt-success" @click.prevent="check(post)" type="button" >+Info</button>
              </td>
             
              <td style="color:red" class="fw-semibold"> {{post.anuncio}}</td>
              <td>
                <span v-if="post.anno!=''" class="badge bg-primary">{{post.anno}}</span>
                <span v-else class="badge bg-primary">N/D</span>
              </td>
              <td><span class="fw-semibold">{{post.construccion}}</span></td>
              <td>
                <span class="badge bg-primary">{{post.nombre}}</span>
              </td>
              <td  >
               
                <span class="badge bg-primary">{{this.typeZone(post)}}</span>
          
              
              </td>
              <td class="d-none d-sm-table-cell">
                <span v-if="post.tipo==1">Venta</span>
                <span v-else-if="post.tipo==2">Alquiler</span>
                <span v-else>Alquiler Amueblado</span>
                
              </td>
              <td style="color:green" class="fw-semibold">
                {{post.precio}}
              </td>
              <td class="d-none d-sm-table-cell">
                <button v-if="post.cambios[0].estado=='No disponible' "  class="btn btn-sm btn-danger">No Disponible</button>
                <button v-else class="btn btn-sm btn-alt-info" ><a target="_blank" :href="post.url">Go -></a> </button> 
              </td>
            </tr>


            <!-- +Info-->
            <template id="datosExtra" v-if="Active==post.anuncio">
            <tr>
             
              <td colspan="2" class="fw-semibold ">Aseos:<br/> 
                <span v-if="post.bannos.toLocaleLowerCase().indexOf('+')>-1" class=" text-muted"> {{post.bannos}} (auxiliar)</span>
                <span v-else class=" text-muted"> {{post.bannos}}</span>
              </td>
              <td></td>
              <td  class="d-none d-sm-table-cell fw-semibold"> 
                Uso :
                <span v-if="post.uso!=''" class=" text-muted"> {{post.uso}}</span>
                <span v-else class=" text-muted"> Indefinido</span>
              </td>
              <td></td>
              <td class="text-justify"> 
               <span class="fw-semibold">Facilidades:</span> 
                <span  v-if="post.facilidades!=''"> {{post.facilidades}}</span> 
                <span v-else class="text-muted"> Sin información</span>
              </td>

              <td class="d-none d-sm-table-cell fw-semibold">
                Año de Publicación
                <span v-if="post.anno!=''" class=" text-muted"> {{post.anno}}</span>
                <span v-else class=" text-muted"> Indefinido</span>
              </td>

              <td class="fw-semibold ">
                Nº Habitaciones: 
                <span class=" text-muted"> {{post.habitaciones}}</span>
                
              </td>
              <td class="fw-semibold ">
                Nº Parking : <br/>
                <span v-if="post.parking!=''" class=" text-muted"> {{post.parking}}</span>
                <span v-else class=" text-muted"> Indefinido</span>
              </td>
            </tr>

            <!-- 2Info-->
            <tr>
             
             <td colspan="2" class="fw-semibold ">
              <span v-if="post.divisa.toLocaleLowerCase().indexOf(parametros.divisas[0].divisa.toLocaleLowerCase())">
                Precio en RD$:<br/> {{post.precio2/parametros.cambio_divisa}}
              </span>
              <span v-else-if="post.divisa.toLocaleLowerCase().indexOf(parametros.divisas[1].divisa.toLocaleLowerCase())">
               
                Precio en US$:<br/> {{post.precio2 * parametros.cambio_divisa}}
              </span>
              </td>

            

             <td class="text-justify"> 
              <span class="fw-semibold">Metros Construidos: </span> {{post.construccion}}m 
              <br/>
              <span class="fw-semibold">Precio del m^2 en RD$: </span> {{post.precio_m/parametros.cambio_divisa}} RD$
              <br/>
              <span class="fw-semibold">Precio del m^2: </span>{{post.precio_m}} US$
            </td>

             <td class="d-none d-sm-table-cell fw-semibold">
               Estado:
              <span v-if="post.estado!=''">{{post.estado}}</span>
               <span v-else class=" text-muted"> Sin información</span>
             </td>

             <td class="fw-semibold ">
               Cambio  precio: 
               <span class=" text-muted" v-if="post.cambios[0].precio_anterior==null && post.cambios[0].precio_posterior==null">  No hay cambio</span>
               <span class="text-muted" v-else><strong>Precio Anterior</strong> {{post.cambios[0].precio_anterior}} <br/>
                <strong>Precio Posterior</strong> {{post.cambios[0].precio_nuevo}}</span>
             </td>
             <td class="fw-semibold ">
               Cambios : <br/>
               <span  class=" text-muted"> {{this.typeState(post)}} </span> <br/>
              
             </td>
           </tr>

           <!--Informacion Detallada de la vivienda-->
            <tr>
              <td colspan="7" class="text-justify  d-sm-table-cell">
                <span class="fw-semibold">Información Detallada:</span>
                {{post.obser}} ...Estado :{{post.estado}}
              </td>
              <td></td>
              
              <td></td>
              <td></td>
              
            </tr>
          </template>

      
          </tbody>
       
        </table>

         <nav aria-label="..." >
      <ul class="pagination">
        
       
        <li v-on:click="getDataPagina(1)" class="page-item pe-1"
        :class="{active: paginaActual==1}" aria-current="page">
          <a class="page-link" href="#">|&lt;&lt;</a>
        </li>

        <li class="page-item pe-3">
          <a class="page-link"  v-on:click="getPreviousPage()" href="#" >Previous</a>
        </li>


        <!-- 1 -2 -3 -->
        <li v-on:click="paginaActual==1?getDataPagina(paginaActual): getDataPagina(paginaActual-1)" class="page-item pe-1"
        :class="{active: paginaActual==pagina}" aria-current="page">
          <a class="page-link" href="#">{{this.paginaActual}}</a>
        </li>
        
        <li v-on:click="getDataPagina(paginaActual)" class="page-item "
        :class="{active: paginaActual==pagina}" aria-current="page">
          <a class="page-link" href="#"  v-if="paginaActual==totalPaginas()">{{this.paginaActual+1}}</a>
          <a class="page-link" href="#"  v-else>{{this.paginaActual+1}}</a>
        </li>

        <li v-on:click="paginaActual==totalPaginas()?getDataPagina(totalPaginas()):getDataPagina(paginaActual+2)" class="page-item ms-1"
        :class="{active: paginaActual==pagina}" aria-current="page">
          <a class="page-link" href="#" v-if="paginaActual==totalPaginas()">{{this.paginaActual+2}}</a>
          <a class="page-link" href="#"  v-else>{{this.paginaActual+2}}</a>
        </li>



        <li class="page-item ms-3">
          <a class="page-link"  v-on:click="getNextPage()" href="#">Next</a>
        </li>

        <li v-on:click="getDataPagina(this.totalPaginas())" class="page-item ms-1"
        :class="{active: paginaActual==totalPaginas()}" aria-current="page">
          <a class="page-link" href="#">>>|</a>
        </li>
     
       
      </ul>
    </nav> 
      </div>
      
    </div>
    <!-- END Table Sections -->
   
  </div>

<!-- END Footer -->
</template>

<script>
import navvv from '@/components/Nav.vue'
import axios from "axios";
var XLSX = require('xlsx')
var FileSaver = require('file-saver')

export default {
name: 'PageN',
components: {
navvv,
},data(){
return{
  columns : [

                   {
                        label: "Cambios",
                        field: "cambios",
                        dataFormat: this.changueFormat
                    },
                      {
                        label: "Año Publicación",
                        field: "anno",
                    },
                    {
                        label:"Url",
                        field:"url",
                    },
                    {
                        label: "Código",
                        field: "anuncio",
                    },
                    {
                        label: "Tipo",
                        field: "tipo",
                      dataFormat: this.typeFormat
                    },
                    {
                        label: "Estado",
                        field: "estado",
                      
                    },
                    {
                        label: "Uso",
                        field: "uso",
                      
                    },
                    {
                      label: "Anuncio",
                      field: "nombre",
                     
                    },
                    {
                      label: "Precio Total ",
                      field: "precio2",
                     
                    },
                    {
                      label: "Metros Totales ",
                      field: "terreno",
                     
                    },
                    {
                      label: "Metros Construidos ",
                      field: "construccion",
                     
                    },
                    {
                      label: "Divisa",
                      field: "divisa",
                     
                    },
                    {
                      label: "Precio_m2US$",
                      field: "precio_m",
                     
                    },
                    {
                      label: "Nº Habitaciones",
                      field: "habitaciones",
                     
                    },
                    {
                      label: "Baños",
                      field: "bannos",
                     
                    },
                    {
                      label: "Nº Parking",
                      field: "parking",
                     
                    },
                    {
                      label: "Facilidades",
                      field: "facilidades",
                     
                    }
                  ],
  posts:[],
  parametros:[],
  posts2:[],
  filterField:'',
  Active:'',
  BuscarHabitaciones:'',
  BuscarBannos:'',
  BuscarTipo:'',
  filterUsado:0, //Segundo Uso o Usado ?
  filterEnConstruccion:0, //En construcción
  filterNueva:0,
  filterUsada:0,
  filterReformado:0,
  operacionesPrecio:"<=",
  precio:0,
  filterDivisa:'',
  zona:'',
  elementosPorPagina:30,
  datosPaginados:[],
   paginaActual:1,
   web:'',
   FechaMinima:'',
   FechaMaxima:'',
   strings:[],
   ventas:[],
   alquiler:[],
   aamueblado:[],
   cambio:'',
   parking:''
}
},
computed:{
  
  filterArray(){
    
    this.posts2=this.posts;
   
     return this.posts2.filter((item)=>{
      return (item.anuncio.toLowerCase().indexOf(this.filterField.toLowerCase())>-1)&&
      (item.tipo.toLowerCase().indexOf(this.BuscarTipo.toLocaleLowerCase())>-1)&&
      (((item.habitaciones=="" || item.habitaciones!="") && (this.BuscarHabitaciones=="") )|| ((this.BuscarHabitaciones=='1' || this.BuscarHabitaciones=='2' )&& parseInt(this.BuscarHabitaciones)==parseInt(item.habitaciones)) || (this.BuscarHabitaciones=='3' && parseInt(item.habitaciones)>=3 )) &&
      (((item.parking=="" || item.parking!="") && (this.parking=="") )|| ((this.parking=='1' || this.parking=='2'||this.parking=='3')&& parseInt(this.parking)==parseInt(item.parking)) || (this.parking=='4' && parseInt(item.parking)>=4 )) &&

      (((item.bannos=="" || item.bannos!="") && (this.BuscarBannos=="") )|| ((this.BuscarBannos=='1' || this.BuscarBannos=='2')&& parseInt(this.BuscarBannos)==parseInt(item.bannos)) || (this.BuscarBannos=='3' && parseInt(item.bannos)>=3)) &&
   
      (item.nombre.toLocaleLowerCase().indexOf(this.zona.toLocaleLowerCase())>-1)&&
      (item.divisa.toLocaleLowerCase().indexOf(this.filterDivisa.toLocaleLowerCase())>-1) &&
      (((item.estado=='' ||item.estado!="") && ( !this.filterUsado && !this.filterEnConstruccion && !this.filterNueva && !this.filterUsada && !this.filterReformado)) || ((item.estado=='Usado') && this.filterUsado)||((item.estado=='En construcción')&& this.filterEnConstruccion)
      ||((item.estado=='Nueva') && this.filterNueva)||((item.estado=='Segundo Uso' && this.filterUsada))||((item.estado=='Reformado'  && this.filterReformado)) ) 
      && (this.precio!=null && eval(this.precio + this.operacionesPrecio + item.precio2)) &&
      ((item.url!='' && this.web=='')||(item.url.toLocaleLowerCase().indexOf(this.web.toLocaleLowerCase())>-1)) &&
      (item.cambios[0].estado.toLocaleLowerCase().indexOf(this.cambio.toLocaleLowerCase())>-1)&&
      (((parseInt(item.anno)>= parseInt(this.filterDate(this.FechaMinima)) && parseInt(item.anno)<= parseInt(this.filterDate(this.FechaMaxima)) && this.FechaMinima!='' && this.FechaMaxima!=''  ) || ((item.anno!='' || item.anno=='' || item.anno=="N/D") && this.FechaMinima=='' && this.FechaMaxima=='' ) ));
      
    }) ;
  
  return this.posts2;
  },

  venta(){
    
    this.ventas= this.strings;
    return this.strings.filter((item) => {
    return  (item.toLowerCase().indexOf("venta")>-1);
  
  })
  },
  alquileres(){
    this.alquiler= this.strings;
    return this.alquiler.filter((item) => {
    return  (item.toLowerCase().indexOf("alquiler en")>-1);
  
  })
  },
  alquilerAmueblados(){

    this.aamueblado= this.strings;
    return this.aamueblado.filter((item) => {
    return  item.toLowerCase().indexOf("alquiler amueblado")>-1;
  
  })
  },

},
methods:{

   formatNumber(number) {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1,';
  return number.toString().replace(exp,rep);

},
   filterDate(date) {
  return date.slice(0, 10);
},
  changueFormat(value){
   const i=value.length;
    return value[0].estado;
            },
  typeFormat(value){
    if(value==1)return "Venta";
    else if(value==2)  return "Alquiler";
    else if(value==3) return "Alquiler Amueblado";           
            },
  priceFormat(value){
                return '$ ' + value;
            },

filter(post){
var show=true;
//console.log(this.precio !="" && eval(parseInt(this.precio) + this.operacionesPrecio+parseInt(post.precio2)));
if(this.BuscarTipo==0 && this.BuscarHabitaciones==0 && this.filterUsado==0 && this.filterEnConstruccion==0
&& this.filterNueva==0 && this.filterField==''){
  show=true;
 
}else if((post.tipo!=this.BuscarTipo && this.BuscarTipo)){
  show=false;
}
else if((post.anuncio.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase())<0)
||(post.bannos.toLocaleLowerCase().indexOf(this.BuscarBannos)<0)
||post.habitaciones.toLocaleLowerCase().indexOf(this.BuscarHabitaciones.toLocaleLowerCase())<0 
||(post.estado!='Usado' && this.filterUsado)||(post.estado!='En construcción' && this.filterEnConstruccion)||(post.estado!='Nueva' && this.filterNueva)
||(post.divisa.toLocaleLowerCase().indexOf(this.filterDivisa.toLocaleLowerCase())<0)
||(post.nombre.toLocaleLowerCase().indexOf(this.zona.toLocaleLowerCase())<0)
){
  show=false
}else if((this.precio !="")){
show=eval(parseInt(this.precio) + this.operacionesPrecio+parseInt(post.precio2));
}
 return show;

/*  return this.datosPaginados= post.filter(casas => casas.anuncio.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase())>-1 
|| casas.nombre.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase())>-1 
|| casas.habitaciones.toLocaleLowerCase().indexOf(this.BuscarHabitaciones.toString().toLocaleLowerCase())>-1
|| casas.tipo.toLocaleLowerCase().indexOf(this.BuscarTipo.toString())>-1) */
//console.log(post.nombre+""+ this.filterField);
//return ((post.nombre.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase()) > -1 ||post.anuncio.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase()) >-1)); 
 //|| post.tipo.toLocaleLowerCase().indexOf(this.BuscarTipo.toLocaleLowerCase()) > -1 || post.habitaciones.toLocaleLowerCase().indexOf(this.BuscarHabitaciones.toLocaleLowerCase()>0));
},
check(post){

if(this.Active==post.anuncio){
   this.Active='';
}else{ this.Active=post.anuncio;}

 console.log(this.Active+"");
},
filterPost(posts){
 

  return this.posts.filter((item)=>{
      return (item.anuncio.toLowerCase().indexOf(this.filterField.toLowerCase())>-1)&&
      (item.tipo.toLowerCase().indexOf(this.BuscarTipo.toLocaleLowerCase())>-1)&&
      item.habitaciones.toLocaleLowerCase().indexOf(this.BuscarHabitaciones.toLocaleLowerCase())>-1
    });

} ,
typeZone(post){
      
      for (let index = 0; index < this.parametros.zonas.length; index++) {
   
        if(post.nombre.toLocaleLowerCase().indexOf(this.parametros.zonas[index].zona.toLocaleLowerCase())>-1){
          
          return this.parametros.zonas[index].zona;
        }
      }
      return "Indefinido";
    },
    typeState(post){
      
      for (let index = 0; index < this.parametros.estados.length; index++) {
   
        if(post.cambios[0].estado.toLocaleLowerCase().indexOf(this.parametros.estados[index].nombre.toLocaleLowerCase())>-1){
          
          return this.parametros.estados[index].nombre;
        }
      }
      return "Indefinido";
    },
    Date1(post){
      
      for (let index = 0; index < this.parametros.estados.length; index++) {
   
        if(post.cambios[0].estado.toLocaleLowerCase().indexOf(this.parametros.estados[index].nombre.toLocaleLowerCase())>-1){
          
          return this.parametros.estados[index].nombre;
        }
      }
      return "Indefinido";
    },
    Date2(post){
      
      for (let index = 0; index < this.parametros.estados.length; index++) {
   
        if(post.cambios[0].estado.toLocaleLowerCase().indexOf(this.parametros.estados[index].nombre.toLocaleLowerCase())>-1){
          
          return this.parametros.estados[index].nombre;
        }
      }
      return "Indefinido";
    },

totalPaginas(){
return Math.ceil(this.filterArray.length /this.elementosPorPagina)
},
getDataPagina(noPagina){
this.paginaActual=noPagina;
this.datosPaginados=[];
let ini=(noPagina * this.elementosPorPagina) -this.elementosPorPagina;
let fin=(noPagina* this.elementosPorPagina);

 
 this.datosPaginados= this.filterArray.slice(ini,fin);
for (let index = 0; index < this.datosPaginados.length; index++) {
var element = this.datosPaginados[index];
//console.log(element+"");
}


},
getPreviousPage(){
if(this.paginaActual > 1){
  this.paginaActual--;
}
this.getDataPagina(this.paginaActual);
},
getNextPage(){
if(this.paginaActual < this.totalPaginas()){
  this.paginaActual++;
}
this.getDataPagina(this.paginaActual);
} ,
resetFilter(){
  this.filterField='',
  this.Active='',
  this.BuscarHabitaciones='',
  this.BuscarBannos='',
  this.BuscarTipo='',
  this.filterUsado=0; //Segundo Uso o Usado ?
  this.filterEnConstruccion=0, //En construcción
  this.filterNueva=0,
  this.operacionesPrecio="<=",
  this.precio=0,
  this.filterDivisa='',
  this.zona='',
  this.paginaActual=1,
  this.filterReformado='',
  this.filterUsada='',
  this.web='',
  this.cambio='',
  this.FechaMinima='',
   this.FechaMaxima='',
   this.parking=''
},
downloadExl() {
                let wb = XLSX.utils.table_to_book(document.getElementById('excel')),
                    wopts = {
                        bookType: 'xlsx',
                        bookSST: false,
                        type: 'binary'
                    },
                    wbout = XLSX.write(wb, wopts);
 
               FileSaver.saveAs(new Blob([this.s2ab(wbout)], {
                    type: "application/octet-stream;charset=utf-8"
                                 }), "Formulario de perfil personal.xlsx");
            },
            s2ab(s) {
                if (typeof ArrayBuffer !== 'undefind') {
                    var buf = new ArrayBuffer(s.length);
                    var view = new Uint8Array(buf);
                    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
                    return buf;
                } else {
                    var buf = new Array(s.length);
                    for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
                    return buf;
                }
              }

},
async created(){
  
axios.get('https://rd.eisi.cc/WS/listadoGeneral.php', {
headers: {
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers':'*',
      
      
  }
}).then(res => {
  
  console.log(res);
  this.posts=res.data.listado;

}).catch(err => {
  console.log(err.response);
}); 

axios.get('https://rd.eisi.cc/WS/parametros.php', {
headers: {
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers':'*',
  }
}).then(res => {
  
  console.log(res);
  this.parametros=res.data.listado;

}).catch(err => {
  console.log(err.response);
}); 

},
beforeUpdate(){

 this.getDataPagina(this.paginaActual);
 
 var arrayDeCadenas = this.parametros.estadistica.split("<BR>");
   //document.write('<p>La cadena original es: "' + arrayDeCadenas + '"');
   //document.write('<br>El separador es: "' + separador + '"');
   //document.write("<br>El array tiene " + arrayDeCadenas.length + " elementos: ");

  //  for (var i=0; i < arrayDeCadenas.length; i++) {
  //     document.write(arrayDeCadenas[i] + " / ");
  //  }

   this.strings=arrayDeCadenas;
}
}
</script>

<style>

@import '../assets/css/codebase.min.css';

</style>