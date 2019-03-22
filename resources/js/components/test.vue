<template>
  <div>

    <div id="titre">
      <img src="../../../public/img/telecom_logo_quadri_longueur.png">
    </div>



      <div class="card" >
       <img class="card-img-top" src="../../../public/img/telecom_logo_quadri_longueur.png" alt="Card image cap"  style=" border-bottom: solid #eaecef 1px;">
       <div class="card-body">
         <div class="leftform">

                  <div class="form-label-group">
                    <input type="email" id="inputEmail" v-model="text" class="form-control" placeholder="Nom d'utilisateur" required autofocus>
                    <label for="inputText"></label>
                  </div>

                  <div class="form-label-group">
                    <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Mot de passe" required>
                    <label for="inputPassword"></label>
                  </div>

                  <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">Se souvenir du nom d'utilisateur</label>
                  </div>
                  <button class="btn btn-lg  btn-block text-uppercase text-white" v-on:click="verif" style="background-color: #00549c;">Connexion</button>
                  <hr class="my-4">


         </div>
           <div class="rightform">
             <p class="card-text" style="color:#e5341c">Vous avez oublié votre nom d'utilisateur et/ou votre mot de passe ?</p>

             <p>Votre navigateur doit supporter les cookies</p>

             <p>Des cours peuvent être accessibles aux visiteurs anonymes</p>
             <a href="#" class="btn" style="background-color:#eaecef;">Connexion anonyme</a>
           </div>


       </div>
     </div>


  </div>

</template>


<script>
export default {
  name: "test",
  data: function(){
    return{
      test:"",
      text:"",
      password:""
    }
  },
  methods:{
    verif: function(){
      if (this.text==="théo.tse1"&&this.password==="ClidQc36g"){
        console.log("ok");
        this.$router.push({ path: '/escapeGame/public/1' });
      }

      if (this.text==="théo.tse2"&&this.password==="wbfliWPy9"){
        console.log("ok");
        this.$router.push({ path: '/escapeGame/public/2' });
      }

      if (this.text==="théo.tse3"&&this.password==="me4LA1Pgd"){
        console.log("ok");
        this.$router.push({ path: '/escapeGame/public/3' });
      }

      if (this.text==="théo.tse4"&&this.password==="GmsCs2d1B"){
        console.log("ok");
        this.$router.push({ path: '/escapeGame/public/4' });
      }

      if (this.text==="théo.tse5"&&this.password==="5EoR6elpqu"){
        console.log("ok");
        this.$router.push({ path: '/escapeGame/public/5' });
      }
    }
  }


}
</script>


<style scoped>

</style>
