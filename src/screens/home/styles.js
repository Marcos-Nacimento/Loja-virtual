import styled from 'styled-components/native'

export const Container = styled.SafeAreaView `
    flex: 1;
    background: #000;
`;

export const Title = styled.Text `
    text-align: center;
`;

export const Header = styled.View `
    justify-content: space-evenly;
    flex-direction: row;
`;

export const Logo = styled.TouchableOpacity`
    margin-top: 20px;
`;

export const Search = styled.TextInput `
    margin-top: 20px;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    width: 200px;
`;

export const Content = styled.ScrollView ``;

export const Load = styled.ActivityIndicator `
    margin-top: 20px;
`;