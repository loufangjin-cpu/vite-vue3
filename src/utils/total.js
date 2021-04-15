// vue3 新特性

//1、 app.config.globalProperties.$filters = {
//   currencyUSD(value = 0) {
//     return '$' + value
//   }
// }

//2、 全局自定义
// app.directive('focus', {
//   // When the bound element is mounted into the DOM...
//   mounted(el) {
//       // Focus the element
//       console.log(el);
//       el.focus()
//   }
// })

//3、 Composition API 来替换mixins extends
// const { count, double, user, increment } = useCounter()

//useCounter.js
// import { ref, computed } from 'vue'

// export default function () {
//   const count = ref(0)
//   const user = { name: 'compositon' }
//   const double = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }
//   return {
//     count,
//     double,
//     increment,
//     user,
//   }
// }

{
  /*4、 <component :is="componentShow" /> */
}

//5、 v-model:hidden 替换:hidden.async

{
  /* <ChildComponent v-model:title="pageTitle" v-model:content="pageContent" />

<!-- would be shorthand for: -->

<ChildComponent
  :title="pageTitle"
  @update:title="pageTitle = $event"
  :content="pageContent"
  @update:content="pageContent = $event"
/> */
}
//6、 v-bind="$attrs"

{
  /*7、 <template #footer>插槽</template> */
}
// 红包雨，大转盘，小程序营销组件，小程序商城常用组件
// https://github.com/sunniejs/sol-weapp