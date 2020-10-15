 <template>
    <div class="wrapper">
      <Header/>
      <div class="content"></div>
      <Footer />
    </div>
</template>

 <script>
import Header from "./common/Header";
import Footer from "./common/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
</style>