import {z} from 'zod'

// todo - describe - EIP 1155 ???
export const zLocalization = z.object({
  uri: z.string().includes('{locale}'),
  default: z.string(),
  locales: z.array(z.string()),
})

export type ILocalization = z.infer<typeof zLocalization>
