
unsolved =
    ['048301560360008090910670003020000935509010200670020010004002107090100008150834029',
        '561092730020780090900005046600000427010070003073000819035900670700103080000000050',
        '904520070001890240002643000070960380000108700600000010090080000000750030000312569',
        '000030007480960501063570820009610203350097006000005094000000005804706910001040070',
        '627140503345206971089503602000700364793054018460008059056031097971005836834067105'
    ]
solved =
    ['748391562365248791912675483421786935589413276673529814834962157296157348157834629',
        '561492738324786195987315246659831427418279563273564819135928674746153982892647351',
        '984521673361897245752643891175964382429138756638275914593486127216759438847312569',
        '925831467487962531163574829749618253352497186618325794276189345834756912591243678',
        '627149583345286971189573642518792364793654218462318759256831497971425836834967125']


const len = unsolved.length
const rand = Math.floor(Math.random() * len)
var count = 0
var count2 = 0

var f  = 81 



function fillTable(random) {
    var arrIndex = 0;


    for (var i = 0; i < 9; i++) {


        for (var j = 0; j < 9; j++) {

            var cellid = "r" + i + "c" + j;

            if (unsolved[rand].charAt(arrIndex) != '0') {
                document.getElementById(cellid).firstChild.value = (unsolved[random].charAt(arrIndex))
                document.getElementById(cellid).firstChild.disabled = true
            }
            arrIndex++;
        }

    }

}
function refreshPage() {
    window.location.reload(),
        document.getElementById('newStart').play()

    alert("               ⭐⭐⭐⭐⭐          New game has Started ;)          ⭐⭐⭐⭐⭐")

}
function incorrect() {
    document.getElementById('false').play()
 
}





function checkAllCells() {
    for (var i = 0; i < 9; i++) {


        for (var j = 0; j < 9; j++) {

            var cellid = "r" + i + "c" + j;
            var r = parseInt(cellid[1])
            var c = parseInt(cellid[3])
            var index = (r + c) + (r * 8)
            
            var x = solved[rand].charAt(index).localeCompare(document.getElementById(cellid).children[0].value)
            

            // if the boxes are still empty or the value is wrong 
            if (document.getElementById(cellid).firstChild.value.length == 0 || x != 0 ) {
                return false
            }
        }

    }
    return true

}

function solveTheSudoku() {
    var arrIndex = 0;


    for (var i = 0; i < 9; i++) {


        for (var j = 0; j < 9; j++) {

            var cellid = "r" + i + "c" + j;
            var diff = unsolved[rand].charAt(arrIndex).localeCompare("0")
            console.log("the difference is " + diff)
            if (diff == 0) {
                document.getElementById(cellid).firstChild.value = (solved[rand].charAt(arrIndex))
                document.getElementById(cellid).firstChild.disabled = true
                document.getElementById(cellid).firstChild.style.color = '#00fa00'
            }




            arrIndex++


        }

    }
    alert("There is an easter egg if you solve it by yourself ")
}


function listenToChanges() {

    document.querySelectorAll('.inputC').forEach(item => addEventListener('input', (event) => {
        var check = checkAllCells()
        if (check) {
            document.getElementById('win').play()
            alert("     Congratulations!!! 🎉🎉🎉")
            window.open('https://youtu.be/zlarOstAdVU?t=21')

        }
        var id = event.target.parentNode.id
        
        var r = parseInt(id[1])
        var c = parseInt(id[3])
        var index = (r + c) + (r * 8)
        
        var x = solved[rand].charAt(index).localeCompare(document.getElementById(id).children[0].value)
        if (x == 0) {
            document.getElementById(id).children[0].disabled = true;
            document.getElementById(id).children[0].style.color = '#00fa00'

        }
        else {

            document.getElementById(id).children[0].style.color = "red"
            incorrect()

            count2++

            if ( f == count2)
            {
                f += 81
                count++
            }


            var x = "Mistakes : " + count
            document.getElementById('count').innerHTML = x 
           



        }




    }))


}

fillTable(rand)
listenToChanges()

