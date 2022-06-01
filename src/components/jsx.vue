<script>
export default {
  props: ['msg'],
  render() {
    return (
      <div>
        <br/>
        <p>JSX子组件</p>
        <p>msg: {this.msg}</p>
        <br/>
      </div>
    )
  },
}
</script>
