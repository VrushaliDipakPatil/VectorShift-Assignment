// src/submit.js

import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes } = useStore();

  const handleSubmit = () => {
    const values = {};

    // 1. Collect all input values by variable name
    nodes.forEach((node) => {
      if (
        node.type === "customInput" ||
        node.type === "numberInput" ||
        node.type === "checkbox" ||
        node.type === "dropdown"
      ) {
        const varName = node.data?.inputVar?.trim();
        const val =
          node.data?.inputValue || // text
          node.data?.numberValue || // number
          node.data?.checkboxValue || // checkbox
          node.data?.selectedOption; // dropdown

        if (varName && val !== undefined) {
          values[varName] = val;
        }
      }
    });

    // 2. Find all text nodes and resolve variables
    const textNodes = nodes.filter((node) => node.type === "text");

    textNodes.forEach((textNode) => {
      let rawText = textNode.data?.text || "";
      let resolvedText = rawText;

      // Replace {{variable}} with its value from `values`
      const matches = rawText.match(/{{(.*?)}}/g);
      if (matches) {
        matches.forEach((match) => {
          const variable = match.replace(/[{}]/g, "").trim();
          const value = values[variable] || "";
          resolvedText = resolvedText.replace(match, value);
        });
      }

      // 3. Show result
      alert(`Resolved Text for node ${textNode.id}:\n${resolvedText}`);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
