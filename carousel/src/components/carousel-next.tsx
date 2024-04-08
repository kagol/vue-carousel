import { defineComponent, renderSlot } from 'vue'
import DArrowRight from './arrow-right'
import './carousel-next.scss'

export default defineComponent({
  name: 'DCarouselNext',
  setup(props, { slots, attrs }) {
    return () => {
      return <>
        {
          slots.default
          ? renderSlot(slots, 'default')
          : <>
            <div class="xui-arrow xui-arrow-right" {...attrs}>
              <DArrowRight />
            </div>
          </>
        }
      </>
    }
  }
})
