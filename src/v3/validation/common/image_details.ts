import {z} from 'zod'
import {zMediaType} from './media_type'

export const zImageDetails = z.object({
  name: z.string().optional().describe('The name of the image'),
  type: zMediaType.optional(),
  bytes: z.number().positive().optional(),
  format: z.string().optional(),
  sha256: z.string().optional(),
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
  order: z.number().optional(),
})

export type IImageDetails = z.infer<typeof zImageDetails>
