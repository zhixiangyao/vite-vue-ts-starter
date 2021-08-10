<script lang="ts" setup>
import { onMounted } from 'vue'
import 'APlayer/dist/APlayer.min.css'

const initAPlayer = async () => {
  const { default: APlayer } = await import('APlayer')

  const ap = new APlayer({
    container: document.getElementById('APlayer'),
    fixed: true,
    volume: 0.2,
    theme: '#1da1f2',
    lrcType: 3,
    audio: [
      {
        name: "Don't say lazy",
        artist: 'TV动画《轻音少女》 - 唯・澪・中律・紬',
        url: "https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/mp3/Don't say lazy.mp3",
        lrc: "https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/lrc/Don't say lazy.lrc",
        cover: "https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/images/music/Don't say lazy.png",
      },
      {
        name: 'Pride',
        artist: 'TV动画《听我的电波吧》片尾曲 - 遥海',
        url: 'https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/mp3/Pride.mp3',
        lrc: 'https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/lrc/Pride.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/images/music/Pride.png',
      },
    ],
  })
  ap.lrc.hide()
}

onMounted(initAPlayer)
</script>

<template>
  <div id="APlayer" />
</template>
