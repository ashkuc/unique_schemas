import {z} from 'zod'
import {zMediaDetails} from './media_details'
import {zMediaType} from './media_type'

export const zAdditionalMedia = z.object({
  url: z.string(),
  name: z.string().optional(),
  details: zMediaDetails.optional(),
  type: zMediaType.optional(),

  tag: z.string().optional(),
})
