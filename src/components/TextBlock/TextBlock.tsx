import React, {FC} from 'react';

import * as ST from './styled'

type TextProps = {
    text: string
}

const TextBlock: FC<TextProps> = ({text}) => {


    return (
        <ST.Text>
            {text}
        </ST.Text>
    )
}


export default TextBlock;