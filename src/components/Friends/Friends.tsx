import React from "react";
import { DialogsPageType} from "../../redux/store";

type FriendsPropsType = {
    dialogsPage: DialogsPageType
}

export const Friends = (props: FriendsPropsType) => {

    return (
        <div>
            {props.dialogsPage.dialog.map(f =>
                <div >
                    {f.name}
                </div>
            )}
        </div>
    )
}