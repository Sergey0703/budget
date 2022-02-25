import styled from 'styled-components';

export const Wrapper=styled.div`

background: ${props=>props.value < 0 ?'#e2e2e1':'#fff'};
border: #000 1px solid;
border-color: #000;
padding: 5px;
margin-bottom: 10px;
`;