import styled, {css} from 'styled-components';

const Button = styled.button`
  border-radius: 15px;
  border: none;
  cursor: pointer;
  background-color: #FFD829;
  font-weight: 700;
  padding: 7px 5px;
  width: 120px;
  font-size: .8em;
  margin-top: 20px;

  ${({secondary}) => 
    secondary && css `
    background-color: #E6E6E6;
    font-size: 10px;
    `}
`;

export default Button;