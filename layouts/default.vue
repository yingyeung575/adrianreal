<template>
  <div>
    <jheader />
    <nuxt />
    <jfooter />
  </div>
</template>

<script>
import jheader from '~/components/jheader'
import jfooter from '~/components/jfooter'
export default{
  components:{
    jheader,jfooter
  }
}
</script>