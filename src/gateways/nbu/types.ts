import type { ExchangeRate } from "@/types";

export namespace NBUGatewayTypes {
    export namespace ExchangeRate {
        export type Params = {
            date: string;
        }

        export type Response = ExchangeRate[];
        export type ReturnType = Promise<ExchangeRate[]>;
    }
}