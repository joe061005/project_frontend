// Overview 
export interface StockDetails {
    id: number;
    ImageURL: string;
    MarketCap: number;
    Ticker: string;
    Name: string;
    LatestPrice: number;
    PrevPrice: number;
    Volume: number;
}

// Home, prediction
export interface stockImage {
    id: number;
    ImageURL: string;
    Ticker: string;
}

// prediction
export interface stockSentimentRaw {
    id: number;
    Ticker: string;
    date: Date;
    sentence: string;
    sentiment: number;
}

// prediction
export interface stockSentiment {
    [key: string]: number[]
}

// prediction
export interface stockSentimentMap {
    Bearish: number,
    Neutral: number,
    Bullish: number,

}
