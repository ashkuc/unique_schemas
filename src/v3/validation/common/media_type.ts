import {z} from 'zod'

export const zMediaType = z.enum([
  'image',
  'animation',
  'video',
  'audio',
  'spatial',
  'pdf',
  'other',
]).describe('The type of media. This field may be used to determine how to display the media.')

export type IMediaType = z.infer<typeof zMediaType>
