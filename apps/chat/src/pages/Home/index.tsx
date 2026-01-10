import { useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import DirectMessages from './DirectMessages'
import Display from './Display'
import './styles.scss'

const Home = () => {
    const [filter, setFilter] = useState('')

    return (
        <div className="home-container">
            <div className="home-chat-container">
                <h1 className="home-chat-title">Chat</h1>
                <div className="home-chat-input">
                    <input
                        placeholder="Buscar"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    <IoMdSearch className="home-chat-input-icon" />
                </div>
                <div className="home-chat-content">
                    <DirectMessages filter={filter} />
                </div>
            </div>
            <Display />
        </div>
    )
}

export default Home
