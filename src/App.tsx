import { FC } from 'react'

import PlayerComponent from './components/player'
import { SettingTypes } from './interfaces/board.types'
import BoardComponent from './components/board'


const settings: SettingTypes = {
  board: {
    grid: 3
  }
}

const App: FC = () => {

  return (
    <div className="h-full w-full p-5 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="grid h-screen place-items-center">
        <div className="flex flex-col">
          <div>
            <div className="flex h-full items-center">
              <div className='flex-auto text-right'>
                <PlayerComponent
                  title='Player 1'
                />
              </div>
              <div className='flex-none text-center px-3'>VS</div>
              <div className='flex-auto text-left'>
                <PlayerComponent
                  title='Player 2'
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <BoardComponent settings={settings} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
