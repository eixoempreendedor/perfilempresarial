import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { contexto } = await req.json();
  const response = await client.responses.create({
    model: 'gpt-4.1-mini',
    input: `Sugira melhorias de precificação e margem para o contexto: ${contexto}`
  });

  return Response.json({ sugestao: response.output_text });
}
