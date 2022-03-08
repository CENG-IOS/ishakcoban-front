import React from 'react'

export const Tryings = () => {

    const materials = [
        {
            'id': 1,
            'name': 'A'
        },
        {
            'id': 2,
            name: 'B'
        },
        {
            'id': 3,
            name: 'C'
        },
        {
            'id': 4,
            name: 'D'
        },
    ]
    return (
        <div>{
            materials.map(mam => {
                return <div className='bg-danger'>{mam.name}</div>
            })
        }</div>
    )
}
