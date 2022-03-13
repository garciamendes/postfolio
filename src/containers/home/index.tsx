// React
import React, { useEffect, useState } from 'react'

// Third party
import { AiFillGithub } from 'react-icons/ai'

// Project
import '../../styles/home.scss'
import { DarkMode } from '../../components/Theme'
import { Card } from '../../components/Card'
import api from '../../services/api.json'
import { ICard } from '../../components/Card/types'
import NoData from '../../static/images/not_data.svg'

export function Home() {
  const [headerColor, setHeaderColor] = useState('')

  const listerScrollEvent = () => {
    window.scrollY < 30 ? setHeaderColor('') : setHeaderColor('scroll_header')
  }

  useEffect(() => {
    window.addEventListener('scroll', listerScrollEvent)
  }, [])

  return (
    <div className='container_main_home_page'>
      <div className={`header ${headerColor}`}>
        <DarkMode />
        <a href='https://github.com/garciamendes' target='_blank'>
          <AiFillGithub className='icon_github' />
          Github
        </a>
      </div>
      <div className='container_home_page'>
        {(api.clones.length || api.challenges.length || api.projects.length >= 1) ? (
          <>
            {api.clones.length >= 1 && (
              <div className='container_clones'>
                <>
                  <h3 className='title_containers'>Clones</h3>
                  <div className='content_card'>
                    {api.clones.map(({ id, image, title, technologies }: ICard) => {
                      return (
                        <Card
                          key={id}
                          image={image}
                          title={title}
                          technologies={technologies}
                        />
                      )
                    })}
                  </div>
                </>
              </div>
            )}
            {api.challenges.length >= 1 && (
              <div className='container_clones'>
                <>
                  <h3 className='title_containers'>Desafios</h3>
                  <div className='content_card'>
                    {api.challenges.map(({ id, image, title, technologies }: ICard) => {
                      return (
                        <Card
                          key={id}
                          image={image}
                          title={title}
                          technologies={technologies}
                        />
                      )
                    })}
                  </div>
                </>
              </div>
            )}
            {api.projects.length >= 1 && (
              <div className='container_clones'>
                <>
                  <h3 className='title_containers'>Desafios</h3>
                  <div className='content_card'>
                    {api.projects.map(({ id, image, title, technologies }: ICard) => {
                      return (
                        <Card
                          key={id}
                          image={image}
                          title={title}
                          technologies={technologies}
                        />
                      )
                    })}
                  </div>
                </>
              </div>
            )}
          </>
        ) : (
          <div className='empty-api'>
            <img src={NoData} />
          </div>
        )}
      </div>
    </div>
  )
}