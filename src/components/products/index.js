import React from 'react'

import 
{ 
    Container, 
    Img, 
    Option, 
    Title,
    Description,
     
} from './styles'


const item = 
[
    {
        id: 1,
        img: 'example',
        descrip: 'name',
    },
    {
        id: 2,
        img: 'example',
        descrip: 'name',
    },
    {
        id: 3,
        img: 'example',
        descrip: 'name',
    }
]

export default () => {
    return(
        <>
            <Description>destaque</Description>
            <Container>
                {item.map((item) => (
                    <Option key={item.id}>
                        <Title>{item.descrip}</Title>
                        <Img souce={item.img} />
                    </Option>
                ))}
            </Container>
        </>
    )
}