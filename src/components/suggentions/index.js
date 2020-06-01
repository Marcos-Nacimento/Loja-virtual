import React from 'react'

import { Container, Img, Option, Label } from './styles'

import img01 from '../../img/will.jpg'

const items = 
[
    {
        id: 1,
        img: img01,
        name: 'EMC',
    },
    {
        id: 2,
        img: 'url',
        name: 'ABC',
    },
]

export default () => {
    return(
        <Container>
            {items.map((item) => (
                <Option key={item.id}>
                    <Img souce={item.img} />
                    <Label>{item.name}</Label>
                </Option>
            ))}
        </Container>
    )
}