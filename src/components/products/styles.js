import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 16,
    },
}))`
    margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
  width: 150px;
  height: 200px;
  border-radius: 8px;
  padding: 15px;
  justify-content: space-between;
  margin-right: 16px;
`;

export const Img = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text `
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const Description = styled.Text `
  color: #fff;
  padding-top: 20px;
  padding-left: 20px;
  font-family: sans-serif;
  font-weight: bold;
`;