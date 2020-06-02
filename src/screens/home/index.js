import React, { useState, useEffect } from 'react'

import 
{ 
    Container,  
    Header, 
    Logo, 
    Search, 
    Content,
    Load,
    
} from './styles'

import Suggentions from '../../components/suggentions'
import Banner from '../../components/banner'
import Products from '../../components/products'

import { MaterialCommunityIcons } from '@expo/vector-icons'


export default ({ navigation }) => {
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
                    <Logo
                        onPress={() => { navigation.navigate('Account') }}
                    >
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
                <Suggentions />
                <Products />
                <Banner />
            </Content>
        </Container>
    )
}