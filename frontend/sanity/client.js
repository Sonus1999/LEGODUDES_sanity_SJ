import {createClient} from "@sanity/client"

export const client = createClient({
   projectId: "goso967h",
   dataset: "production",
   useCdn: true,
   apiVersion: "2022-03-07" 
})


//sk6waqrtxPZCuwrrnZucmE9l4SQONT6ExEPDGMaNPafuAL1c01DXv8cgJ9yTUy51cSlWyKRz9I68RGgV0istr3nUthVpmwmMSI6jBI9ZbeXviwHYUMR0rIuT6Hb9R9bD5TUP9O0D3wRur2dfxsqhvDF6swCffA5XSD6WzMDIVSVag2a2NC0M

export const writeClient = createClient({
   projectId: "goso967h",
   dataset: "production",
   useCdn: false,
   apiVersion: "2022-03-07",
   token: "sk6waqrtxPZCuwrrnZucmE9l4SQONT6ExEPDGMaNPafuAL1c01DXv8cgJ9yTUy51cSlWyKRz9I68RGgV0istr3nUthVpmwmMSI6jBI9ZbeXviwHYUMR0rIuT6Hb9R9bD5TUP9O0D3wRur2dfxsqhvDF6swCffA5XSD6WzMDIVSVag2a2NC0M"
   
})