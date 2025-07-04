# Supabase Configuration

## Secure Secret Management

This project is configured to store sensitive credentials (such as Firebase configuration variables) using Supabase's encrypted project secrets.

### Firebase Secrets (documented)
- FIREBASE_API_KEY
- FIREBASE_AUTH_DOMAIN
- FIREBASE_PROJECT_ID
- FIREBASE_STORAGE_BUCKET
- FIREBASE_MESSAGING_SENDER_ID
- FIREBASE_APP_ID
- FIREBASE_MEASUREMENT_ID

These secrets are intended to be stored securely in Supabase's `secret_store` table and kept out of version control.  
**Note**: Actual secret creation requires that the Supabase project's credentials (URL and service key) are available and properly configured.

---

If not already done, ensure Supabase credentials (`supabase_url` and `supabase_key`) are set for the environment before running secret management routines.

_Last updated: Firebase secret storage procedure initiated (credentials required)._
