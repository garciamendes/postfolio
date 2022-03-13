// React
import React from 'react'

// Project
import '../../styles/card.scss'
import { ICard } from './types'

export function Card({ image, title, technologies }: ICard) {

  return (
    <div className='container_main_card'>
      <span className='container_image'>
        <img src={image} />
      </span>
      <div className='container_info_card'>
        <div className='title'>
          <h3>{title}</h3>
        </div>
        <div className='technologies'>
          <div className='content_techs'>
            {technologies.map((tech) => {
              return (
                <span className='name_tech'>{tech.name}</span>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}