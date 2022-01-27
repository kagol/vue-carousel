import { onUnmounted } from 'vue'

export default function useAutoplay(next, interval) {
  let timerId

  const startPlay = () => {
    stopPlay()

    timerId = setInterval(next, interval)
  }
  
  const stopPlay = () => {
    if (timerId) {
      clearInterval(timerId)
      timerId = null
    }
  }

  onUnmounted(() => {
    stopPlay()
  })

  return {
    startPlay, stopPlay
  }
}