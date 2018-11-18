import React, { Component } from 'react'
import TacticVideo from './assets/TacticVideo.mp4'
import Tactic from './assets/Tactic.png'
import Frame from './assets/Frame.png'
import Icon from './assets/Icon.png'
import Arrow from './assets/Arrow.png'
import './App.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showVideo: false
        }
    }

    showSolution() {
        if (this.state.showVideo) {
            return;
        }

        this.setState({ showVideo: true })
    }

    render() {
        document.title = 'Chess Tactics & Lessons'
        let content
        let showSolutionContent
        if (this.state.showVideo) {
            content = (
                <video class='insideFrame' autoPlay muted loop>
                    <source src={TacticVideo} type="video/mp4" />
                </video>
            )
            showSolutionContent = (
                <div id='solutionText'>
                    <p>
                        <i>Too hard?</i> Don't worry - there are lessons for beginner and intermediate players.
                    </p>
                    <p>
                        <i>Too easy?</i> The app has tactics that even grandmasters struggle to get!
                    </p>
                </div>
            )
        } else {
            content = (
                <img class='insideFrame' src={Tactic} alt='An example tactic from the app.'/>
            )
            showSolutionContent = (
                <div>&nbsp;</div>
            )
        }

        return (
            <div>
                <h1 id='title'>Chess Tactics & Lessons</h1>
                <h3 id='subtitle'>An app by Lockwood Productions LLC</h3>
                <div>
                    <div id='homeContainer'>
                        <div id='column1'>
                        <div id='downloadContainer'>
                                <img id='icon' src={Icon} alt='App Icon' />
                                <button id='downloadButton' onClick={() => {
                                    window.open('https://itunes.apple.com/us/app/chess-tactics-and-lessons/id531275673?mt=8&at=10l6Xd', '_blank')
                                    }} />
                            </div>
                            <div id='infoContainer'>
                                <ul>
                                    <li>
                                        Over 22,000 free tactics
                                    </li>
                                    <li>
                                        Learn strategy with guided lessons
                                    </li>
                                    <li>
                                        Content for beginner, intermediate and grandmaster players
                                    </li>
                                    <li>
                                        Practice openings
                                    </li>
                                    <li>
                                        Create your own tactics for the world to play
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div id='column2'>
                            <div class='frame'>
                                <img class='frame' src={Frame} alt='' />
                                {content}
                            </div>
                        </div>
                        <div id='column3'>
                            <div id='showSolutionContainer'>
                                <button class='actionButton' onClick={() => this.showSolution()}>Show Solution</button>
                                <img id='arrow' src={Arrow} alt='' />
                                {showSolutionContent}
                            </div>
                        </div>
                    </div>
                    <footer class='bottomBar'>
                        <a class='bottomBarButton' href='mailto:chesstacticsapp@gmail.com'>Contact Us</a>
                        <a class='bottomBarButton' href='terms'>Terms of Service</a>
                        <a class='bottomBarButton' href='privacy'>Privacy Policy</a>
                    </footer>
                </div>

                <link rel="preload" as="video" href={TacticVideo} />
            </div>
        )
    }
}

export default Home