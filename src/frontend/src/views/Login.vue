<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="container">
      <img alt="Vue logo" src="../assets/SmartFactoryLogo.png">

      <div>
        <form action={{/mainscreen}} style="max-width:500px;margin:auto">
          <h2 class="loginlabel">Login</h2>
          <div class="input-container">
            <i class="fa fa-user icon"></i>
            <input class="input-field" type="text" placeholder="Username" name="usrnm">
          </div>

          <div class="input-container">
            <i class="fa fa-key icon"></i>
            <input class="input-field" type="password" placeholder="Password" name="psw">
          </div>

        </form>
        <router-link to="/mainscreen"><button class="btn">Login</button></router-link>
      </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

//  export default {
//    name: 'Home',
//    components: {
//      HelloWorld
//    }
//  }
</script>

<style scoped>

.loginlabel{
  color: white;
/*  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
}

.container  {
  width: 30%;
  margin: auto;
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

.input-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}

.icon {
  padding: 10px;
  background: dodgerblue;
  color: white;
  min-width: 40px;
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
}

.input-field:focus {
  border: 2px solid dodgerblue;
}

.btn {
  background-color: dodgerblue;
  color: white;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.btn:hover {
  opacity: 1;
}

</style>
