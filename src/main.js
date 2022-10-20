import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LoadScript from "vue-plugin-load-script";
import VueExcelXlsx from "vue-excel-xlsx";
    createApp(App).use(LoadScript).use(VueExcelXlsx).use(store).use(router).mount('#app')
    
