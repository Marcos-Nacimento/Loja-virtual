import React from 'react'

import 
{ 
    Container, 
    Img, 
    Option, 
    Label,
    Description,

} from './styles'

import { Stories } from '../data'

export default () => {
    return(
        <>
            <Description>Recomendação</Description>
            <Container>
                {Stories.map((item) => (
                    <Option key={item.id}>
                        <Img source={{uri: item.url}} key={item.id} />
                        <Label>{item.name}</Label>
                    </Option>
                ))}
            </Container>
        </>
    )
}