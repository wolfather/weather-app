
export class ApiConfigs {
    public static SINGLE_CITY_API_URL: string = `http://api.openweathermap.org/data/2.5/weather`;
    public static GROUP_CITY_API_URL: string = `http://api.openweathermap.org/data/2.5/group`;
    //q=London
    //`http://openweathermap.org/api`;
    public static API_KEY: string = `d30fe364733171a647cd4015d7b898ac`;

    // getApiUrl(len: number = 0): string|undefined {
    //     if(len === 0) { return undefined}
    //     return len === 1 ? this.SINGLE_CITY_API_URL : this.GROUP_CITY_API_URL;
    // }
}

