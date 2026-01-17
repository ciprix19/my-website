
type ImageType ={
    source: string;
    alt: string;
}
type SectionTwoColumnType = {
    sectionColor: string;
    isWrapped: boolean;
    isImageFirst: boolean
    img: ImageType;
    sectionSubTitle: string;
    list: Array<string>;
}
export default function SectionTwoColumnType({ sectionColor, isWrapped, isImageFirst, img, sectionSubTitle, list } : SectionTwoColumnType) {
    return (
        <section className={sectionColor === 'gray' ? 'gray-section' : ''}>
            <div className={`two-column-layout ${isWrapped ? 'wrapper' : ''}`}>
                {isImageFirst ? (
                    <>
                        <img src={img.source} alt={img.alt}></img>
                        <div>
                            <h2>{sectionSubTitle}</h2>
                            <br></br>
                            <ul>
                                {list.map(listItem => (
                                    <li key={listItem}>{listItem}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <h2>{sectionSubTitle}</h2>
                            <br></br>
                            <ul>
                                {list.map(listItem => (
                                    <li key={listItem}>{listItem}</li>
                                ))}
                            </ul>
                        </div>
                        <img src={img.source} alt={img.alt}></img>
                    </>
                )}
            </div>
        </section>
    );
}