import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="btn">Submit and Register</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 93%; /* Adjusted to move button lower */
  left: 50%;
  transform: translate(-50%, -50%);
  
  .btn {
    color: purple;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid purple;
    padding: 10px 20px;
    font-size: 17px;
    cursor: pointer;
    font-weight: bold;
    background: transparent;
    position: relative;
    transition: all 0.5s ease;
    overflow: hidden;
  }

  .btn:hover {
    color: white;
  }

  .btn::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: -40px;
    transform: skewX(45deg);
    background-color: purple;
    z-index: -1;
    transition: all 0.5s ease;
  }

  .btn:hover::before {
    width: 160%;
  }
  
  @media (max-width: 768px) {
    .btn {
      font-size: 14px;
      padding: 8px 16px;
    }
     @media (max-width: 320px) {
    .btn {
      font-size: 14px;
      padding: 8px 16px;
      top:25%
    } 
       @media (min-width: 375px) {
   
  }
`;

export default Button;
