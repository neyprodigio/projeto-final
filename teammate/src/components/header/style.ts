import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 60px;

    background: black;

    display: flex;

    margin-bottom: 15px;

    h1 {
        width: 100%;
        color: var(--green1);
        text-align: center;
        margin: auto;
    }

    span {
        color: var(--white);
    }

    button {
        color: var(--green1);
        font-size: 1rem;
        padding: 15px;
    }
`