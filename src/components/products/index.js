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
        img: 'https://images.lojanike.com.br/1024x1024/produto/25889_1569664_20190801134152.png',
        descrip: 'nike',
    },
    {
        id: 2,
        img: 'https://images.lojanike.com.br/1024x1024/produto/25889_1569664_20190801134152.png',
        descrip: 'nike',
    },
    {
        id: 3,
        img: 'https://images.lojanike.com.br/1024x1024/produto/25889_1569664_20190801134152.png',
        descrip: 'nike',
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
                        <Img style={{ width: 150, height: 200 }} souce={{ uri: item.img}} />
                    </Option>
                ))}
            </Container>
        </>
    )
}