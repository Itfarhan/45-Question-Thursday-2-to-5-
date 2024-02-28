function describe_city(city: string, country: string = 'Unknown'): void {
    console.log(`${city} is in ${country}.`);
}

//different cities
describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Tokyo'); 
