
// TODO : Create the basic template of how the information will be displayed

import express from "express";
import axios from "axios";
const app = express();
const port = 3000;
const API_URL = "https://api.coingecko.com/api/v3/";



app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Vai83zDdBjhvcksfceFFF6qg'}
    };
    try { 
        const response = await axios.get(API_URL + 'simple/price?ids=binance-peg-polkadot&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=true', options);
        res.render("index.ejs", { 
            price: response.data["binance-peg-polkadot"].usd,
            change: response.data["binance-peg-polkadot"].usd_24_change,
    }); 
    } catch(error) {
        console.log(error.response.data);
        res.status(500);
    }
    
    });







app.listen(port, () => {
    console.log(`listening on ${port}`);
})

