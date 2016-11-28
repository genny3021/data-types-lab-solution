module.exports = {
	
	dataTypes: function(param){
	if (typeof param == 'string'){
		return param.length;
	}
	if (typeof param == 'undefined' || param == null){
		return "no value";
	}
	if (typeof param == 'boolean'){
		return param;
	}
	if (typeof param == 'number'){
		if (param < 100){
		return "less than 100";			
		}else if(param == 100){			
		return "equal to 100";	
		}else{
		return "more than 100";				
		}
	}
	/*if (typeof param == 'object'){
		if(typeof param[2] === 'undefined' || param.length  === 0) {
			return 'undefined';
		}
		else{
			return param[2];				
		}
	}*/
	if (typeof param == 'object'){
       if (param.length < 3) return undefined
			else return param[2];
   }
	if (typeof param == 'function'){
		
		return param(true);				
		
	}
	
}
}