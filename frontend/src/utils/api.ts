const domain = import.meta.env.VITE_API_DOMAIN;
const apiStructure = import.meta.env.VITE_API_STRUCTURE;

const api: string = `${domain}/${apiStructure}/v1`;

export { api };