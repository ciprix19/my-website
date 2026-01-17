import { useEffect, useLayoutEffect, useState } from 'react';
import './styles/contact.css'
import ResizableDiv from '../resume/components/resizable-div';

export default function Contact() {

    useLayoutEffect(() => {
        const testHeight = document.querySelector('.resizable-div');

        console.log(testHeight?.scrollHeight);
    })

    return (
        <ResizableDiv className={'resizable-div'}>
            <div>
                asd
            </div>
            asd
        </ResizableDiv>
    );
}