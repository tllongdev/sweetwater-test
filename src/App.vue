 <template>
  <div id="app">
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import items from "../public/items.json";

export default {
  name: "App",
  data() {
    return {
      layout: "div",
    };
  },
  mounted() {
    if (localStorage.sws_cart) {
      this.$store.dispatch("setCartItems", JSON.parse(localStorage.sws_cart));
    } else {
      this.$store.dispatch("setCartItems", items);
      localStorage.sws_cart = JSON.stringify(this.$store.state.cartItems);
    }
  },
};
</script>

<style>
</style>
