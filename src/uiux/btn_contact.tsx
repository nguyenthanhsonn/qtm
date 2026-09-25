"use client";

import React from "react";
import styled from "styled-components";
import type { ContactButtonProps } from "@/types/uiux";

const ContactButton: React.FC<ContactButtonProps> = ({
  text = "LIÊN HỆ",
  onClick,
  className = "",
  type = "button",
  children,
}) => {
  return (
    <StyledWrapper className={className}>
      <button onClick={onClick} type={type}>
        <span className="btn-content">
          <span className="btn-text">{children || text}</span>
          <svg
            className="btn-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
        <span className="shimmer-effect" aria-hidden="true" />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: inline-block;

  button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.65rem 1.45rem;
    min-height: 40px;
    background: linear-gradient(135deg, rgba(39, 97, 195, 0.18) 0%, rgba(0, 212, 255, 0.1) 100%);
    border: 1px solid rgba(0, 212, 255, 0.45);
    border-radius: 9999px;
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2), inset 0 0 12px rgba(0, 212, 255, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    .btn-content {
      position: relative;
      z-index: 2;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: transform 0.3s ease;
    }

    .btn-text {
      font-family: inherit;
      white-space: nowrap;
    }

    .btn-arrow {
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      color: #00d4ff;
    }

    .shimmer-effect {
      position: absolute;
      top: 0;
      left: -100%;
      width: 60%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.25) 50%,
        transparent 100%
      );
      transform: skewX(-25deg);
      pointer-events: none;
      transition: left 0.6s ease;
    }

    &:hover {
      background: linear-gradient(135deg, #00d4ff 0%, #2563eb 100%);
      border-color: rgba(255, 255, 255, 0.6);
      color: #ffffff;
      box-shadow: 0 0 22px rgba(0, 212, 255, 0.45), 0 4px 15px rgba(37, 99, 235, 0.3);
      transform: translateY(-1px);

      .btn-arrow {
        color: #ffffff;
        transform: translateX(4px);
      }

      .shimmer-effect {
        left: 140%;
      }
    }

    &:active {
      transform: translateY(0px) scale(0.97);
      box-shadow: 0 0 12px rgba(0, 212, 255, 0.3);
    }
  }
`;

export default ContactButton;
