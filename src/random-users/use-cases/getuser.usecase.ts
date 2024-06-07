import { DefaultUseCase } from "@/shared/domain/use-cases/default-use-case";
import { FetchHttpClient } from "@/shared/infra/http/fetch-http-client/fetch-http-client";
import { UserModel } from "@/random-users/domain/models/user.model";
import { BaseRequest } from "@/shared/infra/request/base-request";

export namespace GetUserUseCase {
  export type Output = UserModel.Entity;

  export class UseCase
    extends BaseRequest
    implements DefaultUseCase<undefined, Output>
  {
    async execute(): Promise<UserModel.Entity> {
      const response = await FetchHttpClient.get<{
        results: UserModel.Entity[];
      }>("https://randomuser.me/api/");

      return this.parseSchema(response.results[0], UserModel.Schema);
    }
  }
}
