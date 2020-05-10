<template>
  <div id="app">
    <div class="header">
      <slot name="header" />
    </div>
    <div class="content">
      <slot />
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wrapper'
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 10px 40px;
  box-sizing: border-box;

  border-bottom: 0.0625rem solid rgb(234, 238, 245);
  background: white;

  z-index: 10;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px 40px;
  box-sizing: border-box;

  border-top: 0.0625rem solid rgb(234, 238, 245);
  background: white;

  z-index: 10;
}

.content {
  padding: 100px 40px;
}
</style>
