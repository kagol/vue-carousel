import { defineComponent, renderSlot } from 'vue'
import DArrowLeft from './arrow-left'
import './carousel-prev.scss'

export default defineComponent({
  name: 'DCarouselPrev',
  setup(props, { slots, attrs }) {
    return () => {
      return <>
        {
          slots.default
          ? renderSlot(slots, 'default')
          : <>
            <div class="devui-arrow devui-arrow-left" {...attrs}>
              <DArrowLeft />
            </div>
          </>
        }
      </>
    }
  }
})
