import { useState } from 'react'
import './styles.sass'

export const Calculator = () => {
	const [selectedNumbers, setSelectedNumbers] = useState([])
	// [1,2,3]
	const [operations, setOperations] = useState([])
	// [+, -]
	const [result, setResult] = useState(0)
	const numbers = [...new Array(10)]
	const onNumberClick = (n) => {
		setSelectedNumbers(prev => [...prev, n])

	}
	const onOperationClick = (o) => {
		setOperations(prev => [...prev, o])
	} 

	const onEqual = () => {
		let r = selectedNumbers[0]
		
		selectedNumbers.forEach((n, i) => {
			if(i !== 0 ){
				switch(operations[i-1]){
					case '+':
						r += n
					break;
					case '-':
						r -= n
					break

				}
				
			}
		})
		setResult(r)
	}

	return <div className="calculator">
		
		<div className='numbers'>
		{numbers.map((el, i) => <button className="numbers__element" key={i} onClick={() => onNumberClick(i)}>{i}</button>)}
			
			
		</div>
		<div className="operations">
			<button className='operations__plus' onClick={() => onOperationClick('+')}>+</button>
			<button className='operations__plus' onClick={() => onOperationClick('-')}>-</button>
			<button className='operations__equal' onClick={onEqual}>=</button>
			
		</div>
		{result || selectedNumbers.map((n, i) => `${n} ${operations[i] ?? ''}` )}
		

	</div>
}