/* 
    Works with Json
    Require Async await function
        \_ It takes time for the output to be fetched
*/

async function getBotResponse(input) {
    try {
        input = input.toLowerCase();
        const response = await fetch("/static/resources/responses.json");
        const jsresp = await response.json();

        if (jsresp[input]) {
            console.log(jsresp[input]);
            return jsresp[input];
        }

        return "Sorry, I didn't quite catch that";
    } catch (error) {
        console.error("Error fetching or parsing JSON:", error);
        return "Error occurred";
    }
}


/* 
    Works with Js File.
    Dont need the async await function
    Not preferable
*/

// async function getBotResponse(input) {
//     try {
//         input = input.toLowerCase();
//         console.log(DICT[input])
//         const response = await fetch("/static/scripts/responses.json");
//         const jsresp = await response.json();

//         if (jsresp[input]) {
//             console.log(jsresp[input]);
//             return jsresp[input];
//         }

//         return "Not found";
//     } catch (error) {
//         console.error("Error fetching or parsing JSON:", error);
//         return "Error occurred";
//     }
// }

