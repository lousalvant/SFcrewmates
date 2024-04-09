import { createClient } from '@supabase/supabase-js'

const URL = 'https://vobmnrudcdcastdqmzuk.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvYm1ucnVkY2RjYXN0ZHFtenVrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjA4NzE5OCwiZXhwIjoyMDI3NjYzMTk4fQ.eqxO-ywZdc2b2DFVYWdtsDkr3xlLYCmD2xDt21eZDfY';

export const supabase = createClient(URL, API_KEY);