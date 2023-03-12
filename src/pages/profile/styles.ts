import styled from "styled-components";


export const Dropdown = styled.div`
    position: absolute;
    transform: translate3d(996px, 111px, 0px);
    top: 0px;
    left: -205px!important;
    will-change: transform;
    min-width: 12px;
    width: 300px;
    height: auto;
    max-height: 480px;
    margin: 8px 0 16px 0;
    font-size: 12px;
    padding-bottom: 0;

  `;
export const DropdownLanguage = styled.div`
    position: absolute;
    transform: translate3d(996px, 111px, 0px);
    top: 0px;
    left: -95px!important;
    will-change: transform;
    min-width: 12px;
    width: 300px;
    height: auto;
    max-height: 480px;
    margin: 8px 0 16px 0;
    font-size: 12px;
    padding-bottom: 0;

  `;
export const DropdownItem = styled.a`
    text-transform : capitalize;
    padding-left : 6px;
  `;
export const Select = styled.div`
    padding: 0px 10px 7px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    font-weight: 600;
  `;
export const Results = styled.p`
    padding: 7px 0px;
    font-size: 14px;
    margin: 0;
    color:rgb(0 0 0 / 65%);
  `;
export const Container = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    align-items: center;
    height: 43px;
  `;
export const Clear = styled.div`
    display:flex;
    justify-content:space-between;
    font-size:14px;
    align-items: center;
    color:#57606a;
    cursor:pointer;
    &:hover {
        color: #0969da;
        & > svg > path {
            fill: #0969da;
        }
    }
  `;
export const Avatar = styled.img`
    border-radius: 100%;
    width: 300px;
  `;

export const Button = styled.button`
    border-radius: 6px !important;
    background-color: #f6f8fa;
    color: rgb(82, 82, 82);
    border-color: #d1d0d0;
    font-size: 14px;
    font-weight: 500;
    padding: 2px 15px;
    &:hover {
        background-color: #f2efef;
        color: rgb(82, 82, 82);
        color: #000;
        border-color: #d1d0d0;
    }
  `;
export const Edit = styled.button`
    border-radius: 6px !important;
    background-color: #f6f8fa;
    color: rgb(82, 82, 82);
    border-color: #d1d0d0;
    padding: 2px 15px;
    width: 100%;
    height: 36px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 6px !important;
    &:hover {
        background-color: #f2efef;
        color: #000;
        border-color: #d1d0d0;
    }
  `;
export const RightSideWrapper = styled.div`
    width: 900px;
  `;
export const LeftSIdeWrapper = styled.div`
    z-index: 2;
    padding-right: 30px;
    margin-top: -38px;
}
  `;
export const FormControlWrapper = styled.div`
    &>input{
      font-size: 14px;
      padding: 4px 15px;
    }

  `;
export const BtnGroupp = styled.div`
    padding: 0 2px;
    display: flex;
  &>btn1 {
      margin-left: 25px;
  }
  `;
export const BtnGrouppBtn = styled.div`
    padding: 0 2px;
    display: flex;
    margin-left: 25px;
  
  `;
export const Pro = styled.p`
  font-size: 11px;
  border-radius: 40px;
  font-weight: 500;
  border-color: rgb(37, 42, 138) !important;
  padding: 1px 8px;
  `;