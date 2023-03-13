import React, {FC} from 'react';

import * as ST from './styled'

type InputProps = {
    input: string,
    setInput: (value: string) => void
}

const Input: FC<InputProps> = ({input,setInput}) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }
    return (
        <ST.Input type='text' value={input} onChange={handleChange}>
            
        </ST.Input>
    );
};

export default Input;