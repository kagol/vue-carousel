import { defineComponent, renderSlot, useSlots, watch, toRefs, ref } from 'vue'

// Components
import DCarouselIndicator from './components/carousel-indicator'
import DCarouselPrev from './components/carousel-prev'
import DCarouselNext from './components/carousel-next'

// Composables
import usePage from './composables/use-page'
import useAutoplay from './composables/use-autoplay'

// Util
import { formatPageIndex } from './carousel.util'

// Props/Types
import { carouselProps, CarouselProps } from './carousel.type'

// SCSS
import './carousel.scss'

export default defineComponent({
  name: 'DCarousel',
  components: {
    DCarouselIndicator,
    DCarouselPrev,
    DCarouselNext,
  },
  props: carouselProps,
  emits: ['update:modelValue'],
  setup(props: CarouselProps, { slots, emit }) {
    const { modelValue, autoplay, interval } = toRefs(props)

    const { pageIndex, prevPage, nextPage, setPageIndex } = usePage(modelValue.value)
    const { startPlay, stopPlay } = useAutoplay(nextPage, interval.value)

    const count = useSlots().default().filter(item => typeof item.type !== 'symbol').length
    const defaultFormattedPageIndex = formatPageIndex(pageIndex.value, count)
    const formattedPageIndex = ref(defaultFormattedPageIndex)

    const launchTimer = (autoplay) => {
      if (autoplay) {
        startPlay()
      } else {
        stopPlay()
      }
    }

    launchTimer(autoplay.value)

    watch(autoplay, (newVal) => {
      launchTimer(newVal)
    })

    watch(modelValue, (newVal: number) => {
      pageIndex.value = newVal
    })

    watch(pageIndex, (newVal: number) => {
      emit('update:modelValue', newVal)
      formattedPageIndex.value = formatPageIndex(pageIndex.value, count)
    })

    return () => {
      return (
        <div class="devui-carousel">
          <div
            class="devui-carousel-item-container"
            style={{
              width: count * 100 + '%',
              left: -(formattedPageIndex.value - 1) * 100 + '%',
            }}
          >
            {renderSlot(useSlots(), 'default')}
          </div>
          {
            slots.pagination
            ? renderSlot(useSlots(), 'pagination', {
              prevPage, nextPage
            }) : <>
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
            slots.indicator({
              count,
              pageIndex: formattedPageIndex.value,
              setPageIndex
            })
          ) : (
            <DCarouselIndicator
              count={count}
              v-model={formattedPageIndex.value}
            ></DCarouselIndicator>
          )}
        </div>
      )
    }
  },
})
