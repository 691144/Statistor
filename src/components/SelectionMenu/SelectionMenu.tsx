import React, { useEffect, useState } from 'react';
import { Paper, Button, ButtonGroup } from '@mui/material';

interface SelectionMenuProps {
  onQuestionSelect: (questionType: string, selectedText: string) => void;
}

const questionTypes = [
  { key: 'explanation', text: 'Εξήγηση' },
  { key: 'examples', text: 'Παραδείγματα' },
  { key: 'steps', text: 'Οδηγίες' },
  { key: 'practice', text: 'Άσκηση' },
];

const SelectionMenu: React.FC<SelectionMenuProps> = ({ onQuestionSelect }) => {
  const [menuPosition, setMenuPosition] = useState<{ left: number; top: number } | null>(null);
  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    const handleMouseUp = (event: MouseEvent) => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) {
        // Only clear if we're not clicking inside the menu
        const menuElement = document.getElementById('selection-menu');
        if (!menuElement || !menuElement.contains(event.target as Node)) {
          setMenuPosition(null);
          setSelectedText('');
        }
        return;
      }

      const text = selection.toString().trim();
      if (text) {
        // Check if selection is within a selectable area
        const range = selection.getRangeAt(0);
        const container = range.commonAncestorContainer;
        const isSelectableArea = (node: Node): boolean => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            const style = window.getComputedStyle(element);
            return style.userSelect === 'text';
          }
          return node.parentElement ? isSelectableArea(node.parentElement) : false;
        };

        if (isSelectableArea(container)) {
          setSelectedText(text);
          
          // Get viewport dimensions
          const viewportHeight = window.innerHeight;
          const viewportWidth = window.innerWidth;
          
          // Calculate absolute position
          let top = event.clientY;
          let left = event.clientX;

          // Ensure menu stays within viewport bounds
          const menuWidth = 120; // Approximate menu width
          const menuHeight = 160; // Approximate menu height
          
          // Adjust horizontal position if needed
          if (left + menuWidth > viewportWidth) {
            left = viewportWidth - menuWidth - 10;
          }
          
          // Adjust vertical position if needed
          if (top + menuHeight > viewportHeight) {
            top = top - menuHeight - 10;
          } else {
            top += 10; // Add a small offset from the cursor
          }
          
          // Add scroll offset to maintain position when scrolling
          top += window.scrollY;
          left += window.scrollX;
          
          setMenuPosition({ left, top });
        }
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const handleQuestionType = (type: string) => {
    if (selectedText) {
      onQuestionSelect(type, selectedText);
      setMenuPosition(null);
      setSelectedText('');
      window.getSelection()?.removeAllRanges();
    }
  };

  if (!menuPosition) return null;

  return (
    <div
      id="selection-menu"
      style={{
        position: 'absolute',
        left: `${menuPosition.left}px`,
        top: `${menuPosition.top}px`,
        zIndex: 1500,
      }}
    >
      <Paper elevation={3} sx={{ p: 1 }}>
        <ButtonGroup size="small" orientation="vertical">
          {questionTypes.map(({ key, text }) => (
            <Button
              key={key}
              onClick={() => handleQuestionType(key)}
              sx={{ textTransform: 'none' }}
            >
              {text}
            </Button>
          ))}
        </ButtonGroup>
      </Paper>
    </div>
  );
};

export default SelectionMenu;
