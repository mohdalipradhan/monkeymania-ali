import bluecard from "../Images/bluecard.png"
import itsamatch from "../Images/itsamatch.png"
import FirstOne from "../Images/FirstOne.png"
import secondone from "../Images/secondone.png"


const instructiondata = [
    {
        imga: FirstOne,
        img: secondone,
        title: "Select a pink card",
        smalltitle: "It has images",
        sno: "01",
        divcolor: "#ffbc0b"
    },
    {
        img: bluecard,
        title: "Select a blue card.",
        smalltitle: "It has alphabets.",
        sno: "02",
        divcolor: "#a6cd25"
    },
    {
        img: itsamatch,
        smalltitlea: "If they’re same",
        title: "Its a match!",
        smalltitle: "otherwise retry :(",
        divcolor: "#fb993d"
    }
]

export default instructiondata;