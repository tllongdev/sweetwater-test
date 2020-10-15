 <template>
  <footer position="bottom" class="fluid-container footer">
    <div></div>
  </footer>
</template>

 <script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  min-height: 60px;
  background: lightgrey;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}
/* .fluid-container.footer > *:last-child {
    margin-bottom: 0px;
    color: #fff;
} */
</style>