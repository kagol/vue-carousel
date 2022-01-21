import { extractPropTypes } from 'vue'

export const carouselProps = {
  modelValue: {
    type: Number,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 3000,
  }
}

export type CarouselProps = extractPropTypes<typeof carouselProps>
