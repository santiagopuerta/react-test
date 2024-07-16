import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {},
  },
  env: {
    BASE_URL: "http://localhost:5173/",
  },
})
