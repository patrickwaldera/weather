import styled from "styled-components";

export const InfoCity = styled.div`
    width: 500px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #263238;
    padding: 20px 0;
    p {
        strong {
            font-weight: 500;
        }
        font-size: 1.5rem;
        margin: 4px 0;
    }
`

export const CityNameAndIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    max-width: 80%;
    flex-wrap: wrap-reverse;
    margin-bottom: 26px;
    .city {
        margin: 10px 10px 0 0;
        max-width: 100%;
    }
    h2 {
        font-weight: 600;
        font-size: 3rem;
        text-overflow: ellipsis;
        overflow: hidden; 
    }

    p {
        font-weight: 500;
        font-size: 2.25rem;
    }

    @media (max-width: 600px) {
        justify-content: center;
    }

`

export const ImgContainer = styled.div`
    width: 80px;
    height: 80px;
    max-width: 80px;
    max-height: 80px;
    background: linear-gradient(34.78deg, #607D8B 0%, #90A4AE 100%);
    border-radius: 16px;
    position: relative;
    img {
        position: absolute;
        top: -10px;
        left: -10px;

        @media (max-width: 220px) {
            max-width: 100%;
            top: 0px;
            left: 0px;
        }
    }
`

export const TempContainer = styled.div`
    text-align: center;
    width: 80%;
    max-width: 80%;
    margin-bottom: 52px;
    div {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 24px;
        flex-wrap: wrap;
        max-width: 80%;
        @media (max-width: 412px) {
            justify-content: center;
        }
        sup {
            font-size: 1rem;
            vertical-align: text-top;
        }
    }

    h2 {
        font-weight: 700;
        font-size: 6.25rem;
        sup {
            font-size: 3.5rem;
            vertical-align: text-top;
        }
    }
    .description {
        font-weight: 600;
        font-size: 2.25rem;
        max-width: 100%;
        text-transform: capitalize;
    }
    .min-max-temp {
        font-size: 1.5rem;
    }
`

export const  DataInfoContainer = styled.div`
    width: 80%;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: start;
`