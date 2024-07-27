import React, { useState } from 'react';

const CopyColorSpan = ({ color, left }: { color:string, left:number }) => {
    const [clicked, setClicked] = useState(false);

    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                if (!clicked) {
                    setClicked(true);
                    const element = e.currentTarget;
                    element.classList.add('green-bg');
                    navigator.clipboard.writeText(color);
                    setTimeout(() => {
                        if (element) {
                            element.classList.remove('green-bg');
                            setClicked(false);
                        }
                    }, 2000);
                } else {
                    navigator.clipboard.writeText(color);
                }
            }}
            style={{ left: left }}
            className='absolute bottom-2 m-2 bg-gray-500/15 hover:bg-gray-500/30 h-7 w-7 p-1 opacity-0 group-hover:opacity-100 transition-all'
        >
            <div className='p-1 h-full w-full' style={{ backgroundColor: color }}></div>
        </div>
    );
};

export default CopyColorSpan;
