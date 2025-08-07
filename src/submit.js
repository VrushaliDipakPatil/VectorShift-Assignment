// src/submit.js

import { useStore } from "./store";
import { Box, Typography, Button } from "@mui/material";

export const SubmitButton = () => {
  const { nodes, setOutputMessage, outputMessage } = useStore();

  const handleSubmit = () => {
    const values = {};
    const textOutputs = [];
    const concatOutputs = {};
    const randomOutputs = {};
    const llmOutputs = {};
    const outputResults = [];

    nodes.forEach((node) => {
      const { type, data } = node;
      const varName = data?.inputVar?.trim();

      if (["customInput", "numberInput", "checkbox", "dropdown"].includes(type)) {
        const val =
          data?.inputValue || data?.numberValue || data?.checkboxValue || data?.selectedOption;

        if (varName && val !== undefined) {
          values[varName] = val;
        }
      }
    });

    nodes.forEach((node) => {
      if (node.type === "randomizer") {
        const { opt1, opt2 } = node.data || {};
        const options = [opt1, opt2].filter(Boolean);
        const randomChoice = options[Math.floor(Math.random() * options.length)];
        if (randomChoice) {
          randomOutputs[node.id] = randomChoice;
        }
      }
    });

    nodes.forEach((node) => {
      if (node.type === "text") {
        let rawText = node.data?.text || "";
        let resolvedText = rawText;

        const matches = rawText.match(/{{(.*?)}}/g);
        if (matches) {
          matches.forEach((match) => {
            const variable = match.replace(/[{}]/g, "").trim();
            const value = values[variable] || "";
            resolvedText = resolvedText.replace(match, value);
          });
        }

        textOutputs.push({ nodeId: node.id, resolvedText });
      }
    });

    nodes.forEach((node) => {
      if (node.type === "concat") {
        const { first, second } = node.data || {};
        const resolve = (val) => values[val?.trim()] || val || "";
        concatOutputs[node.id] = resolve(first) + resolve(second);
      }
    });

    nodes.forEach((node) => {
      if (node.type === "llm") {
        llmOutputs[node.id] = "Mocked LLM Response for now.";
      }
    });

    nodes.forEach((node) => {
      if (node.type === "customOutput") {
        const name = node.data?.outputName || `Output (${node.id})`;
        const type = node.data?.outputType || "Text";
        const value = values[name] ||
          textOutputs.find((t) => t.nodeId === node.id)?.resolvedText ||
          concatOutputs[node.id] ||
          randomOutputs[node.id] ||
          llmOutputs[node.id] ||
          "";

        outputResults.push({ name, type, value });
      }
    });

    let message = "";

    if (Object.keys(values).length) {
      message += "🟦 Input Values:\n";
      for (let [key, val] of Object.entries(values)) {
        message += `- ${key}: ${val}\n`;
      }
      message += "\n";
    }

    if (Object.keys(randomOutputs).length) {
      message += "🟨 Randomizer Nodes:\n";
      for (let [id, val] of Object.entries(randomOutputs)) {
        message += `- Node ${id}: ${val}\n`;
      }
      message += "\n";
    }

    if (textOutputs.length) {
      message += "🟧 Text Node Outputs:\n";
      textOutputs.forEach((t) => {
        message += `- Node ${t.nodeId}: ${t.resolvedText}\n`;
      });
      message += "\n";
    }

    if (Object.keys(concatOutputs).length) {
      message += "🟪 Concat Node Outputs:\n";
      for (let [id, val] of Object.entries(concatOutputs)) {
        message += `- Node ${id}: ${val}\n`;
      }
      message += "\n";
    }

    if (Object.keys(llmOutputs).length) {
      message += "🟥 LLM Node Outputs:\n";
      for (let [id, val] of Object.entries(llmOutputs)) {
        message += `- Node ${id}: ${val}\n`;
      }
      message += "\n";
    }

    if (outputResults.length) {
      message += "🟩 Final Output Nodes:\n";
      outputResults.forEach((o) => {
        message += `- ${o.name} (${o.type}): ${o.value}\n`;
      });
      message += "\n";
    }

    if (!message) {
      message = "No data to show.";
    }

    setOutputMessage(message.trim());
  };

  return (
    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>

      {outputMessage && (
        <Box
          sx={{
            mt: 3,
            width: '100%',
            maxWidth: 600,
            whiteSpace: 'pre-wrap',
            backgroundColor: '#f9f9f9',
            border: '1px solid #ccc',
            borderRadius: 2,
            p: 2,
            boxShadow: 1,
            fontSize: 14,
            lineHeight: 1.6,
            fontFamily: 'monospace',
          }}
        >
          <Typography variant="subtitle1" gutterBottom fontWeight="bold">
            Output Summary
          </Typography>
          {outputMessage}
        </Box>
      )}
    </Box>
  );
};
