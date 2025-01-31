import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import { config } from "dotenv"


if (process.env.NODE_ENV === "development") {
    config({ path: ".env.local" })
}

const sql = neon(process.env.DATABASE_URL!)


// logger
// const db = drizzle(sql, 1 logger: true })
const db = drizzle(sql)

export { db }