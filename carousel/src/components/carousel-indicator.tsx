import { defineComponent } from 'vue'
import './carousel-indicator.scss'

export default defineComponent({
  name: 'DCarouselIndicator',
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
    const indicatorArr = Array.from(new Array(props.count).keys())
    
    return () => {
      return <div class="devui-carousel-indicator">
        {
          slots.default
          ? slots.default()
          : indicatorArr.map((item, index) => {
            return <div class={`devui-carousel-indicator-item${props.modelValue === index+1 ? ' active' : ''}`} onClick={() => emit('update:modelValue', index + 1)}></div>
          })
        }
      </div>
    }
  }
})