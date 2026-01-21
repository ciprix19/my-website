import './styles/resume.css'
import WebView from './web-view/webview';

export default function Resume() {

    function handleOnClick() {

    }

    return (
        <section id='resume'>
            <h1>Resume</h1>
            <section className='mode-buttons-section'>
                <div className='div-buttons'>
                    <button className='button-card' disabled={true}>Web interactive</button>
                    <a href='pdf/mycv.pdf' rel='noopener noreferrer' target='_blank'>
                        <button className='button-card' onClick={handleOnClick}>Open PDF</button>
                    </a>
                </div>
            </section>
            <WebView />
        </section>
    );
}
