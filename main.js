const url1 = "https://api.currencyapi.com/v3/latest?apikey=cur_live_ZSK803Us8Buc2e2u5x11GfC6HC5XqUfLFlyBqBGX";

let data;
const convertCurrency=async()=>{
  console.log("getting data...");
  let response=await fetch(url1);
  let result=await response.json();
  data=result.data;

  const amount=parseFloat(document.getElementById('amount').value);
  const from=document.getElementById('fromCurrency').value;
  const to=document.getElementById('toCurrency').value;

  if(isNaN(amount) || amount<=0){
    document.getElementById('result').textContent="Please enter a valid amount!!";
    return;
  }
  const converted=(amount/data[from]?.value)* data[to]?.value;
  document.getElementById('result').textContent=
  ` ${amount} ${from}=${converted.toFixed(2)} ${to}`;

  
};


   