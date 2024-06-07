import { ParseError } from "@/shared/domain/errors";
import { ZodObject, ZodRawShape } from "zod";

export abstract class BaseRequest {
  protected parseSchema<T extends ZodRawShape>(obj: any, schema: ZodObject<T>) {
    try {
      return schema.parse(obj);
    } catch (parseError) {
      console.error(parseError);
      throw new ParseError();
    }
  }
}
