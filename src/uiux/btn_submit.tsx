"use client";

import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text = "Submit",
  onClick,
  type = "button",
  className = "",
  children
}) => {
  return (
    <StyledWrapper className={className}>
      <button type={type} onClick={onClick}>
        {children || text}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;

  button {
    position: relative;
    width: 100%;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 7px;
    border: 1px solid #38CFC8;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    background: transparent;
    color: #fff;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 0 0 0 transparent;
    transition: all 0.2s ease-in;
    outline: none;
  }

  button:hover {
    background: #38CFC8;
    color: #050c1a;
    border-color: #38CFC8;
    box-shadow: 0 0 30px 5px rgba(56, 207, 200, 0.4);
    transition: all 0.2s ease-out;
  }

  button:hover::before {
    animation: sh02 0.5s 0s linear;
  }

  button::before {
    content: '';
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: #fff;
    box-shadow: 0 0 50px 30px #fff;
    transform: skewX(-20deg);
  }

  @keyframes sh02 {
    from {
      opacity: 0;
      left: 0%;
    }

    50% {
      opacity: 1;
    }

    to {
      opacity: 0;
      left: 100%;
    }
  }

  button:active {
    box-shadow: 0 0 0 0 transparent;
    transition: box-shadow 0.2s ease-in;
    transform: scale(0.98);
  }
`;

export default Button;
