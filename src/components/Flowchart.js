import React from 'react';
import ReactFlow from 'react-flow-renderer';

const FlowChart = () => {
  const elements = [
    // Define flowchart elements here
  ];

  const onElementsRemove = (elementsToRemove) => console.log('remove', elementsToRemove);
  const onLoad = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onLoad={onLoad}
      />
    </div>
  );
};

export default FlowChart;
