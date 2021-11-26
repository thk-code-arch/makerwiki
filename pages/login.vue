<template>
  <div class="main text-center flex flex-col items-center justify-center">
   <SignIn/> 
  </div>
</template>

<script>
import SignIn from "~/components/auth/Signin"
export default {
  components:{SignIn},
  head() {
    return {
    }
  }
}
</script>
