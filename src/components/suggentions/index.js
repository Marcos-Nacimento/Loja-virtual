import React from 'react'

import 
{ 
    Container, 
    Img, 
    Option, 
    Label,
    Description,

} from './styles'

import items from '../data'

export default () => {
    return(
        <>
            <Description>Recomendação</Description>
            <Container>
                {items.map((item) => (
                    <Option key={item.id}>
                        <Img source={{uri: item.url}} key={item.id} />
                        <Label>{item.name}</Label>
                    </Option>
                ))}
            </Container>
        </>
    )
}