/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// 传入参数
interface ISlideConfig {
  width?: number
  height?: number
  unit?: 'px' | 'em' | 'rem'
  defaultSlideIndex?: number
  autoPlay?: boolean
  autoPlayTimeout?: number
  clickWaitTime?: number
  /** 是否显示指示点 */
  indicatorDots?: boolean
  /** 指示点颜色 */
  indicatorColor?: string
  /** 当前选中的指示点颜色 */
  indicatorActiveColor?: string
  /** 指示点样式 dot: 圆点  block: 方块 */
  dotStyle?: 'dot' | 'block'
  curSlideFun?: (value: number) => void
}

interface ISlideState extends ISlideConfig {
  curSlideIndex: number
  slideCount: number
  isMouseDown: boolean
  startX: number
  isPlaying: boolean
  // 定时器
  clickTimeout: number | null | ReturnType<typeof setTimeout>
  autoPlayInterval: number | null | ReturnType<typeof setTimeout>
}

class Slider {
  public root: string
  public container: HTMLElement
  public wrapper: HTMLElement
  public prevButton: HTMLElement
  public nextButton: HTMLElement
  private state: ISlideState

  constructor(root: string, config: ISlideConfig) {
    this.root = root
    if (!document.querySelector(root)) {
      throw new Error('cannot find root!')
    }
    this.container = document.querySelector(root)!
    this.wrapper = document.querySelector(`${root} .swiper-container`)!
    if (this.container === null || this.wrapper === null) {
      throw new Error('cannot find container or wrapper')
    }
    // 左右按钮的逻辑
    this.prevButton = document.querySelector(`${root} .swiper-button.prev`)!
    this.nextButton = document.querySelector(`${root} .swiper-button.next`)!
    // 内部状态
    this.state = {
      width:
        config.width ??
        (this.container.parentNode as HTMLElement).offsetWidth ??
        600,
      height: config.height ?? 300,
      unit: config.unit ?? 'px',
      defaultSlideIndex: config.defaultSlideIndex ?? 0,
      isPlaying: config.autoPlay ?? false,
      autoPlay: config.autoPlay ?? false,
      autoPlayTimeout: config.autoPlayTimeout ?? 2000,
      clickWaitTime: config.autoPlayTimeout ?? 2000,
      isMouseDown: false,
      startX: 0,
      clickTimeout: null,
      autoPlayInterval: null,
      curSlideIndex: config.defaultSlideIndex ?? 0,
      slideCount: this.wrapper?.children.length ?? 0,
      indicatorDots: config.indicatorDots ?? true,
      curSlideFun: config.curSlideFun,
    }
    this.init()
  }

  // 用于在 this.state.clickWaitTime 时间后重新开始自动播放
  private restartPlay() {
    if (this.state.clickTimeout) {
      clearTimeout(this.state.clickTimeout)
    }
    this.state.clickTimeout = setTimeout(() => {
      this.startPlay()
    }, this.state.clickWaitTime)
  }
  // 初始化
  private init() {
    // 给左右按钮添加点击事件
    this.prevButton?.addEventListener('click', () => {
      this.slidePrev()
      if (this.state.isPlaying) {
        this.stopPlay()
        this.restartPlay()
      }
    })
    this.nextButton?.addEventListener('click', () => {
      this.slideNext()
      if (this.state.isPlaying) {
        this.stopPlay()
        this.restartPlay()
      }
    })

    // 给容器添加拖拽事件
    this.wrapper?.addEventListener('mousedown', e => {
      this.onMouseDown(e)
    })
    this.wrapper?.addEventListener('mousemove', e => {
      this.onMouseMove(e)
    })
    // mouseup挂在windows上，防止鼠标拖出后无法监听
    window.addEventListener('mouseup', () => {
      this.onMouseUp()
    })

    this.container.style.width =
      (this.state.width || 0) + (this.state.unit || '')
    this.container.style.height =
      (this.state.height || 0) + (this.state.unit || '')
    this.wrapper.style.width = this.state.slideCount * 100 + '%'
    this.wrapper.style.left = `-${this.state.curSlideIndex * 100}%`
    for (let i = 0; i < this.wrapper.children.length; i++) {
      // 设置每个 slide 的宽高
      ;(this.wrapper.children[i] as HTMLElement).style.width =
        (this.state.width || 0) + (this.state.unit || '')
      ;(this.wrapper.children[i] as HTMLElement).style.height =
        (this.state.height || 0) + (this.state.unit || '')
      // 添加按钮
      if (this.state.indicatorDots && document) {
        document
          .querySelector(`${this.root} .swiper-dots-group [data-index="${i}"]`)
          ?.addEventListener('click', () => {
            this.slideTo(i)
            if (this.state.isPlaying) {
              this.stopPlay()
              this.restartPlay()
            }
          })
      }
    }
    if (this.state.autoPlay) this.startPlay()
  }

  // 拖拽事件
  private onMouseDown(e: MouseEvent) {
    this.stopPlay()
    this.state.isMouseDown = true
    this.state.startX = e.pageX
    this.wrapper.style.transition = 'none'
  }
  private onMouseMove(e: MouseEvent) {
    if (!this.state.isMouseDown) return
    if (!this.state.unit) {
      this.state.unit = 'px'
    }
    if (!this.state.width) {
      this.state.width = 1
    }
    let left = this.wrapper.offsetLeft
    const edge = [0, -((this.state.slideCount - 1) * this.state.width)]
    left += e.pageX - this.state.startX
    // 检查是否越界
    if (+left >= Number(edge[1])) left = 0
    if (+left <= Number(edge[1])) left = Number(edge[1])
    // 没越界，更新
    this.state.startX = e.pageX
    this.wrapper.style.left = left + this.state.unit
  }
  private onMouseUp() {
    if (!this.state.isMouseDown) return
    if (!this.state.width) {
      this.state.width = 1
    }
    this.state.isMouseDown = false
    const leftRef = -this.wrapper.offsetLeft + (1 / 2) * this.state.width
    const index = Math.floor(leftRef / this.state.width)
    this.wrapper.style.transition = 'left 0.5s'
    this.slideTo(index)
    if (this.state.autoPlay) this.restartPlay()
  }
  /* --------- External API --------- */
  public slideTo(index: number) {
    if (index < 0 || index >= this.state.slideCount) return false
    this.state.curSlideIndex = index
    this.state.curSlideFun && this.state.curSlideFun(index)
    this.wrapper.style.left = `-${index * 100}%`
    return true
  }
  public slideNext() {
    if (this.state.curSlideIndex === this.state.slideCount - 1) {
      this.slideTo(0)
    } else this.slideTo(this.state.curSlideIndex + 1)
  }
  public slidePrev() {
    if (this.state.curSlideIndex === 0) {
      this.slideTo(this.state.slideCount - 1)
    } else this.slideTo(this.state.curSlideIndex - 1)
  }
  public startPlay() {
    this.state.isPlaying = true
    this.state.autoPlayInterval = setInterval(() => {
      this.slideNext()
    }, this.state.autoPlayTimeout)
  }
  public stopPlay() {
    this.state.isPlaying = false
    // 定时重启也需要清除
    if (this.state.clickTimeout) {
      clearTimeout(this.state.clickTimeout)
    }
    if (this.state.autoPlayInterval) {
      clearInterval(this.state.autoPlayInterval)
    }
  }
}

export default Slider
