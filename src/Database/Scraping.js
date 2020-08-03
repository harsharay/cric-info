// import { firestore } from "../Firebase/firebase.utils"
const firebase = require('firebase');
const app = firebase.initializeApp({ 
    apiKey: "AIzaSyAAvuA7BTJRVFRym3cRHHzwfPIM3NaCTP0",
    authDomain: "crwn-db-b2bb7.firebaseapp.com",
    databaseURL: "https://crwn-db-b2bb7.firebaseio.com",
    projectId: "crwn-db-b2bb7",
    storageBucket: "crwn-db-b2bb7.appspot.com",
    messagingSenderId: "281711477222",
    appId: "1:281711477222:web:7f1a80f4d9c5158ff89627" 
});
const got = require("got")
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const url= 'https://stats.espncricinfo.com/ci/engine/stats/index.html?class=2;team=6;template=results;type=batting';

const columns = ["name", "span", "matches", "innings", "notOuts", "runs", "highScore", "average"]


got(url).then(response => {
    let dataArray = []
    const dom = new JSDOM(response.body)
    const data = [...dom.window.document.querySelectorAll('.data1')];
    data.map(item => {
        let playerInfo = {}
        columns.map((columnName,index) => {
            playerInfo[columnName] = item.textContent.trim().split("\n")[index].trim() 
        })
        // dataArray.push(playerInfo)
        app.firestore().collection('playersData').add(playerInfo)
    })
    // console.log(dataArray)
    // console.log(app.firestore().collection('playersData'))
    // app.firestore().collection('playersData').add({
    //     dataArray
    // })
})
.catch(e => console.log(e.message))