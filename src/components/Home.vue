 <template>
  <div class="Home">
    <div class="items-div">
      <b-card
        v-for="item in products"
        :key="item.itemid"
        class="m-1 store-item"
      >
        <b-img
          center
          :src="item.image"
          class="thumbnail fluid store-item-img"
        />
        <b-card-text class="mt-2">
          <h5>{{ item.manufacturer }}{{ " " }}{{ item.productName }}</h5>
          <p>{{ item.description }}</p>
        </b-card-text>
        <b-button @click="addToCart(item)" style="background-color: #4e8410">
          Add to Cart</b-button
        >
      </b-card>
    </div>
  </div>
</template>

 <script>
import LayoutDefault from "./layouts/LayoutDefault.vue";

export default {
  name: "Home",
  data() {
    return {
      products: this.$store.state.inventory,
    };
  },
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
  updated() {
    localStorage.sws_cart = JSON.stringify(this.$store.state.cartItems);
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch("addToCart", item);
      localStorage.sws_cart = JSON.stringify(this.$store.state.cartItems);
    },
    testThis(item) {
      item.quantity = 1;
      console.log(item);
    },
  },
};
</script>

<style scoped>
.Home {
  display: flex;
  justify-content: center;
}
.items-div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.store-item {
  max-width: 300px;
  min-height: 400px;
}
.store-item-img {
  min-height: 120px;
}
</style>