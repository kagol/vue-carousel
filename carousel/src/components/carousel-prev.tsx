import { defineComponent, renderSlot } from 'vue'
import DArrowLeft from './arrow-left'
import './carousel-prev.scss'

export default defineComponent({
  name: 'CarouselPrev',
  setup(props, { slots, attrs }) {
    return () => {
      return <>
        {
          slots.default
          ? renderSlot(slots, 'default')
          : <>
            <div class="xui-arrow xui-arrow-left" {...attrs}>
              <DArrowLeft />
            </div>
          </>
        }
      </>
    }
  }
})
