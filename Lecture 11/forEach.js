const lang = ['java', 'ruby', 'C++', 'Javascript', 'Node', 'Flutter'];

lang.forEach(function (val) {
    // console.log(val)
})

lang.forEach( (val)  => {
    // console.log(val)
})

function printMe(item) {
    console.log(item);
}

// lang.forEach(printMe);

lang.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const mycoding = [
    {
        'languageName' : 'javascript',
        'languageFileName' : 'js'
    },
    {
        'languageName' : 'java',
        'languageFileName' : 'java'
    },
    {
        'languageName' : 'python',
        'languageFileName' : 'py'
    },
]

mycoding.forEach((item) => {
    console.log(item.languageFileName)
})