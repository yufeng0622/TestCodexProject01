import { useState } from 'react'
import './index.css'

function App() {
    const [gameState, setGameState] = useState('START') // START, PLAYING, RESULT

    return (
        <div className="container">
            <div className="scanlines"></div>
            <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>PIXEL QUIZ</h1>
            <p style={{ marginBottom: '2rem', color: '#888' }}>INSERT COIN TO START</p>

            {gameState === 'START' && (
                <div className="pixel-card">
                    <p>LOADING SYSTEM...</p>
                </div>
            )}
        </div>
    )
}

export default App
