<template>
  <div class="LayoutDefault">
    <Header />
    <main class="LayoutDefault__main container">
      <slot/>
    </main>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Header from "../common/Header";
// import Footer from "../common/Footer";

export default {
  name: "LayoutDefault",
  components: {
    Header,
    // Footer,
  },
};
</script>