import React from 'react';
import Chess123Icon from './assets/Chess123Icon.png';
import './App.css';

function Chess123Home(props) {
    document.title = '123 Chess - Learn Chess for Toddlers';

    return (
        <div className='Chess123Home'>
            <h1 id='title'>123 Chess</h1>
            <h3 id='subtitle'>A Chess Learning App for Toddlers</h3>

            <div style={{maxWidth: '800px', margin: '40px auto', padding: '0 20px'}}>
                <div style={{textAlign: 'center'}}>
                    <div id='downloadContainer'>
                        <img id='icon' src={Chess123Icon} alt='123 Chess App Icon' />
                        <button id='downloadButton' onClick={() => {
                            window.open('https://apps.apple.com/us/app/123-chess/id6754496034', '_blank')
                        }} />
                    </div>
                </div>
            </div>

            <footer className='bottomBar'>
                <a className='bottomBarButton' href='mailto:chesstacticsapp@gmail.com'>Contact Us</a>
                <a className='bottomBarButton' href='/123chess/privacy'>Privacy Policy</a>
            </footer>
        </div>
    );
}

export default Chess123Home;
