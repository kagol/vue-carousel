import { defineComponent, renderSlot, useSlots, watch, toRefs } from 'vue'
import usePage from './composables/use-page'
import DCarouselIndicator from './components/carousel-indicator'
import DArrowLeft from './components/arrow-left'
import DArrowRight from './components/arrow-right'
import './carousel.scss'

export default defineComponent({
  name: 'DCarousel',
  components: {
    DCarouselIndicator,
  },
  props: {
    modelValue: {
      type: Number,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const { modelValue } = toRefs(props)
    const { pageIndex, prevPage, nextPage } = usePage(1)
    const count = useSlots().default().length

    watch(modelValue, (newVal: number) => {
      pageIndex.value = newVal
    })

    watch(pageIndex, (newVal: number) => {
      emit('update:modelValue', newVal)
    })

    return () => {
      return (
        <div class="devui-carousel">
          <div
            class="devui-carousel-item-container"
            style={{
              width: count * 100 + '%',
              left: -(pageIndex.value - 1) * 100 + '%',
            }}
          >
            {renderSlot(useSlots(), 'default')}
          </div>
          <div class="devui-carousel-pagination">
            <button
              class="arrow arrow-left"
              onClick={() => {
                emit('update:modelValue', props.modelValue - 1)
                prevPage()
              }}
            >
              <DArrowLeft />
            </button>
            <button
              class="arrow arrow-right"
              onClick={() => {
                emit('update:modelValue', props.modelValue + 1)
                nextPage()
              }}
            >
              <DArrowRight />
            </button>
          </div>
          {slots.indicator ? (
            slots.indicator()
          ) : (
            <DCarouselIndicator
              count={count}
              v-model={pageIndex.value}
            ></DCarouselIndicator>
          )}
        </div>
      )
    }
  },
})
