import React, {FC} from 'react';

import * as ST from './styled'

type ButtonProps = {
    onClick: () => void
    text: string
}

const Button: FC<ButtonProps> = ({onClick, text}) => {



    return (
        <ST.Button onClick={onClick}>{text}
        </ST.Button>
    );
};

export default Button;