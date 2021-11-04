import React from 'react'
import { useState, useEffect } from 'react'


const Teste = () => {

    const [content, setContent] = useState()



    const premium = () => {

        return (
            <h1> Plano Premium </h1>
        )
    }

    const standard = () => {

        return (
            <h1> Plano Standard </h1>
        )

    }

    const basic = () => {
        return (
            <h1> Plano Basic </h1>
        )

    }


    return (
        <>
            <a onClick={() => setContent(premium)}> Link 1</a>
            <a onClick={() => setContent(standard)}> Link 1</a>
            <a onClick={() => setContent(basic)}> Link 1</a>
            <div>
                {content}
            </div>
        </>
    )

}

export default Teste