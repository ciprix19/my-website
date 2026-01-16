import EducationPathSection from "./components/education-path-section";
import ProfessionalPathSection from "./components/professional-path-section";
import SkillsCategoryDisplay from "./components/skills-section";
import '../components/styles/section-header.css'
import './styles/webview.css'

export default function WebView() {
    return (
        <>
            <ProfessionalPathSection />
            <EducationPathSection />
            <SkillsCategoryDisplay />
        </>
    );
}