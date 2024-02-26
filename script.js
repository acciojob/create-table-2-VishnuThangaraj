const tableBody = document.getElementById('myTable');

function createTable() {
    //Write your code here
	let rn = prompt("Input number of rows");
	rn = +rn;
	let cn = prompt("Input number of columns");
	cn = +cn;
	tableBody.innerHtml = ""; // Clear previous rows and columns

	for(let row=0; row<rn; row++){
		let rows = tableBody.insertRow();
		for(let col=cn-1; col>=0; col--){
			rows.insertCell(0).textContent = `Row-${row} Column-${col}`;
		}
	}
}
