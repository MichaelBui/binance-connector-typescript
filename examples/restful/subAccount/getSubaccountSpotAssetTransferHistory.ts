import dotenv from 'dotenv';
import { RestSubAccountTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestSubAccountTypes.getSubAccountSpotAssetTransferHistoryOptions = {
    toEmail: 'alice@test.com'
};

client.getSubAccountSpotAssetTransferHistory(
    options
).then((res: RestSubAccountTypes.getSubAccountSpotAssetTransferHistoryResponse[]) => {
    console.log(res);
}).catch(err => { console.log(err); });
