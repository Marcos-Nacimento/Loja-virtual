import React from 'react'

import 
{ 
    Container, 
    Img, 
    Option, 
    Title,
    Description,
     
} from './styles'

import { products } from '../data'

export default () => {
    return(
        <>
            <Description>destaque</Description>
            <Container>
                {products.map((item) => (
                    <Option key={item.id}>
                        <Img source={{ uri: item.url }} />
                        <Title>{item.value}</Title>
                    </Option>
                ))}
            </Container>
        </>
    )
}