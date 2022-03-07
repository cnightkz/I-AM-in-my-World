import React, {useState} from 'react';
import {useWrapperContext} from '../context/context'

export default function Ayu({size,dialogId}) {
    const value = useWrapperContext();
    const dialog = value.state.ayuDialog[dialogId];
    const dialog_tags = value.state.ayuDialogTags[dialogId];

    const [lineNum, setLineNum] = useState(0);

    const nextLine = () => {
        //Last Line of Dialog
        if(lineNum != dialog.length-1) {
            setLineNum(lineNum + 1);
        }

        if (dialog_tags[lineNum] != undefined) {
            switch(dialog_tags[lineNum][1]) {
                case "TEST" :
                    console.log("Test Function Worked")
                    break;
                case "TO_AVATAR" :
                    console.log("SHOULD GO TO AVATARS")
                    break;
                default:
                    break;
            }
        }
    }

    const getAyuSrc = () => {
        if (dialog_tags[lineNum] != undefined) {
            switch(dialog_tags[lineNum][0]) {
                case "HAPPY" :
                    return '/img/ayu/tempAyu_happy.png'
                default:
                    return '/img/ayu/tempAyu.png'
            }
        }
        return '/img/ayu/tempAyu.png'
    }

    const render = () => {
        
        const line = dialog[lineNum]
        
        return (
            <>
                <img 
                    src={getAyuSrc()}
                    style={{ width: size + 'px'}, {height: size + 'px'}}
                />
                <p>{line}</p>
                <button onClick={() => nextLine()}> NEXT LINE</button>

            </>
        );
    }

    return (
        <>
            {render()}
        </>
    );
}
 