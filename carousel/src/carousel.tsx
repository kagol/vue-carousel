import { defineComponent, renderSlot, useSlots, watch, toRefs } from 'vue'
import usePage from './composables/use-page'
import DCarouselIndicator from './components/carousel-indicator'
import DCarouselPrev from './components/carousel-prev'
import DCarouselNext from './components/carousel-next'
import './carousel.scss'

export default defineComponent({
  name: 'DCarousel',
  components: {
    DCarouselIndicator,
    DCarouselPrev,
    DCarouselNext,
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
          {
            slots.pagination
            ? renderSlot(slots, 'pagination')
            : <>
              <DCarouselPrev onClick={() => {
                emit('update:modelValue', props.modelValue-1)
                prevPage()
              }} />
              <DCarouselNext onClick={() => {
                emit('update:modelValue', props.modelValue+1)
                nextPage()
              }} />
            </>
          }
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
