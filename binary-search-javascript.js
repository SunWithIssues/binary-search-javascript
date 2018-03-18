function biSearch(lista, el){
	
	let ub = lista.length -1;
	let lb = 0;
	let mid;
	
	while (lb < ub+1){
		mid = Math.floor((ub + lb) / 2);
		
		if (lista[mid] === el){
			return true;
		} else if (lista[mid] > el){
			ub = mid -1;
		} else if (lista[mid] < el){
			lb = mid +1;
		}	
	}
	
	return false;
}