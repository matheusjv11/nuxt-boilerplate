import { z } from "zod";

export const UserNameModelSchema = z.object({
  title: z.string(),
  first: z.string(),
  last: z.string(),
});

export type UserNameModel = z.infer<typeof UserNameModelSchema>;
