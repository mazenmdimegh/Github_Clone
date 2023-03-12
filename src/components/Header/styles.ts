import styled from "styled-components";


export const Active = styled.li`
    font-weight: 600;
    border-bottom: 2px solid #ff9494;
    margin-bottom: -9px;
    padding-bottom: 6px;
    @media(max-width:990px){
        font-weight: 600;
        border-bottom: 2px solid rgb(255, 148, 148);
        margin-bottom: 0px;
        padding-bottom: 0px;
     
        >ul{   margin: auto;
            width: 150px;
        }
        >ul>li>svg{
            margin-right:10px;
            width: 18px;
            height: 20px;
        }
    }
`;
export const Len = styled.span`
    background-color: #ededed;
    margin-left: 11px;
    border-radius: 50%;
    padding: 4px 5px 4px 5px;
    font-size: 11px;
`;
export const LeftNav = styled.div`
    height: 20px;
    min-width: 444px;
    max-width: 471px;
    @media(max-width:990px){
        display: none;
    }
`;
export const Navbar = styled.nav`
    color: grey;
    font-size: 14px;
    display: flex;
    justify-content: center;
    @media(max-width:990px){
        justify-content: flex-end;
        >button {
            margin-right:15px;
        }
    }

`;
export const Collapse = styled.div`
    width: 820px;
    max-width: 979px;
    @media(max-width:990px){
        >ul{   margin: auto;
            width: 150px;
        }
        >ul>li>svg{
            margin-right:10px;
            width: 18px;
            height: 20px;
        }
    }
`;
