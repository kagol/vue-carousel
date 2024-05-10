import { defineComponent, renderSlot, useSlots, watch, toRefs, ref } from 'vue'
// import { usePage } from 'vueuse-components'
import usePage from './composables/use-page'

// Components
import CarouselIndicator from './components/carousel-indicator'
import CarouselPrev from './components/carousel-prev'
import CarouselNext from './components/carousel-next'

// Composables
import useAutoplay from './composables/use-autoplay'

// Util
import { formatPageIndex } from './carousel.util'

// Props/Types
import { carouselProps, CarouselProps } from './carousel.type'

// SCSS
import './carousel.scss'

export default defineComponent({
  name: 'Carousel',
  components: {
    CarouselIndicator,
    CarouselPrev,
    CarouselNext,
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

    watch(formattedPageIndex, (newVal: number) => {
      pageIndex.value = newVal
    })

    return () => {
      return (
        <div class="xui-carousel">
          <div
            class="xui-carousel-item-container"
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
              <CarouselPrev onClick={() => {
                emit('update:modelValue', props.modelValue-1)
                prevPage()
              }} />
              <CarouselNext onClick={() => {
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
            <CarouselIndicator
              count={count}
              v-model={formattedPageIndex.value}
            ></CarouselIndicator>
          )}
        </div>
      )
    }
  },
})
