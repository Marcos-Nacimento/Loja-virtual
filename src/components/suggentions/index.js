import React from 'react'

import { Container, Img, Option, Label } from './styles'

const items = 
[
    {
        id: 1,
        img: 'url',
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