import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 50px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }
        disabled {
            opacity:0.2
        }
`