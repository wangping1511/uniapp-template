import {
  defineConfig,
  type Preset,
  presetIcons,
  presetUno,
} from 'unocss'

import {
  presetApplet,
  presetRemRpx,
} from 'unocss-applet'

const isMp = process.env?.UNI_PLATFORM?.startsWith('mp') ?? false
const presets: Preset[] = []
if (isMp) {
  // 使用小程序预设
  presets.push(presetApplet())
}
else {
  presets.push(presetUno())
}

export default defineConfig({
  presets: [
    ...presets,
    presetRemRpx({ baseFontSize: 4 }),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  rules: [
    ['p-safe', {}]
  ],
  shortcuts: [
    ['center', 'flex justify-center items-center'],
    ['between', 'flex justify-between items-center '],
  ],
})
