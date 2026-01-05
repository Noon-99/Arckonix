# Google Sheets Setup Guide

Follow these steps to collect email signups in a Google Spreadsheet:

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ Blank"** to create a new spreadsheet
3. Name it: **"Qualisynx Early Access Signups"**
4. In the first row, add these headers:
   - Column A: **Email**
   - Column B: **Timestamp**

## Step 2: Create a Google Apps Script

1. In your spreadsheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste this code:

\`\`\`javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Add a new row with email and timestamp
    sheet.appendRow([data.email, data.timestamp]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
\`\`\`

4. Click **Save** (💾 icon)
5. Name your project: **"Email Signup Handler"**

## Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Set these options:
   - **Description**: Email signup webhook
   - **Execute as**: Me
   - **Who has access**: Anyone
5. Click **Deploy**
6. Click **Authorize access** (you'll need to grant permissions)
7. **Copy the Web app URL** - it looks like:
   `https://script.google.com/macros/s/ABC123.../exec`

## Step 4: Add to Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `GOOGLE_SHEETS_WEBHOOK_URL`
   - **Value**: Paste the Web app URL you copied
4. Click **Save**
5. Redeploy your site

## Done!

Now when someone enters their email on your site, it will automatically appear in your Google Spreadsheet with a timestamp!

You can access your spreadsheet anytime to see all signups.
