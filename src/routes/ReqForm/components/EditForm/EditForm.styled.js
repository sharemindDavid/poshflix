import styled, { css } from "styled-components";

export const ListCount = styled.p`
    margin-bottom: 20px;
`;

export const FormButton = styled.button`
    line-height: 1;
    display: inline-block;
    font-size: 1.2rem;
    text-decoration: none;
    border-radius: 5px;
    color: #fff;
    padding: 8px;
    background-color: ${(props) => (props.isCreate ? "#e50914" : "#908f4b")};

    ${(props) =>
        props.primary &&
        css`
            color: white;
            background: navy;
            border-color: navy;
        `}
`;

export const FormContainer = styled.div``;

export const Form = styled.div``;

export const TextRight = styled.div`
    text-align: right;
    padding-bottom: 20px;
    border-bottom: 1px solid #28333f;

    &:before {
        display: none;
    }
`;
