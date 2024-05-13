// src/components/SequenceBuilder.js

import React from 'react';
import { useDrag } from '@react-flow/dnd-backend';

const SequenceBuilder = () => {
  const onDragStart = useDrag();

  return (
    <div>
      <div {...onDragStart}>Drag me</div>
      {/* Add more components for sequence building */}
    </div>
  );
};

export default SequenceBuilder;