import './modules/polyfill'
import Game from './modules/game'

window.addEventListener('load', async () => {
  const game = new Game()
  await game.initTexture()
  game.initControls()

  game.start()
})

