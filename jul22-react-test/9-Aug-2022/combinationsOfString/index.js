function combinationOfString(str)
{
var arr = [];
  for (var x = 0, y=1; x < str.length; x++,y++) 
  {
   arr[x]=str.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, arr.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<arr.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += arr[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join(","));
}

combinationOfString("dog");