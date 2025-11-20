# Google Sheets Setup Guide

This guide will help you set up Google Sheets as the database for ArtFintech.

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name your project (e.g., "ArtFintech")
4. Click "Create"

## Step 2: Enable Google Sheets API

1. In your project, go to "APIs & Services" → "Library"
2. Search for "Google Sheets API"
3. Click on it and click "Enable"

## Step 3: Create a Service Account

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Fill in the details:
   - Service account name: `artfintech-sheets`
   - Service account ID: (auto-generated)
   - Click "Create and Continue"
4. Skip the optional steps (Grant access) and click "Done"

## Step 4: Generate Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" → "Create new key"
4. Choose "JSON" format
5. Click "Create" - this will download a JSON file
6. **Keep this file secure!** It contains your credentials

## Step 5: Extract Credentials

Open the downloaded JSON file and find:
- `client_email` - This is your GOOGLE_SERVICE_ACCOUNT_EMAIL
- `private_key` - This is your GOOGLE_PRIVATE_KEY

## Step 6: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new blank spreadsheet
3. Name it "ArtFintech Users" (or any name you prefer)
4. Rename the first sheet to "Users"
5. Add the following headers in Row 1:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | Email | Full Name | Country Code | Phone | User Type | Gallery Name | Password |

## Step 7: Share the Sheet with Service Account

1. Click the "Share" button in your Google Sheet
2. Paste the `client_email` from your JSON file (it looks like: `something@project-name.iam.gserviceaccount.com`)
3. Give it "Editor" permissions
4. Uncheck "Notify people"
5. Click "Share"

## Step 8: Get Your Sheet ID

The Sheet ID is in the URL of your Google Sheet:
```
https://docs.google.com/spreadsheets/d/[THIS-IS-YOUR-SHEET-ID]/edit
```

Copy the ID between `/d/` and `/edit`

## Step 9: Configure Environment Variables

Create a `.env.local` file in your project root:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here (keep the \n as is)\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-sheet-id-from-url
NEXTAUTH_SECRET=generate-with-openssl-rand-base64-32
NEXTAUTH_URL=http://localhost:3000
```

### Important Notes for GOOGLE_PRIVATE_KEY:

- Keep the quotes around the entire key
- Keep the `\n` characters exactly as they are in the JSON file
- The key should start with `-----BEGIN PRIVATE KEY-----\n` and end with `\n-----END PRIVATE KEY-----\n`

Example format:
```env
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQ...\n-----END PRIVATE KEY-----\n"
```

## Step 10: Generate NEXTAUTH_SECRET

Run this command in your terminal:
```bash
openssl rand -base64 32
```

Copy the output and use it as your NEXTAUTH_SECRET

## Step 11: Test the Connection

Start your development server:
```bash
npm run dev
```

Try to register a new user. If successful, you should see a new row appear in your Google Sheet!

## Troubleshooting

### "Permission denied" error
- Make sure you shared the sheet with the service account email
- Check that the service account has "Editor" permissions

### "Invalid credentials" error
- Verify that the GOOGLE_PRIVATE_KEY is properly formatted with `\n` characters
- Make sure the quotes are around the entire key in .env.local

### "Sheet not found" error
- Double-check the GOOGLE_SHEET_ID
- Make sure the sheet name is exactly "Users" (case-sensitive)

### "API not enabled" error
- Go back to Google Cloud Console and make sure Google Sheets API is enabled

## Security Best Practices

1. **Never commit** your `.env.local` file to git (it's already in `.gitignore`)
2. **Never share** your service account credentials
3. Keep your JSON key file in a secure location
4. For production, consider using environment variables from your hosting provider
5. Regularly rotate your service account keys

## Moving to Production

For production deployments:

1. Create a separate Google Cloud Project for production
2. Use a separate Google Sheet for production data
3. Store environment variables in your hosting platform (Vercel, Netlify, etc.)
4. Consider migrating to a proper database (PostgreSQL, MongoDB) for better performance and security

## Need Help?

If you encounter any issues:
1. Check the [Google Sheets API documentation](https://developers.google.com/sheets/api)
2. Review the [Google Cloud Service Accounts guide](https://cloud.google.com/iam/docs/service-accounts)
3. Open an issue in the project repository
