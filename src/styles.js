import styled from "styled-components";

export const WeatherContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: auto;
    min-height: 100vh;
    h1 {
        max-width: 90%;
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 2.25rem;
        margin-top: 2.25rem;
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
    margin-bottom: 2.23rem;
    @media (max-width: 1112px) {
        width: 500px;
    }
`