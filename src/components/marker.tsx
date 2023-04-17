import React, { FC } from 'react'
import { IconType } from 'react-icons'

interface MarkerComponentPropsType {
    icon: IconType
}

interface IconPropsType {
    icon: IconType
}

const Icon: FC<IconPropsType> = (props) => {
    return React.createElement(props.icon, { width: 12, height: 12, color: '#000' })
}

const MarkerComponent: FC<MarkerComponentPropsType> = (props) => {
    return (
        <div className='xl:min-w-[10rem] xl:min-h-[10rem]'>
            <Icon icon={props.icon} />
        </div>
    )
}

export default MarkerComponent