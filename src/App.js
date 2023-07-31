import { useState } from 'react'
import './App.css'
import ChangeState from './ChangeState'
import People from './People.js'
import ProductData from './product'

function App() {
    const [state, setState] = useState()
    const handleChangeGlasses = (event) => {
        setState(event)
    }
    return (
        <div className='App'>
        <h1 style={{marginTop:'0px', paddingTop:'30px'}}>TRY GLASSES APP ONLINE</h1>
            <People data={state} />
            <div className='glasses__root'>
                {ProductData.map((e) => (
                    <ChangeState data={e} key={e.id} onChange={handleChangeGlasses} />
                ))}
            </div>
        </div>
    )
}

export default App
