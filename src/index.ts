import { Hono } from 'hono';
import { SignJWT } from 'jose';

const app = new Hono();

app.get('/getToken', async (c) => {
  const AUD = c.env.AUD;
  const JWT_SECRET = c.env.JWT_SECRET;

  if (!AUD || !JWT_SECRET) {
    return c.json({ error: 'Missing environment variables' }, 500);
  }

  const secretKey = new TextEncoder().encode(JWT_SECRET);

  const token = await new SignJWT({
    aud: AUD,
    exp: Math.floor(Date.now() / 1000) + 300, // 5 minuti
    iat: Math.floor(Date.now() / 1000),
    iss: 'public-ai-stats',
  })
    .setProtectedHeader({ alg: 'HS256' })
    .sign(secretKey);

  return c.json({ token });
});

export default app;