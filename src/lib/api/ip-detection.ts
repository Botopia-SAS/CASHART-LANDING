export interface IPLocation {
  country: string;
  countryCode: string;
  city: string;
  timezone: string;
  currency: string;
  language: string;
}

export async function detectLocationByIP(ip?: string): Promise<IPLocation | null> {
  try {
    const apiUrl = ip
      ? `https://api.ipquery.io/${ip}`
      : 'https://api.ipquery.io';

    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.error('IP detection failed:', response.statusText);
      return null;
    }

    const data = await response.json();

    return {
      country: data.location?.country || 'Unknown',
      countryCode: data.location?.country_code || 'US',
      city: data.location?.city || 'Unknown',
      timezone: data.location?.timezone || 'UTC',
      currency: data.location?.currency?.code || 'USD',
      language: data.location?.languages?.[0] || 'en',
    };
  } catch (error) {
    console.error('Error detecting IP location:', error);
    return null;
  }
}

export function mapLanguageToLocale(language: string): 'en' | 'es' | 'pt' {
  const langCode = language.toLowerCase().split('-')[0];

  switch (langCode) {
    case 'es':
      return 'es';
    case 'pt':
      return 'pt';
    case 'en':
    default:
      return 'en';
  }
}
