import { z } from "zod";

export const UserPictureModelSchema = z.object({
  large: z.string(),
  medium: z.string(),
  thumbnail: z.string(),
});

export type UserPictureModel = z.infer<typeof UserPictureModelSchema>;
