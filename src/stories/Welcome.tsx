import React,{FC} from 'react'

export interface Props {
    className?: string,
    text?: string
}

const Welcome: FC<Props> = ({className, text}) => {
  return (
    <div className={className}>{text}</div>
  )
}

export default Welcome