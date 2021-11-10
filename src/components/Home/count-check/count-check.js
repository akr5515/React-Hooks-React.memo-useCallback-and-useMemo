import { useCallback, useMemo, useState } from 'react';
import Button from './count-components/Button';
import ShowCount from './count-components/ShowCount';
import Title from './count-components/Title';

const CountCheck=()=> {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(() => {
        setCount1((prevCount) => prevCount + 1);
    }, []);

    const incrementByFive = useCallback(() => {
        setCount2((prevCount) => prevCount + 5);
    }, []);

    const isEvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 1000000000){
            i ++; 
        } 
        return count1 % 2 === 0;
    }, [count1]);

    return (
        <div className="app">
            <Title />
            <ShowCount count={count1} title="Counter 1" />
            <h3>{isEvenOrOdd ? 'Even' : 'Odd'}</h3>
            <Button handleClick={incrementByOne}>Increment by one</Button>
            
            <ShowCount count={count2} title="Counter 2" />
            <Button handleClick={incrementByFive}>Increment by five</Button>
        </div>
    );
}

export default CountCheck;