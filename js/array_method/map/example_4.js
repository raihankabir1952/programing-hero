function addPrefix(names)
{
    return names.map((name) =>
    {
        return `Student ${name}`
    })
}

let result = addPrefix([
    "Raihan",
    "Kabir",
    "Sakib"
]);

console.log(result);