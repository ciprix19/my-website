
type SectionHeaderType = {
    sectionColor: string;
    isWrapped: boolean;
    sectionTitle: string;
    children: any;
}
export default function SectionHeader({ sectionColor, isWrapped, sectionTitle, children } : SectionHeaderType) {
    return (
        <section className={sectionColor === 'gray' ? 'gray-section' : ''}>
            <div className={isWrapped ? 'wrapper' : ''}>
                <h3 className='section-header'>{sectionTitle}</h3>
                {children}
            </div>
        </section>
    );
}

