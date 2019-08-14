const puppet  = require('puppeteer');
const {JSDOM} = require('JSDOM');
const url     = 'https://www.reddit.com'
const reddit  = async () =>{
    const browser = await puppet.launch();
    const page    = await browser.newPage();
    await page.goto(url);
    const getData = async(e)=>{
        e = new JSDOM(e);
        const document = e.window.document;
        const divElements = document.querySelectorAll('.rpBJOHq2PR60pnwJlUyP0>div');//Get post divs
        const parse = e =>{
            let votes = e.querySelector('._1rZYMD_4xY3gRcSS3p8ODO'); //Gets the votes first because 
                                                                     //some elements can have the same class name 
            if(!(votes&&votes.innerHTML)) return; //Checks if its a valid post
            //Valid post
            votes=votes.innerHTML;
            const postName = (e.querySelector('._eYtD2XCVieq6emjKBH3m')).innerHTML; //Get post names
            const commentsAmount = (e.querySelector('.FHCV02u6Cp2zYL0fhQPsO')).innerHTML; //Get comments
            const postUrl = url+(e.querySelector('.SQnoC3ObvgnGjWt90zD9Z._2INHSNB8V5eaWp4P0rY_mE')).href; //Get post URL and append reddit
            return{votes,postName,commentsAmount,postUrl}
        }
        return Array.from(divElements).map(parse) //Map HTMLDivElements to the function 
    }
    return (await getData(await page.evaluate(()=>document.body.innerHTML))).filter(e=>e!=null); //Filter out undefined values
}
reddit().then(console.log);
