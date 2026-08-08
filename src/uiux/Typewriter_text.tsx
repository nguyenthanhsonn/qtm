'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { TypewriterTextProps } from "@/types/uiux";
export type { TypewriterTextProps };

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text = "Hãy cùng bắt đầu",
  highlightText = "",
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2500,
  loop = true,
  className = "",
  textClassName = "",
  highlightClassName = "gradient-text",
  cursorClassName = "text-[#38CFC8]",
  showCursor = true,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        if (loop) {
          setIsDeleting(true);
        }
      }, pauseDuration);
    } else if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
      }
    } else {
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length + 1));
        }, speed);
      } else if (loop) {
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, text, speed, deleteSpeed, pauseDuration, loop]);

  const renderContent = () => {
    if (!highlightText) {
      return <span className={textClassName}>{displayText}</span>;
    }

    const highlightIndex = text.indexOf(highlightText);
    if (highlightIndex === -1) {
      return <span className={textClassName}>{displayText}</span>;
    }

    const plainLength = Math.min(displayText.length, highlightIndex);
    const plainPart = displayText.substring(0, plainLength);
    const highlightPart = displayText.length > highlightIndex ? displayText.substring(highlightIndex) : '';

    return (
      <>
        <span className={textClassName}>{plainPart}</span>
        {highlightPart && <span className={highlightClassName}>{highlightPart}</span>}
      </>
    );
  };

  return (
    <span className={`inline-flex items-center ${className}`}>
      {renderContent()}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className={`ml-1 font-mono font-bold ${cursorClassName}`}
        >
          |
        </motion.span>
      )}
    </span>
  );
};

export default TypewriterText;