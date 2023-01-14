import styled from "styled-components";

export const WeatherContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    max-width: 100%;
    height: auto;
    min-height: 100vh;
    h1 {
        max-width: 90%;
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 2rem;
        margin-top: 2rem;
        background: linear-gradient(34.78deg, #00A1FF 0%, #00FF8F 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);
    }
`

export const WeatherWrapper = styled.div`
    display: flex;
    background-color: #ffffff;
    border-radius: 16px;
    height: auto;
    max-width: 90%;
    flex-wrap: wrap-reverse;
    min-height: 600px;
    margin-bottom: 2rem;
    @media (max-width: 1112px) {
        width: 500px;
    }
`