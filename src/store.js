// src/store.js

import { create } from 'zustand';
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from 'reactflow';

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  nodeIDs: {},

  // Generates a unique ID per node type
  getNodeID: (type) => {
    const currentIDs = { ...get().nodeIDs };

    if (!currentIDs[type]) {
      currentIDs[type] = 0;
    }

    currentIDs[type] += 1;

    set({ nodeIDs: currentIDs });

    return `${type}-${currentIDs[type]}`;
  },

  // Adds a new node to the state
  addNode: (node) => {
    set({
      nodes: [...get().nodes, node],
    });
  },

  // Node update logic
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  // Edge update logic
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  // Handles new connections between nodes
  onConnect: (connection) => {
    set({
      edges: addEdge(
        {
          ...connection,
          type: 'smoothstep',
          animated: true,
          markerEnd: {
            type: MarkerType.Arrow,
            width: 20,
            height: 20,
          },
        },
        get().edges
      ),
    });
  },

  // Update specific field in a node
  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            data: {
              ...node.data,
              [fieldName]: fieldValue,
            },
          };
        }
        return node;
      }),
    });
  },

  // Output message for submit
  outputMessage: '',
  setOutputMessage: (message) => set({ outputMessage: message }),
}));
