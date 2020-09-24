import React from "react";
import s from "./Description.module.scss";


type Description = {

}

export const Description = (props:Description) => {
    return (
        <div className={s.description}>
            <div>
                ava
            </div>
            <div>
                description
            </div>
        </div>
    )
}


