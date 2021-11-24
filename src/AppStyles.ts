import styled from "styled-components";


type ContainerProps = {
    bgColor: string;
};

export const Container = styled.div<ContainerProps>`
    max-width: 600px;
    margin: auto;

    background-color: ${props => props.bgColor};
    padding: 40px;
    display:flex;


    span {
        color: white;
    }

    .link {
        color: #FFF;

        &:hover {
            color:#FF0000;
        }
    }

    @media (max-width: 500px) {
        background-color: green;
        flex-direction: column;

        span {
            color: #0000FF;
        }
    }
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

