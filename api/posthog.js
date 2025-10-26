// api/posthog.js - Vercel serverless function
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { event, properties, distinct_id } = req.body;

  if (!event) {
    return res.status(400).json({ error: 'Event name is required' });
  }

  try {
    const response = await fetch('https://eu.i.posthog.com/capture', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.POSTHOG_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: process.env.POSTHOG_API_KEY,
        event,
        properties: properties || {},
        distinct_id: distinct_id || 'anonymous',
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`PostHog API error: ${response.status}`);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('PostHog tracking error:', error);
    res.status(500).json({ error: 'Failed to send event' });
  }
}
