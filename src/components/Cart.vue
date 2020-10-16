 <template>
  <div class="Cart">
    <div class="items-div">
      <b-card
        v-for="item in cartItems"
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
          <p>Price: ${{ item.price.toFixed(2) }}</p>
        </b-card-text>
        <b-button
          @click="removeFromCart(item)"
          size="sm"
          style="background-color: #0072ba"
        >
          Remove</b-button
        >
      </b-card>
    </div>
  </div>
</template>

 <script>
import LayoutDefault from "./layouts/LayoutDefault.vue";

export default {
  name: "Cart",
  // computed: {
  //   cartItems() {
  //     return this.$store.cartItems;
  //   },
  // },
  data() {
    return {
      cartItems: this.$store.state.cartItems,
    };
  },
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
  methods: {
    removeFromCart(item) {
      this.$store.dispatch("removeFromCart", item);
    },
    testThis(item) {
      item.quantity = 1;
      console.log(item);
    },
  },
};
</script>

<style scoped>
.Cart {
  display: flex;
  justify-content: center;
}
.items-div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.store-item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.store-item-img {
  min-height: 120px;
}
</style>