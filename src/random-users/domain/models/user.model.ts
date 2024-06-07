import { z } from "zod";
import { UserNameModelSchema } from "./user-name.model";
import { UserPictureModelSchema } from "./user-picture.model";

export namespace UserModel {
  export const Schema = z.object({
    gender: z.string(),
    name: UserNameModelSchema,
    email: z.string(),
    picture: UserPictureModelSchema,
  });

  export type Entity = z.infer<typeof Schema>;
}
