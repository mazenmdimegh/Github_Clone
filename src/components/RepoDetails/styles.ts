import styled from "styled-components";
type languageProps = {
    colorr?: string | null,
}

export const LanguageColor = styled.span<languageProps>`
    position: relative;
    top: 1px;
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid var(--color-primer-border-contrast);
    border-radius: 50%;
    background-color: ${props => props.colorr};
    margin-right: 5px;
  `;

export const Button = styled.button`
    background-color: #f6f8fa;
    color: rgb(82, 82, 82);
    border-color: #d1d0d0;
    font-size: 13px;
    font-weight: 400;
    padding: 2px 15px;
    &:hover {
        background-color: #f2efef;
        color: rgb(82, 82, 82);
        border-color: #d1d0d0;
    }
  `;
  
export const Public = styled.p`
  font-size: 12px;
  border-radius: 40px;
  font-weight: 500;
  `;

export const Language = styled.p`
    font-size: 12px;
  `;

export const Title = styled.a`
    text-decoration: none;
    overflow-wrap: anywhere;
    &:hover{
    text-decoration: underline;
  `;

