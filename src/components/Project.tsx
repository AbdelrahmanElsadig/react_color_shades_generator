import React from 'react'
import { Form } from './Shades'

const Project = () => {
    return (
        <div className="container w-full mt-16 flex flex-col gap-6 mx-auto items-center">
            <h1 className="text-4xl pb-3 font-bold relative after:absolute
            after:h-1 after:w-1/2 after:left-1/4 after:bottom-0 after:bg-black">Shades Generator</h1>
            <Form />
        </div>
    )
}

export { Project }
