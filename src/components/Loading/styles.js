import styled from "styled-components";

export const LoadingContainer = styled.div `
    width: 500px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #263238;
    padding: 20px 0;

    h2 {
        margin-top: 20px;
        font-size: 2rem;
        font-weight: 500px;
        text-align: center;
        max-width: 80%;
        @media (max-width: 600px) {
            font-size: 2rem;
        }
    }
    .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #263238;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
        }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
`