import { useEffect, useState, type Dispatch } from 'react';
import './styles/resume.css'
import WebView from './web-view/webview';
import PdfView from './pdf-view/pdfview';

function ProfileSection() {
    return (
        <section className='profile-section'>
            <div>
                <img src='images/profile-pic.jpg1' alt='profile-pic'></img>
                <h1>Andrei Ciprian Barbuta</h1>
                <br></br>
                <h2>SOFTWARE DEVELOPER</h2>
                <span><img src='images/profile-pic.jpg1' alt='location-icon'></img>Bucharest, Romania</span>
            </div>
        </section>
    );
}

function ButtonResumeMode({ description, mode, onClickSetMode, isDisabled } : { description: String, mode: String, onClickSetMode: any, isDisabled: boolean }) {

    function handleOnClick() {
        if (mode === 'web') {
            onClickSetMode('pdf');
        } else {
            onClickSetMode('web');
        }
    }

    return (
        <button className='card' onClick={handleOnClick} disabled={isDisabled}>{description}</button>
    );
}
function ModeButtonsSection({ mode, onClickSetMode } : { mode : String, onClickSetMode : any }) {
    return (
        <section className='mode-buttons-section'>
            <div className='div-buttons'>
                <ButtonResumeMode description={'Web interactive'} mode={mode} onClickSetMode={onClickSetMode} isDisabled={mode === 'web' ? true : false} />
                <ButtonResumeMode description={'Classic PDF'} mode={mode} onClickSetMode={onClickSetMode} isDisabled={mode === 'pdf' ? true : false} />
            </div>
        </section>
    );
}

export default function Resume() {
    const [mode, setMode] = useState('web');

    return (
        <main>
            <ProfileSection />
            <ModeButtonsSection mode={mode} onClickSetMode={setMode}/>
            {mode === 'web' ? <WebView /> : <PdfView />}
        </main>
    );
}
