import React from 'react'

import 
{ 
    Container, 
    Label, 
    Button, 
    Img, 
    Input,
    Logos,  

} from './styles'

import login from '../../img/login.png'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default () => {
    return(
        <Container>
            <Img style={{width: 220, height: 220}} source={login} />
            <MaterialCommunityIcons name='account' size={20} color='#fff'>
                <Input placeholder='Email' />
            </MaterialCommunityIcons>
            <MaterialCommunityIcons name='key' size={20} color='#fff' >
                <Input placeholder='Senha' />
            </MaterialCommunityIcons>
            <Button>
                <Label>Login</Label>
            </Button>
        </Container>
    )
}