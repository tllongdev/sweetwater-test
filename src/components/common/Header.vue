 <template>
  <header>
    <div>
      <b-navbar toggleable="xl" type="light" variant="Light">
        <b-navbar-brand @click="navToHome">
          <img
            src="https://media.sweetwater.com/api/i/f-webp__w-190__q-90__ha-f4546d53fe7e2931__hmac-a688b52eda3ea82987d2f7ba7fdad6cc81f97f4f/header/logo/sweetwater-logo.png.auto.webp"
            alt="Sweetwater"
          />
        </b-navbar-brand>
        <b-icon
          icon="cart3"
          font-scale="2"
          class="ml-auto mr-3"
          style="color: #4e8410"
          @click="navToCart"
        ></b-icon>
      </b-navbar>
    </div>
  </header>
</template>

 <script>
export default {
  name: "Header",
  methods: {
    navToCart() {
      this.$router.push("/cart").catch(() => {});
    },
    navToHome() {
      this.$router.push("/").catch(() => {});
    },
  },
};
</script>
