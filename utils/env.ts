const requiredEnvironmentVariables = [
  'BASE_URL',
  'APP_USERNAME',
  'APP_PASSWORD',
] as const;

for (const variableName of requiredEnvironmentVariables) {
  if (!process.env[variableName]) {
    throw new Error(`Missing required environment variable: ${variableName}`);
  }
}

export const environment = {
  baseUrl: process.env.BASE_URL!,
  username: process.env.APP_USERNAME!,
  password: process.env.APP_PASSWORD!,
};
