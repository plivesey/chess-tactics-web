import React, { Component } from 'react'
import './App.css'

class Tactic extends Component {
    componentDidMount() {
        window.location.replace('chesstcs://t/' + this.props.match.params.id)
    }

    render() {
        return (
            <div id='tacticContainer'>
                <div id='tacticContent'>
                    <h1 id='title'>Chess Tactics & Lessons</h1>
                    <h3 id='subtitle'>An app by Lockwood Productions LLC</h3>
                    <div className='pleaseDownloadDiv'><i>Please download the app to play the tactic, see an explanation, and view the comments.</i></div>
                    <div className='tacticsDiv'>
                        <button id='downloadButton' onClick={() => {
                            window.open('https://itunes.apple.com/us/app/chess-tactics-and-lessons/id531275673?mt=8&at=10l6Xd', '_blank')
                        }} />
                    </div>
                    <div className='tacticsDiv'>
                        <a href={'chesstcs://t/' + this.props.match.params.id}>I already have the app!</a>
                        <div id='tacticsSpacer' />
                        <a href='/'>Home</a>
                    </div>
                </div>
                <footer class='bottomBar'>
                    <a class='bottomBarButton' href='mailto:chesstacticsapp@gmail.com'>Contact Us</a>
                    <a class='bottomBarButton' href='terms'>Terms of Service</a>
                    <a class='bottomBarButton' href='privacy'>Privacy Policy</a>
                </footer>
            </div>
        )
    }
}

export default Tactic