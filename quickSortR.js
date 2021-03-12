function  quickSortR(arr, left, right)
{
	var i = left;
	var j = right;
	var tmp;
	var pivotidx = (left + right) / 2; 
	var pivot = parseInt(arr[pivotidx.toFixed()]);  

	while (i <= j)
	{
		while (parseInt(arr[i]) < pivot)i++;
		while (parseInt(arr[j]) > pivot)j--;
		if (i <= j)
		{
			//console.log(arr[i],pivot,arr[j])
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			//console.log(arr[i],pivot,arr[j])
			i++;
			j--;

		}
	}
    //console.log(arr)
	if (left < j)
		quickSortR(arr, left, j);
	if (i < right)
		quickSortR(arr, i, right);
	return arr;
}
var array = [8, 2, 5, 7, 4, 3, 12, 6, 19, 11, 10, 13, 9];
console.log(quickSortR(array, 0, array.length -1));