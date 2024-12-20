// Проверяем наличие API ключей
const validateApiKeys = () => {
  const missingKeys = [];
  if (!import.meta.env.VITE_OPENAI_API_KEY) missingKeys.push('OpenAI');
  if (!import.meta.env.VITE_ANTHROPIC_API_KEY) missingKeys.push('Anthropic');
  if (!import.meta.env.VITE_ELEVENLABS_API_KEY) missingKeys.push('ElevenLabs');

  if (missingKeys.length > 0) {
    console.warn(`Missing API keys for: ${missingKeys.join(', ')}`);
  }
};

// Запускаем проверку при инициализации
validateApiKeys();

export const AI_CONFIG = {
  openai: {
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    model: 'gpt-4'
  },
  anthropic: {
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
    model: 'claude-3-opus-20240229'
  },
  elevenlabs: {
    apiKey: import.meta.env.VITE_ELEVENLABS_API_KEY
  }
};