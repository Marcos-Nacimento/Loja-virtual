import React from 'react'

import 
{ 
    Container, 
    Img, 
    Option, 
    Title,
    Description,
     
} from './styles'

import item from '../data'

export default () => {
    return(
        <>
            <Description>destaque</Description>
            <Container>
                {item.map((item) => (
                    <Option key={item.id}>
                        <Title>{item.name}</Title>
                        <Img  souce={{ uri: item.url}} />
                    </Option>
                ))}
            </Container>
        </>
    )
}