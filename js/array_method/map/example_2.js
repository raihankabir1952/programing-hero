function getUpperCaseName(names)
{
    return names.map((name) =>
    {
        return name.toUpperCase()
    })
}

let result = getUpperCaseName([
    "Raihan",
    "Kabir",
    "Sakib"
]);

console.log(result);