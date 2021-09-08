import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 5px 10px;
    margin-bottom: 10px;
    height: 100px;  

    img{
        width: 32px;
        margin-right: 10px;
        border-radius: 50%;
    }

    h4{
        font-weight: normal;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
    }
`;
