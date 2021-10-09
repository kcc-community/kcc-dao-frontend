import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './style/Global'
import ResetCSS from './style/ResetCSS'
import Providers from './Providers'
import App from './pages/App'
import './utils/i18n'
import './assets/font/style.css'
import './style/antd.less'

if(process.env.NODE_ENV !== 'development'){
  console.log = function(){ };
}

window.addEventListener('error', () => {
  localStorage?.removeItem('redux_localstorage_simple_lists')
})


ReactDOM.render(
  <Providers>
    <ResetCSS />
    <GlobalStyle />
    <App /> 
  </Providers>,
  document.getElementById('root')
)
