import {z} from 'zod'

const getRefineForSemver = (major: number, minor: number, patch: number) => ({
  fn: (v?: string) => {
    if (!v) return true

    const [_major, _minor, _patch] = v.split('.').map(Number)

    if (_major !== major) return false
    if (_minor < minor) return false

    return _patch >= patch;
  },
  message: `version must be in semver format: ${major || 'x'}.${minor || 'x'}.${patch || 'x'}`,
})

const defaultVersionRefine = getRefineForSemver(2, 0, 0)

export const zVersion = z.string()
    .regex(/^\d+\.\d+\.\d+$/)
    .refine(defaultVersionRefine.fn, defaultVersionRefine.message);

export type VersionSchema = z.infer<typeof zVersion>
