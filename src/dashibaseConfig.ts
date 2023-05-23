import { Page, Attribute, AttributeType, Config, Trigger } from './utils/config'

// Change this to build your own dashboard - see `utils/config.ts` for documentation

const DASHIBASE_CONFIG:Config = {
  name: "Gignite Dashboard",
  supabase_url: "https://xjrxieijgaymdltmazvu.supabase.co",
  supabase_anon_key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqcnhpZWlqZ2F5bWRsdG1henZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2MTYyNjcsImV4cCI6MTk5NDE5MjI2N30.d3mxTGQx0PgDOgbjx_5UwuVDRHYN6Ao7Bzv-MJLkr8A",
  pages: [
    {
      name: "New Signups",
      page_id: "waitlist",
      table_id: "early_access",
      mode: "list",
      attributes: [
        {
          id: "name",
          label: "Name",
          required: false,
          readonly: false,
          type: AttributeType.Text,
        },
        {
          id: "email",
          label: "Email",
          required: false,
          readonly: false,
          type: AttributeType.Text,
        },
        {
          id: "phoneNumber",
          label: "Phone Number",
          required: false,
          readonly: false,
          type: AttributeType.Text,
        },
        {
          id: "country",
          label: "Country",
          required: false,
          readonly: false,
          type: AttributeType.Text,
        },
        {
          id: "phoneNumber",
          label: "Phone Number",
          required: false,
          readonly: false,
          type: AttributeType.Text,
        },
        {
          id: "company",
          label: "Company",
          required: false,
          readonly: false,
          type: AttributeType.Text,
        },
      ] as Attribute[],
      // Trigger example - for adding custom actions to the page
      // See config.ts for more details
      // TODO: Add clearer documentation and examples
      triggers: [
        {
          label: 'My Action',
          code: 'alert(user.email)'
        }
      ] as Trigger[]
    },
  ] as Page[],
}

export default DASHIBASE_CONFIG
