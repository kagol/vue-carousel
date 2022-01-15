import { defineComponent, renderSlot } from 'vue'
import DArrowLeft from './arrow-left'
import DArrowRight from './arrow-right'
import './carousel-pagination.scss'

export default defineComponent({
  name: 'DCarouselPagination',
  emits: ['prev', 'next'],
  setup(props, { slots, emit }) {
    return () => {
      return <>
        {
          slots.default
          ? renderSlot(slots, 'default')
          : <>
            <div class="carousel-pagination prev-page" onClick={() => emit('prev')}>
              <DArrowLeft />
            </div>
            <div class="carousel-pagination next-page" onClick={() => emit('next')}>
              <DArrowRight />
            </div>
          </>
        }
      </>
    }
  }
})
