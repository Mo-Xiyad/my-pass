import { resolve } from 'path';
import type { Config } from "drizzle-kit";
import { config } from "dotenv";





// Load environment variables from the root .env file
config({ path: resolve(process.cwd(), "../../.env") });

if (!process.env.POSTGRES_URL) {
  throw new Error("Missing POSTGRES_URL");
}
// const nonPoolingUrl = process.env.POSTGRES_URL.replace(":6543", ":5432");

export default {
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: { url: process.env.POSTGRES_URL },
} satisfies Config;
// docker run --name my_postgres -e POSTGRES_USER=localhost -e POSTGRES_PASSWORD=password -e POSTGRES_DB=exitpass -p 5432:5432 -d postgres