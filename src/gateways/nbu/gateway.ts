import axiosLibrary, { type AxiosInstance } from "axios"
import type { NBUGatewayTypes } from "./types";
export class NBUGateway {
    private axios!: AxiosInstance;
    private static instance: NBUGateway;

    constructor() {
        if (NBUGateway.instance) {
            return NBUGateway.instance;
        }
        this.axios = axiosLibrary.create({ baseURL: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange' });
        NBUGateway.instance = this;
    }

    public async getExchangeRates(params: NBUGatewayTypes.ExchangeRate.Params): NBUGatewayTypes.ExchangeRate.ReturnType {
        const { data } = await this.axios.get<NBUGatewayTypes.ExchangeRate.Response>('/?json', { params });
        return data;
    }
}