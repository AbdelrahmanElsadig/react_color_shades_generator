import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState, useSyncExternalStore } from 'react'
import { getShades } from '../utils';
import Color from 'color';
const Form = () => {
    const [value, setValue] = useState('');
    const [arr, setArr]: [string[], any] = useState([]);
    function clickHandler(arr: string[], color: string) {
        setArr(getShades(arr, color))
    }
    return (
        <>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col items-start sm:flex-row gap-4 sm:items-center">
                    <label htmlFor="color">CSS Color: </label>
                    <input onChange={(e) => {
                        e.preventDefault()
                        setValue(e.target.value);
                    }} value={value} id='color' name='color' className='focus:outline-none bg-slate-100 p-1' type="text" />
                    <button onClick={() => clickHandler(arr, value)} className="font-semibold text-2xl px-2 py-1 rounded-lg duration-300 ease-in-out
                     border-2 border-black bg-black text-white self-center
                     hover:text-black hover:bg-white">Generate</button>
                </div>
            </form>
            <Shades colors={arr} />
        </>
    )
}

function Shades({ colors }: { colors: string[] }) {
    function clickHandler(div: any, color: string) {
        const span = div.querySelector('span') as Element;
        span.textContent = 'Copied';
        navigator.clipboard.writeText(color);
        setTimeout(() => span.textContent = null, 1000)
    }
    return (
        <div className='container w-[90%] justify-center mb-16 max-w-[720px] flex flex-wrap items-center gap-4 mx-auto'>
            {colors.map((color, i) => {
                return (
                    <div key={i} className="flex flex-col gap-4">
                        <div onClick={(e) => clickHandler(e.target, color)} className="cursor-pointer relative
                         shadow-lg w-28 h-28 rounded-full" style={{ backgroundColor: color }}>
                            <span className="absolute top-1/2 left-1/2 mix-blend-difference text-white -translate-x-1/2 -translate-y-1/2"
                            ></span>
                        </div>
                        <p className="">{i * 10}% ({color})</p>
                    </div>

                )
            })}
        </div>
    )
}



export { Form } 
