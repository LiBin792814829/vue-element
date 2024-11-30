<script>
export default {
  data() {
    return {};
  },
  methods: {
    getData() {},
  },
  // eslint-disable-next-line no-unused-vars
  render(h) {
    return (
      <div class="test">
        <p>测试内容</p>
        <el-button size="mini" type="danger">
          danger
        </el-button>
      </div>
    );
  },
};
</script>

<style lang="scss" scoped>
.test {
  color: $--primary-color;
}
</style>
