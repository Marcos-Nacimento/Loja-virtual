import React from 'react'

import 
{ 
    Container, 
    Img, 
    Option, 
    Label,
    Description,

} from './styles'

const items = 
[
    {
        id: 1,
        img: 'url',
        name: 'Nike',
    },
    {
        id: 2,
        img: 'url',
        name: 'Nike',
    },
]

export default () => {
    return(
        <>
            <Description>Recomendação</Description>
            <Container>
                {items.map((item) => (
                    <Option key={item.id}>
                        <Img souce={item.img} />
                        <Label>{item.name}</Label>
                    </Option>
                ))}
            </Container>
        </>
    )
}