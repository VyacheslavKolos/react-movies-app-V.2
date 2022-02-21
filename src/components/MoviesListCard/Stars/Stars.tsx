import {FC, useState} from "react";
import {FaStar} from "react-icons/fa";

import './Stars.css'

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

interface IProps{
    vote_average:number
}

const Stars :FC<IProps>= ({vote_average}) => {
    const [currentValue, setCurrentValue] = useState<number>(Math.round(vote_average/2));
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
    console.log(vote_average);
    return (
        <div className={'containerr'}>
            <div className={'stars'}>
                {stars.map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={20}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            style={{
                                marginRight: 10,
                                cursor: "pointer"
                            }}
                        />
                    )
                })}
            </div>

        </div>
    );
}


const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
        width: 300
    },
    button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        padding: 10,
    }

};


export default Stars;