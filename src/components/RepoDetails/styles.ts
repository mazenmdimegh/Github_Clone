import styled from "styled-components";
type languageProps = {
    colorr?: string|  null,
}

export const Language = styled.span<languageProps>`
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