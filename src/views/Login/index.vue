<template>
  <div>
    <h1>登录页</h1>
    vuex:{{ $store.state.moduleA.num }}
    <div>
      <van-button type="primary" @click="goLogin">跳转到首页</van-button>
    </div>
    <!-- <slot-child>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </slot-child> -->

    <!-- 1、解构赋值 -->
    <!-- <slot-child #default="{ item, index }">
      {{item.name}} --- {{index}}
    </slot-child> -->

    <!-- 2、template形式作用域 -->
    <!-- <slot-child>
      <template v-slot:default="slotProps">
        <i class="fas fa-check"></i>
        <span class="green">???{{ slotProps.item.name }}</span>
      </template>
    </slot-child> -->

    <!-- 3、template形式作用域, vue3形式 -->
    <!-- <slot-child>
      <template #default="slotProps">
        <i class="fas fa-check"></i>
        <span class="green"> ///{{ slotProps.item.name }}</span>
      </template>
    </slot-child> -->

    <!-- <child>组件可能被很多地方调用，在很多时候列表循环的样式不是<child>所控制的，而是外部控制的 -->
    <!-- <slot-child></slot-child>
    <slot-child></slot-child> -->
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import qs from 'query-string'
import SlotChild from '@/components/SlotChild.vue'

const router = useRouter()
const params = qs.parse(window.location.search)
console.log('params', params)
export default defineComponent({
  name: 'Login',
  components: {
    SlotChild
  },
  setup() {
    SlotChild
    const state = reactive({
      slotProps: {
        item: 'hello'
      }
    })
    const goLogin = () => {
      router.push('/')
    }
    return {
      goLogin,
      ...toRefs(state)
    }
  }
})
</script>
