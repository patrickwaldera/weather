import styled from "styled-components"

export const SearchBox = styled.div`
    width: 500px;
    max-width: 500px;
    min-height: 100px;
    background: linear-gradient(34.78deg, #607D8B 0%, #90A4AE 100%);
    box-shadow: 10px 0px 25px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 0;

    .searchContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        max-width: 80%;
        gap: 14px;

        height: 48px;
        background: #ffffff;
        padding: 14px;
        border-radius: 16px;
        margin-bottom: 24px;

        input {
            width: 100%;
            border: none;
            font-weight: 700;
            font-size: 0.875rem;
            color: #263238;
        }

        input:focus {
            outline: none;
        }

        input::placeholder{
            font-family: 'Montserrat', sans-serif !important;
        }
    }

    .searchContainer:focus-within {
        outline: 3px solid #26323820;
    }

    button {
        height: 48px;
        width: 180px;
        max-width: 80%;
        border: 2px solid #FFFFFF;
        border-radius: 16px;
        background-color: rgba(0, 0, 0, 0);
        color: #FFFFFF;
        font-weight: 700;
        font-size: 0.875rem;
        font-family: 'Montserrat', sans-serif !important;
        cursor: pointer;
        opacity: 0.6;
        transition: .5s;
    }
    button:hover{
        opacity: 1;
    }
`