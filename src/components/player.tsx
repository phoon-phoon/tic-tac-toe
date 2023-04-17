import { FC } from 'react'

interface PlayerComponentPropsType {
    title: string
}

const PlayerComponent: FC<PlayerComponentPropsType> = (props) => {
    return (
        <div className='inline-block bg-white px-[0.75rem] py-[0.25rem] rounded'>
            {props.title} 
        </div>
    )
}

export default PlayerComponent