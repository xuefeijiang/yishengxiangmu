<template>
  <div id="app">
    <!-- <Home></Home>     -->
    <!-- <Doctor></Doctor> -->
    <!-- <List></List> -->
    <!-- <Zixun></Zixun> -->
    <!-- <Fuwu></Fuwu> -->
    <!-- <Login></Login> -->
    <!-- <Reg></Reg> -->
     <router-view></router-view>  
  </div>
</template>

<script>

 import Home from './pages/Home.vue'
import Doctor from './pages/Doctor.vue'
import List from './pages/List.vue'
 import Zixun from './pages/Zixun.vue'
 import Fuwu from './pages/Fuwu.vue'
 import Login from './pages/Login.vue'
 import Reg from './pages/Reg.vue'

export default {
  name: 'app',
  components: {
  //  Doctor,
   Home,
  //  List,
  //  Zixun,
  Reg,
  Login,
  Fuwu
  }
}
</script>


