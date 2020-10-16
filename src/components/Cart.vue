 <template>
  <div class="Cart">
    <h1>Cart</h1>
    <!-- ... -->
    <!-- <div v-for="item in items" :key="item.itemid">
      <b-card class="mb-3 store-item img-top">
        <b-img :src="item.image" class="thumbnail fluid" />
        <b-card-text>
          <h5>{{ item.manufacturer}}{{' '}}{{ item.productName }}</h5>
          <p>{{ item.description }}</p>
        </b-card-text>
      </b-card>
    </div> -->
  </div>
</template>

 <script>
// import items from "../../public/items.json";
import LayoutDefault from "./layouts/LayoutDefault.vue";

export default {
  name: "Cart",
  // computed: {
  //   cartItems() {
  //     return this.$store.cartItems;
  //   },
  // },
  // data() {
  //   return {
  //     items: items,
  //   };
  // },
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
};
</script>
<style scoped>
</style>