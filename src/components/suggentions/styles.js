import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,
    },
}))`
    background: #1e222b;
    height: 130px;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
  font-size: 14px;
`;

export const Description = styled.Text `
  color: #fff;
  font-weight: bold;
  font-family: sans-serif;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;