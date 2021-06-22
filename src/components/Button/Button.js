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
    margin: 10px 5px;
  `}
  
  ${({close}) => 
    close && css `
    width: 27px;
    height: 27px;
    border: none; 
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
    background-color: #FFD829;

    &::before, 
    &::after {
    content: '';
    width: 16px;
    height: 2px;
    position: absolute;
    background-color: #000;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    transform-origin: 50%;
  }
  
    &::before {
      transform: rotate(45deg);
    }
  
    &::after {
      transform: rotate(-45deg);
    }
  `}
`;

export default Button;