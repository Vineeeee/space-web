import { createGlobalStyle } from 'styled-components'
import { Main } from './components/main'

function App() {

  return (
    <>
      <Global />
      <Main />
    </>
  )
}

export default App

const Global = createGlobalStyle`
*{margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: "Mohave", sans-serif;
  }

  h1,p,h2,h3,h6,input{
  color: #ffffff;
  letter-spacing: 3px;
}
`

