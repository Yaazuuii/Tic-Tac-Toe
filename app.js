    let cells = Array.from(document.querySelectorAll(".cell"));
    let resetBtn = document.querySelector(".reset");
    let player = document.querySelector(".player");

    let state = [
        null, null, null,
        null, null, null,
        null, null, null
        ]


    let currentPlayer = "X";
    let board = ['','','','','','','','', ''];
    let gameActive = true;

    let counter = 0;

    for(let i of cells){
        i.addEventListener("click", function(){
            if(this.innerHTML == ""){
                counter %2==0 ? this.innerHTML = "X" : this.innerHTML = "O";
                counter %2==0 ? this.style.color = "red": this.style.color = "blue";
                counter++;
                let ind = cells.indexOf(this);
                counter%2==1 ? state[ind] = "X": state[ind] = "O";

                for(let s of combinations){
                    if(s[0] == ind || s[1] == ind || s[2] == ind){
                    };
                };
                let winner = checkWinner();

                if(winner.matched){
                    paintWinnerBlocks(winner.matched);
                    disable();
                };
            };
        });
    };

    function paintWinnerBlocks(winnerCombination){
        for(winner of winnerCombination){
            cells[winner].style.backgroundColor = 'darkgreen';
        };
    };

    function checkWinner(){
        matched = null;
        which = null;
        for(combination of combinations){
            let matchedX = 0;
            let matchedO = 0;
            for(index of combination){
                if(state[index] === "X"){
                    matchedX +=1 ;
                }

                if(state[index] === "O"){
                    matchedO += 1;
                };
            };
            if(matchedX === 3 || matchedO === 3){
                if(matchedX === 3) which = "X";
                if(matchedO === 3) which = "O";
                matched = combination;
                break;
            };
        };
        return {matched, which};
    };

    function disable(){
        for(let j of cells){
            j.style.pointerEvents = "none";
        };
    };

    function reset(){
        for(var j of cells){
            j.style.pointerEvents = "auto";
            j.innerHTML = "";
            j.style.background = "transparent";
            state.fill(null);
        };
    };

    resetBtn.addEventListener("click", function(){
        reset();
    });

    const combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    