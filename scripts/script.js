const abominationSelectedOption = document.getElementById('abominationSelected');
const dangerLevelOption = document.getElementById('dangerLevel');
let showPV = document.getElementById('showPV');
let showRules = document.getElementById('showRules');



function getDatas () {
    let abominationUser = abominationSelectedOption.value;
    let dangerUser = dangerLevelOption.value;
    ruleDisplay(dangerUser, abominationUser);
}

function ruleDisplay (dangerIndex, abominationUser) {
        generalRules.forEach(rule => {
            if (rule.abomination == abominationUser && rule.dangerLevel == dangerIndex) {
                showPV.innerHTML = rule.pv;
                showRules.innerHTML = rule.rules;
            }
        })
}