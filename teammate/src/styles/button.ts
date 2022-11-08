import styled from "styled-components";

export const StyledButton = styled.button`
    width: 150px;
    height: 35px;
    font-size: 16px;
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: var(--green4);
    color: var(--green1);
    transition: 0.4s;

    :hover {
        border: 1px solid var(--green2);
        
    }
`;
