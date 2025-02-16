import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let post: string = '송파구 맛집 리스트';
  // document.querySelector('h4').innerHTML = post;

  return (
    <div className='App'>
      <div className='black-nav'>
        {/* 이런 식으로 id값에 변수를 바인딩을 걸어줄 수도 있음. */}
        <h4 style = { {color : '#7367f0', fontSize : '16px'} }>Ahnsta_Blog</h4>
      </div>
      <h4 id={post}>{ post }</h4>
    </div>
  )
}

export default App
