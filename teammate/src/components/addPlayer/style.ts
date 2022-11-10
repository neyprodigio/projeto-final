import styled from "styled-components";

export const StyledAddForm = styled.form`
    width: 80%;
    height: 300px;
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    gap: 1rem;

    border: 1px solid var(--green2);
    border-radius: 6px;

    background-color: var(--green5);

    margin: auto;
    margin-top: 70px;

    h1 {
        font-size: 1.3rem;
    }

    button>svg{
        width: 200px;
        height: 40px;
        color: var(--green4);
        display: flex;
        margin-left: 170px;

        :hover {
            color: var(--green1);
        }
    }
    
`