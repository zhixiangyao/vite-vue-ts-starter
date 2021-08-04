import { ref, onMounted } from 'vue'

import type { Ref } from 'vue'

import { debounce } from '/@/utils'

/**
 * A basic recreation of http://www.cesmes.fi/#pallo.swf using JavaScript and Canvas
 * Particle system based on http://www.zen-sign.com/experiments/jsemitter2/
 * Patrick H. Lauke / February 2011
 * Zhixiang Yao / March 2021
 */
class Emitter {
  private canvas: HTMLCanvasElement | null
  private sizeLimit: number
  private particles: Particle[]
  private canvasContext: CanvasRenderingContext2D | null

  constructor(canvas: HTMLCanvasElement | null) {
    this.canvas = canvas
    this.sizeLimit = 5
    this.particles = []
    this.canvasContext = this.canvas && this.canvas.getContext('2d')
  }

  /**
   *
   * @param x
   * @param y
   * @param size
   * @param h
   * @param s
   * @param l
   */
  private createParticle(
    x: number,
    y: number,
    size: number,
    h: number,
    s: number,
    l: number,
  ): void {
    const particle = new Particle()
    particle.x = x
    particle.y = y
    particle.size = size
    particle.h = h
    particle.s = s
    particle.l = l
    this.particles.push(particle)
  }

  private pop(event: MouseEvent): void {
    let x = 0
    let y = 0
    let popped = false

    if (event instanceof MouseEvent) {
      x = event.offsetX
      y = event.offsetY
    }

    for (let i = 0; i < this.particles.length; i++) {
      if (
        !popped &&
        this.particles[i].size > this.sizeLimit &&
        this.particles[i].x - this.particles[i].size < x &&
        this.particles[i].y - this.particles[i].size < y &&
        this.particles[i].x + this.particles[i].size > x &&
        this.particles[i].y + this.particles[i].size > y
      ) {
        this.particles[i].size = this.particles[i].size / 2
        this.particles[i].h = this.particles[i].h + Math.random() * 60 - 30
        this.particles[i].s = Math.round(Math.random() * 50 + 50)
        this.particles[i].l = Math.round(Math.random() * 50) + 25
        this.createParticle(
          this.particles[i].x + this.particles[i].size,
          this.particles[i].y - this.particles[i].size,
          this.particles[i].size,
          Math.round(this.particles[i].h + Math.random() * 60 - 30),
          Math.round(Math.random() * 50 + 50),
          Math.round(Math.random() * 50) + 25,
        )
        this.createParticle(
          this.particles[i].x + this.particles[i].size,
          this.particles[i].y + this.particles[i].size,
          this.particles[i].size,
          Math.round(this.particles[i].h + Math.random() * 60 - 30),
          Math.round(Math.random() * 50 + 50),
          Math.round(Math.random() * 50) + 25,
        )
        this.createParticle(
          this.particles[i].x - this.particles[i].size,
          this.particles[i].y + this.particles[i].size,
          this.particles[i].size,
          Math.round(this.particles[i].h + Math.random() * 60 - 30),
          Math.round(Math.random() * 50 + 50),
          Math.round(Math.random() * 50) + 25,
        )
        this.particles[i].x = this.particles[i].x - this.particles[i].size
        this.particles[i].y = this.particles[i].y - this.particles[i].size
        popped = true
      }
    }
    window.requestAnimationFrame(() => {
      this.draw()
    })
  }

  private draw(): void {
    if (this.canvasContext === null) throw new Error('canvasContext 不能为 null')

    this.canvasContext.clearRect(0, 0, 600, 600)

    for (let i = 0; i < this.particles.length; i++) {
      this.canvasContext.fillStyle =
        'hsl(' +
        this.particles[i].h +
        ', ' +
        this.particles[i].s +
        '%, ' +
        this.particles[i].l +
        '%)'
      this.canvasContext.beginPath()
      this.canvasContext.arc(
        this.particles[i].x,
        this.particles[i].y,
        this.particles[i].size,
        0,
        Math.PI * 2,
        true,
      )
      this.canvasContext.fill()
    }
  }

  public init(): void {
    this.reset()

    const debouncedPop = debounce(
      (e: MouseEvent) => {
        e.preventDefault()
        this.pop(e)
      },
      4,
      true,
    )
    this.canvas && this.canvas.addEventListener('mousemove', debouncedPop, false)
  }

  private reset(): void {
    this.particles = []
    this.createParticle(
      300,
      300,
      300,
      Math.round(Math.random() * 359),
      Math.round(Math.random() * 50) + 50,
      Math.round(Math.random() * 50) + 25,
    )
    this.draw()
  }
}

class Particle {
  public x: number
  public y: number
  public size: number
  public h: number
  public s: number
  public l: number

  constructor() {
    this.x = 0
    this.y = 0
    this.size = 0
    this.h = 0
    this.s = 0
    this.l = 0
  }
}

export function useEmitter() {
  const EmitterCanvas: Ref<HTMLCanvasElement | null> = ref(null)

  onMounted(() => {
    const emitter: Emitter = new Emitter(EmitterCanvas.value)
    emitter.init()
  })

  return EmitterCanvas
}
