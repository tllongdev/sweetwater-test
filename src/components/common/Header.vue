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
        <!-- <b-link href="/" class="ml-auto mr-3">Shop</b-link> -->
        <!-- <b-link href="/cart"> -->
        <b-icon
          icon="cart3"
          font-scale="2"
          class="ml-auto mr-3"
          style="color: #4e8410"
          @click="navToCart"
        ></b-icon>
        <!-- </b-link> -->

        <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

        <!-- <b-collapse id="nav-collapse" is-nav> -->
        <!-- <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav class="ml-auto"> -->
        <!-- <b-nav-item href="/">Home</b-nav-item> -->
        <!-- <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form> -->

        <!-- <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown> -->

        <!-- <b-nav-item-dropdown right> -->
        <!-- Using 'button-content' slot -->
        <!-- <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown> -->
        <!-- </b-navbar-nav> -->
        <!-- </b-collapse> -->
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
