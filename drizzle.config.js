/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://duo_linga_owner:3Zz8usHLSNmQ@ep-sweet-wildflower-a5nmoq6r.us-east-2.aws.neon.tech/duo_linga?sslmode=require',
    }
  };