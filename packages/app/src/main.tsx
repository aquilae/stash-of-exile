import { render } from 'preact'
import './index.css'

render(<Splash />, document.getElementById('app') as HTMLElement)

function Splash() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h3>Nothing to see here. Yet.</h3>
    </div>
  )
}
