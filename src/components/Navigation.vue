<template>
  <header class="container add-city">
    <nav>
      <span>Add City</span>
      <div class="right">
        <i class="far fa-edit"></i>
        <i class="fas fa-sync"></i>
        <i class="fas fa-plus"></i>

      </div>
    </nav>
  </header>

</template>

<script>
export default {
  name: "Navigation",

};
</script>

<style lang="css" scoped>
.container {
  padding:0 20px;
}
nav{
  display: flex;
  color: white;
  padding: 30px 0;
  justify-content: space-between;
}
.add-city{
  background-color: #313640;
}

/*.right{*/
/*  i:nth-child(2),*/
/*  i:nth-child(3) {*/
/*    margin-left: 16px;*/
/*  }*/
/*}*/

.fa-sync{
  margin-left: 16px;
}
.fa-plus{
  margin-left: 16px;
}
i{
  font-size: 20px;
}

span{
  font-weight: 600;
}


</style>