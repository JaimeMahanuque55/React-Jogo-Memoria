import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    background: #1550ff;
    border-radius: 10px;
    cursor: pointer;
    opacity: 1;
    transition: all 300ms ease;

    &:hover {
        opacity: 0.6;
    }
`;

export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, 20%);
    padding: 0 15px;
`;

export const Icon = styled.img`
    height: 20px;
`;

export const Label = styled.div`
    height: inherit;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;
