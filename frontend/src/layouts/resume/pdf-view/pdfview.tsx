import CardButtonExpand from "../components/card-expand";
import SectionHeader from "../components/section-header";
import './styles/pdf-view.css'

//todo - always autofocus on top of page
export default function PdfView() {
    return (
        <div className="pdf-view">
            <SectionHeader sectionColor={'gray'} isWrapped={true} sectionTitle={'PDF VIEW'}>
                <CardButtonExpand title={'Resume'}>
                    <iframe className='resume-viewer' src="pdf/mycv.pdf"></iframe>
                </CardButtonExpand>
            </SectionHeader>
        </div>
    );
}