import React, { useState, useEffect } from 'react'

import 
{ 
    Container, 
    Description, 
    Header, 
    Logo, 
    Search, 
    Content,
    Load,
    
} from './styles'

import Suggentions from '../../components/suggentions'

import { MaterialCommunityIcons } from '@expo/vector-icons'

export default () => {
    const[isLoad, setLoad] = useState(false)

    useEffect(() => {
        if(isLoad){
            setInterval(() => {setLoad(!isLoad)}, 2000)
        }
    }, [isLoad])

    return(
        <Container>
            <Content>
                <Header>
                    <Logo>
                        <MaterialCommunityIcons name='account' size={30} color={'#7159c1'} />
                    </Logo>
                       <Search placeholder='search' />
                    <Logo
                        onPress={() => { setLoad(!isLoad)}}
                    >
                        <MaterialCommunityIcons name='magnify' size={30} color={'#7159c1'} />
                    </Logo>
                </Header>
                <Load color='red' size={20} animating={isLoad}/>
                <Description>Recomendaçoes</Description>
                <Suggentions />
            </Content>
        </Container>
    )
}