import { defineComponent, toRefs, watch } from 'vue'
// import { usePage } from 'vueuse-components'
import usePage from '../composables/use-page'
import './carousel-indicator.scss'

export default defineComponent({
  name: 'CarouselIndicator',
  props: {
    modelValue: {
      type: Number,
    },
    count: {
      type: Number,
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    const { modelValue } = toRefs(props)
    const { pageIndex, setPageIndex } = usePage(modelValue.value)
    const indicatorArr = Array.from(new Array(props.count).keys())

    watch(modelValue, (newVal: number) => {
      pageIndex.value = newVal
    })

    watch(pageIndex, (newVal: number) => {
      emit('update:modelValue', newVal)
    })
    
    return () => {
      return <div class="xui-carousel-indicator">
        {
          slots.default
          ? slots.default({
            pageIndex: pageIndex.value,
            setPageIndex
          })
          : indicatorArr.map((item, index) => {
            return <div class={`xui-carousel-indicator-item${pageIndex.value === index+1 ? ' active' : ''}`} onClick={() => setPageIndex(index + 1)}></div>
          })
        }
      </div>
    }
  }
})