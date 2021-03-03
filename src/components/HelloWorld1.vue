<template>
  <h1>{{ msg }}</h1>
  <h1>你好1</h1>
  <div class="test" @click="handleClick">
    <span>嵌套css1</span>
    <div>geolocation: {{ geolocation.num }} - latitude: {{ geolocation.wordCOunt }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  inject: ['location', 'geolocation'],
  setup: (props, { emit }) => {
    const count = ref(0)
    const useScriptSetup = ref(false)
    const useTsPlugin = ref(false)
    const handleClick = () => {
      console.log('props', props.msg);
      emit('changeValue', 'name')
    }
    return { count, useScriptSetup, useTsPlugin, handleClick }
  }
})
</script>

<style scoped lang='less'>
a {
  color: #42b983;
}
label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.test {
}
span {
  background-color: pink;
}
</style>
