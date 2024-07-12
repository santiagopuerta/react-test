interface EnvConfig {
  API_URL: string
}

const config: EnvConfig = {
  API_URL: import.meta.env.VITE_API_URL as string,
}

export default config