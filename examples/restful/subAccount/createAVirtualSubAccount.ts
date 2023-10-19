import dotenv from 'dotenv';
import { RestSubAccountTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: RestSubAccountTypes.createAVirtualSubAccountOptions = {
    recvWindow: 5000,
};

client.createAVirtualSubAccount(
    'alice@test.com',
    options
).then((res: RestSubAccountTypes.createAVirtualSubAccountResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
