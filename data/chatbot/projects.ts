import { projects as rawProjects } from "../projects";

export const projects = `
Projects:
${rawProjects.map(p => `
Title: ${p.title}
Status: ${p.status}
Description: ${p.description}
Problem: ${p.problem}
Solution: ${p.solution}
Engineering: ${p.engineering.join(", ")}
Challenges: ${p.challenges.join(", ")}
Result: ${p.result}
Technologies: ${p.technologies.join(", ")}
${p.github ? `GitHub: ${p.github}` : ""}
`).join("\n---\n")}
`;
