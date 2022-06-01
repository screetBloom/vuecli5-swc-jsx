<script>
export default {
  props: ['msg'],
  render() {
    const item = {name: '测试'}

    // 当 {...{}} 后还有其它属性时会报错: Module not found: Error: Can't resolve 'react' 
    return (
      <div>
        <br />
        <p>JSX子组件</p>
        <p>msg: {this.msg}</p>
        <br />
        <div {...{ props: {} }} key={item.name}>测试</div>
      </div>
    )
  },
}
</script>
