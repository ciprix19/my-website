import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import './styles/card-expand.css'
import ResizableDiv from "./resizable-div";

type CardButtonExpandType = {
    title: string;
    children: ReactNode;
}
//todo: remove max-height from the card-expand and implement dynamic height computation
export default function CardButtonExpand({ title, children } : CardButtonExpandType) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='card-expand'>
            <div>
                <h3>{title}</h3>
                <div className={`expandable ${isOpen ? 'active' : ''}`}>
                    {children}
                </div>
            </div>
            <button className='expand-button' onClick={() => setIsOpen(!isOpen)}>{isOpen ? '˄' : '˅'}</button>
        </div>
    );
}
