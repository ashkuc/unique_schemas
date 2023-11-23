import {z} from 'zod'
import {zImageDetails} from './image_details'

export const zMediaDetails = zImageDetails.extend({
  duration: z.number().positive().optional().describe('In seconds'),
  codecs: z.array(z.string()).optional().describe('The codecs used in the media file'),
  loop: z.boolean().optional().describe('Whether the media should loop'),

  poster_url: z.string().optional(),
  poster_details: zImageDetails.optional(),
})

export type IMediaDetails = z.infer<typeof zMediaDetails>
