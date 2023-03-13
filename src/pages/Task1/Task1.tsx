import React, {FC, useState} from 'react';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import * as ST from './styled'
import TextBlock from "../../components/TextBlock/TextBlock";

const Task1:FC = () => {

    const [input, setInput] = useState('')

    const [text, setText] = useState('')

    const showInput = () => {
        setText(input)
    }

    return (
        <>
            <ST.InputButton>
                <Input input={input} setInput={setInput}/>
                <Button onClick={showInput} text={'Enter'}/>
            </ST.InputButton>
            <TextBlock text={text}/>
        </>
    );
};

export default Task1;