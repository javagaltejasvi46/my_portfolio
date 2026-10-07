import { journey as rawJourney } from "../site";

export const experience = `
Journey and Experience:
${rawJourney.map(j => `
Phase: ${j.label}
Title: ${j.title}
Detail: ${j.detail}
`).join("\n")}

Links:
- GitHub: https://github.com/javagaltejasvi46
- LinkedIn: Available upon request / check the site data
`;
