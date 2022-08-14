/* Write a JavaScript program to sort the items of an array. 
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8 */

        const arr1 = [-3,8,7,6,5,-4,3,2,1];
        const arr2 = [];
        let min = arr1[0];
        var max = arr1[0];
        let pos;
        for (i=0; i<arr1.length; i++)
        {
                if ( max < arr1[i] ) 
                max = arr1[i];
        }
        
        for (var i = 0; i < arr1.length; i++)
        {
                for (let j = 0; j < arr1.length; j++)
                {
                        if (arr1[j]!="x")
                        {
                                if (min > arr1[j]) 
                                {
                                        min = arr1[j];
                                        pos = j;
                                }
                        }
                    }
                    arr2[i] = min;
                    arr1[pos] = "x";
                    min = max;
            }
            console.log(arr2);
                  