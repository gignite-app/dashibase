import { Page, Attribute, AttributeType, Config, Trigger } from './utils/config'

// Change this to build your own dashboard - see `utils/config.ts` for documentation

const DASHIBASE_CONFIG:Config = {
  name: "Gignite Dashboard",
  supabase_url: "https://xjrxieijgaymdltmazvu.supabase.co",
  supabase_anon_key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqcnhpZWlqZ2F5bWRsdG1henZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2MTYyNjcsImV4cCI6MTk5NDE5MjI2N30.d3mxTGQx0PgDOgbjx_5UwuVDRHYN6Ao7Bzv-MJLkr8A",
  pages: [
    {
      name: "My Page",
      page_id: "my_page",
      table_id: "my_table",
      mode: "list",
      attributes: [
        {
          id: "value",
          label: "Value",
          required: false,
          readonly: false,
          type: AttributeType.Text,
        },
        {
          // Enum example - this will generate a dropdown with the provided options
          id: "foo",
          label: "Foo",
          required: false,
          readonly: false,
          type: AttributeType.Enum,
          enumOptions: ['foo', 'bar'], // Specify enum options
        },
        {
          // Join example - for showing joined data from other tables
          // This will also work with tables joined via join tables
          // TODO: Add clearer documentation and examples
          id: "foreign_table(foreign_table_col)",
          label: "Join Example",
          required: false,
          readonly: false,
          type: AttributeType.Join,
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
