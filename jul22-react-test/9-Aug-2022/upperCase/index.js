function uppercase(str)
{
    let array = str.split(" ");
    for (let i = 0; i < array.length; i++) {
        array[i] =  array[i][0].toUpperCase() +  array[i].substring(1);

    }
    return array.join(" ");
}
console.log(uppercase("the quick brown fox"));