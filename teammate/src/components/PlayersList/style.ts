import styled from "styled-components";

export const StyledPlayerList = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    margin-top: 2rem;

    li {
        display: flex;
        justify-content:center;
        flex-direction: column;
        align-items: center;
        margin: auto;
        margin-bottom: 20px;
        border: 1px solid var(--green2);
        gap: 5px;

        height: 250px;
        width: 100px;
    }

    svg {
        height: 60px;
        width: 60px;
        color: black;

        border: 1px solid var(--green1);
        border-radius: 50%;
    }

    h2 {
        height: 30px;
        width: 100%;

        margin-top: -63px;
        padding: 0.5rem;

        text-align: center;
        align-content: center;

        font-size: 15px;

        background-color: black;
        color: var(--green1);
    }

    p {
        border-top: 1px solid var(--green4);
        border-bottom: 1px solid var(--green4);

        width: 100%;
        margin-top: 5px;

        text-align: center;

        margin: 0.5rem;
        padding: 0.1rem;
        
    }

    button {
        width: 80%;
        height: 20px;

        border-radius: 7px;
        background-color: var(--green5);
        color: var(--green1);

        
        

    }

    button>svg {
        height: 35px;
        
    }
`;
