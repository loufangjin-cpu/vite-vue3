<template>
  <div>
    <!-- <div class="header">
      具名插槽
      header:
      <slot name="header">里面内容不展示</slot>
    </div>
    <div class="content">
      content:
      <slot></slot>
    </div>
    <div class="footer">
      footer:
      <slot name="footer"></slot>
    </div> -->
    <!-- 作用域插槽 ： 组件可能被很多地方调用，在很多时候列表循环的样式不是<child>所控制的，而是外部控制的，外部来指定如何修改如何渲染 -->
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <slot :item='item'> </slot>
        <!-- {{item.name}} -->
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name:'slotChild',
  setup() {
    let list = reactive([
        { name: 'zs'  },
        { name: 'ls'  },
        { name: 'ww'  }
    ])
    return {
      list
    }
  },
})
</script>
