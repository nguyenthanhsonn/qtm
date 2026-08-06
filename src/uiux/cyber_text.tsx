"use client";

import React from 'react';
import styled from 'styled-components';

interface CyberTextProps {
  text?: string;
}

const CyberText: React.FC<CyberTextProps> = ({ text = "STRATEGIC" }) => {
  const upperText = text.toUpperCase();
  return (
    <StyledWrapper>
      <div className="glitch-container">
        {upperText}
        <span>{upperText}</span>
        <span>{upperText}</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.span`
  display: inline-block;
  line-height: inherit;

  .glitch-container {
    position: relative;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    text-transform: uppercase;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    text-shadow:
      0.05em 0 0 #050c1a,
      -0.03em -0.04em 0 #38CFC8,
      0.025em 0.04em 0 #2761c3;
    animation: glitch 725ms infinite;
  }

  .glitch-container span {
    position: absolute;
    top: 0;
    left: 0;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
  }

  .glitch-container span:first-child {
    animation: glitch 500ms infinite;
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
    transform: translate(-0.04em, -0.03em);
    opacity: 0.75;
  }

  .glitch-container span:last-child {
    animation: glitch 375ms infinite;
    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
    transform: translate(0.04em, 0.03em);
    opacity: 0.75;
  }

  @keyframes glitch {
    0% {
      text-shadow:
        0.05em 0 0 #050c1a,
        -0.03em -0.04em 0 #38CFC8,
        0.025em 0.04em 0 #2761c3;
    }
    15% {
      text-shadow:
        0.05em 0 0 #050c1a,
        -0.03em -0.04em 0 #38CFC8,
        0.025em 0.04em 0 #2761c3;
    }
    16% {
      text-shadow:
        -0.05em -0.025em 0 #050c1a,
        0.025em 0.035em 0 #38CFC8,
        -0.05em -0.05em 0 #2761c3;
    }
    49% {
      text-shadow:
        -0.05em -0.025em 0 #050c1a,
        0.025em 0.035em 0 #38CFC8,
        -0.05em -0.05em 0 #2761c3;
    }
    50% {
      text-shadow:
        0.05em 0.035em 0 #050c1a,
        0.03em 0 0 #38CFC8,
        0 -0.04em 0 #2761c3;
    }
    99% {
      text-shadow:
        0.05em 0.035em 0 #050c1a,
        0.03em 0 0 #38CFC8,
        0 -0.04em 0 #2761c3;
    }
    100% {
      text-shadow:
        -0.05em 0 0 #050c1a,
        -0.025em -0.04em 0 #38CFC8,
        -0.04em -0.025em 0 #2761c3;
    }
  }
`;

export default CyberText;
