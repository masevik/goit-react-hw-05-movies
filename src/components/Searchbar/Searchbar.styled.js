import styled from 'styled-components';
import { FcSearch } from 'react-icons/fc';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;

  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  ::after {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }
`;

export const SearchFormIcon = styled(FcSearch)`
  width: 35px;
  height: 35px;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding: 0 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
