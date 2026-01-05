# Google Sheets Integration Setup

Your website is already configured to send email signups to Google Sheets. Follow these steps to complete the setup.

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"Blank"** to create a new spreadsheet
3. Name it **"Qualisynx Early Access Signups"**
4. In cell **A1**, type: `Timestamp`
5. In cell **B1**, type: `Email`

## Step 2: Add the Apps Script

1. In your spreadsheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste this code:

\`\`\`javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add a new row with timestamp and email
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.email
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
\`\`\`

4. Click **Save** (disk icon)
5. Name the project: **"Early Access Webhook"**

## Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **"Web app"**
4. Configure:
   - **Description:** Early Access Form
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to Early Access Webhook (unsafe)**
9. Click **Allow**
10. **Copy the Web app URL** (it looks like: `https://script.google.com/macros/s/...`)

## Step 4: Add to Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your **Qualisynx** project
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Set:
   - **Name:** `GOOGLE_SHEETS_WEBHOOK_URL`
   - **Value:** Paste the Web app URL you copied
6. Click **Save**
7. Redeploy your site (Vercel will do this automatically)

## Done!

Now when someone submits their email on your website, it will automatically appear in your Google Sheet with a timestamp.

## Testing

1. Visit your live website
2. Enter a test email (like `test@qualisynx.com`)
3. Click "Join Waitlist"
4. Check your Google Sheet - the email should appear within a few seconds

---

**Need help?** The form will still work without Google Sheets - emails will be logged in your Vercel deployment logs as a backup.
