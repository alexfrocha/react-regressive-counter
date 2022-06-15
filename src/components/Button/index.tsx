import React from 'react';
// form-btn button

export default function Botao(props: {texto: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void}) {
    const {type = "button", onClick} = props
    return (
        <button type={type} onClick={onClick} className='form-btn button'>{props.texto}</button>
    )
}