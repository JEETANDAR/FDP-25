import React, { useState } from "react";
import styled from "styled-components";

// Define the props type for StyledWrapper
interface StyledWrapperProps {
  clicked: boolean;
}

const Button: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <StyledWrapper clicked={clicked}>
      <button
        className="btn"
        onClick={() => {
          setClicked(true);
          setTimeout(() => {
            window.location.href = "https://pages.razorpay.com/pl_Q0zpHF5F7YDlVQ/view";
          }, 300);
        }}
        id="btn"
      >
        Register Now
      </button>
    </StyledWrapper>
  );
};

// Styled component for button wrapper
const StyledWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  position: relative;
  top: 93%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 20px;

  .btn {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid purple;
    padding: 14px 28px;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    background: purple;
    position: relative;
    transition: all 0.4s ease;
    overflow: hidden;
    border-radius: 8px;
  }

  /* Hover effect: Change background color */
  .btn:hover {
    background: #a020f0; /* Lighter shade of purple */
    border-color: #a020f0;
  }

  /* Button effect on click */
  .btn:active,
  ${({ clicked }) => clicked && `.btn`} {
    background: transparent;
    color: purple;
  }
`;

export default Button;
