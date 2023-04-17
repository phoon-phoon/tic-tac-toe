import React, { FC } from 'react'

import { BsCircle } from 'react-icons/bs'

import { SettingTypes } from '../interfaces/board.types'

import MarkerComponent from './marker'

interface BoardComponentPropsType {
    settings: SettingTypes
}

const BoardComponent: FC<BoardComponentPropsType> = (props) => {
    const { settings } = props

    return (
        <div className={`grid grid-cols-${settings.board.grid}`}>
            {
                Array(settings.board.grid).fill(0).map((r, rI) => {
                    return Array(settings.board.grid).fill(0).map((c, cI) => {
                        return (
                            <React.Fragment key={`grid-col-${rI}-${cI}`}>
                                <MarkerComponent icon={BsCircle} />
                            </React.Fragment>
                        )
                    })
                })
            }
        </div>
    )

    // return (
    //     <table className='min-w-full table-fixed'>
    //         <tbody>
    //             {
    //                 Array(settings.board.grid).fill(0).map((r, rI) => {
    //                     return (
    //                         <tr key={`grid-row-${rI}`}>
    //                             {
    //                                 Array(settings.board.grid).fill(0).map((c, cI) => {
    //                                     return (
    //                                         <td key={`grid-col-${rI}-${cI}`} className='border border-white'>
    //                                             <MarkerComponent
    //                                                 icon={BsCircle}
    //                                             />
    //                                         </td>
    //                                     )
    //                                 })
    //                             }
    //                         </tr>
    //                     )
    //                 })
    //             }
    //         </tbody>
    //     </table>
    // )
}

export default BoardComponent

