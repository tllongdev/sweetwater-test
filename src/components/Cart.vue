 <template>
  <div class="Cart" v-if="cartItems.length">
    <div class="items-div">
      <b-card
        v-for="item in cartItems"
        :key="item.itemid"
        class="m-1 store-item"
      >
        <b-row>
          <b-col>
            <b-img
              center
              :src="item.image"
              class="thumbnail fluid store-item-img"
            />
          </b-col>
          <b-col cols="8" md="6">
            <b-card-text class="mt-2">
              <h5>{{ item.manufacturer }}{{ " " }}{{ item.productName }}</h5>
              <p>{{ item.description }}</p>
              <p>Price: ${{ item.price.toFixed(2) }}</p>
            </b-card-text>
          </b-col>
          <b-col cols="6" md="2">
            <p>Quantity:</p>
            <input
              :value="item.quantity"
              @input="updateQty(item, $event.target.value)"
              type="number"
              min="1"
              :max="item.available"
            />
            <br />
            <b-button
              @click="removeFromCart(item)"
              size="sm"
              style="background-color: #0072ba"
              class="mt-2"
            >
              Remove</b-button
            >
          </b-col>
          <b-col cols="6" md="2"
            ><strong
              >${{ (item.price * item.quantity).toFixed(2) }}</strong
            ></b-col
          >
        </b-row>
      </b-card>
    </div>
    <b-container fluid class="subtotal m-5">
      <div>
        <strong class="mr-3">SUBTOTAL:</strong>
        <strong>
          ${{
            cartItems
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)
          }}
        </strong>
      </div>
    </b-container>
  </div>
  <div class="noCart" v-else>There are no items in your cart.</div>
</template>

 <script>
import LayoutDefault from "./layouts/LayoutDefault.vue";

export default {
  name: "Cart",
  computed: {
    cartTotal() {
      return this.$store.cartItems;
    },
  },
  data() {
    return {
      cartItems: this.$store.state.cartItems,
    };
  },
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
  updated() {
    localStorage.sws_cart = JSON.stringify(this.$store.state.cartItems);
  },
  methods: {
    removeFromCart(item) {
      this.$store.dispatch("removeFromCart", item);
    },
    updateQty(item, value) {
      this.$store.dispatch("updateQty", { item: item, value: value });
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
  flex-wrap: wrap;
}
.noCart {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.items-div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.subtotal {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
}
.store-item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>