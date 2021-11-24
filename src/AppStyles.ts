import styled from "styled-components";


type ContainerProps = {
    bgColor: string;
};

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.bgColor};
    padding: 40px;
`;


type BotaoProps = {
    bg: string;
    small?: boolean;
}
export const Botao = styled.button<BotaoProps>`
    font-size: ${(props)=> props.small ? '15px' : '30px'  };
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 5px 1px white;
    background-color: ${props => props.bg}
`;

