import styled from "styled-components";


type ContainerProps = {
    showBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: ${props => props.showBackground === true ? '#1550ff' : '#e2e3e3'};
`;

type IconProps = {
    opacity?: number;
}

export const Icon = styled.img<IconProps>`
    width: 40px;
    height: 40px;
    opacity: ${props => props.opacity ? props.opacity : 1};
`;