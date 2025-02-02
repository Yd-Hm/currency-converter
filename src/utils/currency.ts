

export const  convert =async (baseCurrency:string, targetCurrency:string, amount:number) => {

  const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${baseCurrency}/${targetCurrency}.json`

    return await fetch(url)
    // const data = await(resonse.json())
    // console.log(data)
    .then(response =>response.json())
    .then(data => data[targetCurrency]*amount)
    .catch((err) => {
      console.log(err.message);
   });
  }



export const getCurrencies = () => {

  return [
    { value: 'usd', text: 'American Dollar' },
    { value: 'eur', text: 'Euro' },
    { value: 'dzd', text: 'Algerian Dinar' },
    { value: 'cad', text: 'Canadian Dollar' },
    { value: 'aed', text: 'United Arab Emirates Dirham' },
    { value: 'amd', text: 'Armenian dram' },
    { value: 'iqd', text: 'Iraqi Dinar' },
    { value: 'jmd', text: 'Jamaican Dollar' },
    { value: 'jod', text: 'Jordanian Dinar' },
    { value: 'jpy', text: 'Japanese Yen' },
  ]
}