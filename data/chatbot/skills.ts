import { skills as rawSkills } from "../site";

export const skills = `
Technical Skills:
${Object.entries(rawSkills).map(([category, items]) => `${category}: ${items.join(", ")}`).join("\n")}

Engineering Philosophy:
- Tools are chosen for the system in front of me—not collected for a logo wall.
- Focus on building reliable real-time workflows and explainable ML.
- Comfortable across AI, backend engineering, real-time applications, and full-stack development.
`;
