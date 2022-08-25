export default async function spacexApi(setData)
{
    const response = await fetch ('https://api.spacexdata.com/v4/launchpads')
    const data = await response.json();
    setData(data);
}



