const CAT_PIC_AMOUNT = 2;

const FUN_FACTS = [
    "My favorite color is purple. Duh",
    "I am from Russia.",
    "Currently I use Fedora Linux as my main OS.",
    "I do video editing sometimes, most of my time spent editing was on Adobe Premiere Pro (adobe sucks)",
    "I hate all of my past usernames...",
    "I like watching small youtuber's under 10k subs.",
    "Yakuza/Like A Dragon is my #1 favorite game series.",
    "My first game I played was probably Sonic Adventure: DX.",
    "I wanna try making a game and uploading it to Steam.",
    "My breakfast is a butter sandwich + tea combo.",
    "My favorite food is probably Блины (pancakes)",
    "I am not good at cooking.",
    "I started programming as a hobby in 2022. Before that I was just scripting hello world's here and there.",
    "Lua is my favorite programming language because It's just so silly!!",
    "I really like eating bread. Just overall everything bread-related.",
    "I am bad at school. Skill issue",
]

function insertFunFact() {
    var num = Math.floor(Math.random() * FUN_FACTS.length - 1) + 1;
    var fact = FUN_FACTS[num]

    var element = document.getElementById("fun-fact")
    element.innerHTML = fact

    var title = document.getElementById("fun-fact-title")
    title.innerHTML = "Fun fact #" + (num + 1)
}


window.onload = function() {
    insertFunFact()
}
