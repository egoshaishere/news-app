<template>
  <div>
    <v-btn class="btn" v-on:click="click">test</v-btn>



    <v-btn class="btn-outlined" outlined v-on:click="click">
      <div class="text-outlined">test</div>
    </v-btn>

    <div class="test" v-if="prz"></div>
  </div>
</template>

<script>
export default {
    name: "Sandbox",
    data() {
      return {
        prz: false

      }
    },
    methods: {
        click(){
            console.log('uipg')
            console.log(this.prz)
            this.prz = !this.prz
        }
    }
}
</script>

<style>

.test {
  border: solid 2px red;
  width: 300px;
  height: 150px;
}

.btn {
  background-color: #505fce;
}

.btn-outlined {
  /* color: #505fce;
  background: #505fce; */
  border-color: #505fce;
  text-decoration-color: #505fce;
}

.text-outlined {
  color: white;
}


</style>