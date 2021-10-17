import React from 'react'

import { Timeline } from 'react-twitter-widgets'

const About = () => (
  <div className='grid sm:grid-cols-2 gap-1 text-center'>
    <h2 className='col-span-full'>Hello, I'm Andrey Kudinov</h2>
    <p className='col-span-full'>A Front End Developer from Russia.</p>

    <p className='sm:hidden'>some text</p>
    <iframe width="320" height="490" src="https://www.instagram.com/p/B6NlQ37ABm7/embed">
      Ваш браузер не поддерживает плавающие фреймы!
    </iframe>
    <p className='hidden sm:block'>some text</p>

    <p className=''>some text</p>
    <iframe width="320" height="440" src="https://www.instagram.com/p/CRdik2MN5TB/embed">
      Ваш браузер не поддерживает плавающие фреймы!
    </iframe>

    <p className='col-span-full'>some text</p>

    <div className="">
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'andrey__kudinov'
        }}
        options={{
          height: '500',
          width: '320'
        }}
      />
    </div>

  </div>
)

export default About
