

const spacecrafts = `https://isro.vercel.app/api/spacecrafts`;
const launchers = `https://isro.vercel.app/api/launchers`;
const satellites = `https://isro.vercel.app/api/customer_satellites`;
const centers = `https://isro.vercel.app/api/centres`;

//  art: https://api.artic.edu/api/v1/artworks

const getSpacecrafts = async () => {

    const response = await fetch(satellites);
    const responseJSON = await response.json();

    console.log(responseJSON);
}
    //     fetch(booksAPI, {
    //         mode: 'cors',
    //         headers: {
    //         'Access-Control-Allow-Origin':'*',
    //         'Access-Control-Allow-Methods':'*',
    //         'Access-Control-Allow-Headers':'*'
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    // }

getSpacecrafts();