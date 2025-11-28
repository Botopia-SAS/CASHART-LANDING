import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export async function getGoogleSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: SCOPES,
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

export async function addUserToSheet(userData: {
  email: string;
  fullName: string;
  phone: string;
  countryCode: string;
  password: string;
  userType: 'collector' | 'gallery';
  galleryName?: string;
  website?: string;
  instagram?: string;
  priceRange?: string;
  financingExperience?: string;
}) {
  const sheets = await getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  const values = [
    [
      new Date().toISOString(),
      userData.email,
      userData.fullName,
      userData.countryCode,
      userData.phone,
      userData.userType,
      userData.galleryName || '',
      userData.password, // In production, this should be hashed
      userData.website || '',
      userData.instagram || '',
      userData.priceRange || '',
      userData.financingExperience || '',
    ],
  ];

  console.log('Appending to sheets - Row data:', values[0]);
  console.log('Column I (website):', userData.website);
  console.log('Column J (instagram):', userData.instagram);
  console.log('Column K (priceRange):', userData.priceRange);
  console.log('Column L (financingExperience):', userData.financingExperience);

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Users!A:L',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values,
    },
  });

  return response.data;
}

export async function getUserByEmail(email: string) {
  const sheets = await getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Users!A:L',
  });

  const rows = response.data.values;
  if (!rows || rows.length === 0) {
    return null;
  }

  // Find user by email (column B, index 1)
  const userRow = rows.find(row => row[1] === email);

  if (!userRow) {
    return null;
  }

  return {
    timestamp: userRow[0],
    email: userRow[1],
    fullName: userRow[2],
    countryCode: userRow[3],
    phone: userRow[4],
    userType: userRow[5] as 'collector' | 'gallery',
    galleryName: userRow[6] || undefined,
    password: userRow[7],
    website: userRow[8] || undefined,
    instagram: userRow[9] || undefined,
    priceRange: userRow[10] || undefined,
    financingExperience: userRow[11] || undefined,
  };
}

export async function addSurveyToSheet(surveyData: {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  companyName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
}) {
  const sheets = await getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  const values = [
    [
      new Date().toISOString(),
      surveyData.q1,
      surveyData.q2,
      surveyData.q3,
      surveyData.q4,
      surveyData.q5,
      surveyData.q6,
      surveyData.q7,
      surveyData.companyName,
      surveyData.fullName,
      surveyData.email,
      surveyData.phoneNumber,
    ],
  ];

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'A:L', // Using Sheet1 by default (no sheet name prefix)
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values,
    },
  });

  return response.data;
}
