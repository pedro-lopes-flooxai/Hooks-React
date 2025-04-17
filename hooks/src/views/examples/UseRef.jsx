import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function(s1,s2) {
    return [...s1].map((e,i) => `${e}${s2[i] || ""}`).join("")
}

const UseRef = props => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    const count = useRef(0)
    const myIput1 = useRef(null)
    const myIput2 = useRef(null)

    useEffect(function(){
        count.current = count.current + 1
        myIput2.current.focus()
    }, [value1])

    useEffect(function(){
        count.current++
        myIput1.current.focus()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"/>
            
            <SectionTitle title="Exercico #01" />
            <div className="center">
                 <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1,value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
            </div>

        <input type="text" className="input"
        ref={myIput1}
            value={value1} onChange={e => setValue1(e.target.value)}/>
          </div>

          
          <SectionTitle title="Exercico #02" />
    <div className='center'>
          <input type="text" className="input"
          ref={myIput2}
            value={value2} onChange={e => setValue2(e.target.value)}/>
          </div>
     </div>
    )
}

export default UseRef
