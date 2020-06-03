import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import 
{ 
    Content, 
    Banner, 
    Title,
    Container,

} from './styles'

export default () => {
    return(
        <Container>
            <Banner>
                <Content>
                    <MaterialCommunityIcons name='home' size={40} color='#fff' >
                        
                    </MaterialCommunityIcons>
                </Content>
            </Banner>
        </Container>
    )
}