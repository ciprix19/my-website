import SectionHeader from "../components/section-header";
import './styles/pdf-view.css'


//todo - always autofocus on top of page
export default function PdfView() {
    return (
        <>
            <SectionHeader sectionColor={'gray'} isWrapped={true} sectionTitle={'PDF VIEW'}>
                <iframe className='resume-viewer' src="pdf/mycv.pdf"></iframe>
            </SectionHeader>
        </>
    );
}