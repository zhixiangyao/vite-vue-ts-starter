declare module 'APlayer' {
  interface Audio {
    name: string
    artist: string
    url: string
    lrc: string
    cover: string
  }

  interface APlayer {
    new (target: {
      container: any
      fixed?: boolean
      mini?: boolean
      volume: number
      theme: string
      lrcType: number
      audio: Audio[]
    }): any
  }

  const APlayer: APlayer

  export { APlayer as default }
}
