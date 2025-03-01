import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button
        className="btn"
        onClick={() => window.location.href = "https://pages.razorpay.com/pl_Q0zpHF5F7YDlVQ/view"}
        id="btn"
      >
        Register Now
      </button>
    </StyledWrapper>
  );
};

// Styled component for button wrapper
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto; /* Adjust height for better responsiveness */
  width: 100%;
  position: absolute;
  top: 93%; /* Default position for most screens */
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 20px; /* Adds spacing on smaller screens */

  /* Styling for the button */
  .btn {
    color: purple;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid purple;
    padding: 14px 28px; /* Slightly larger padding for better touchability */
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    background: transparent;
    position: relative;
    transition: all 0.5s ease;
    overflow: hidden;
    border-radius: 8px; /* Smooth rounded edges */
  }

  /* Button hover effect */
  .btn:hover {
    color: white;
  }

  /* Animated background effect on hover */
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

  /* Expanding effect on hover */
  .btn:hover::before {
    width: 160%;
  }

  /* Responsive styles for tablets (768px) */
  @media (max-width: 1024px) {
    top: 90.8%; /* Moves button lower for tablets */
    .btn {
      font-size: 18px;
      padding: 12px 24px;
    }
  }

  /* Responsive styles for small laptops (1024px) */
  @media (min-width: 1024px) {
    top: 89.44%; /* Moves button even lower */
    .btn {
      font-size: 20px;
      padding: 14px 28px;
    }
  }

  /* Responsive styles for larger screens (1440px) */
  @media (min-width: 1440px) {
    top: 92.%; /* Moves button even further down */
    .btn {
      font-size: 22px;
      padding: 16px 32px;
    }
  }

  /* Responsive styles for ultra-wide screens (2560px and above) */
  @media (min-width: 2560px) {
    top: 89.5%; /* Pushes button to the bottom */
    .btn {
      font-size: 24px;
      padding: 18px 36px;
    }
  }

  /* Extra small devices (like old Android phones, 320px width) */
  @media (max-width: 480px) {
    top: 90%; /* Pushes button slightly lower */
    .btn {
      font-size: 14px;
      padding: 8px 16px;
    }
  }

  /* Extra small devices (320px width) */
  @media (max-width: 320px) {
    top: 90.8%; /* Moves button lower */
    .btn {
      font-size: 13px;
      padding: 6px 14px;
    }
  }
`;

export default Button;
