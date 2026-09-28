const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface HealthResponse {
  status: string;
  service: string;
  timestamp: string;
  uptime: number;
}

export async function fetchHealth(): Promise<HealthResponse> {
  const res = await fetch(`${API_URL}/api/health`, {
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch backend health status (${res.status})`);
  }

  return res.json();
}
