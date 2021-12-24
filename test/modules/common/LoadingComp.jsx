import React from "react";
import  _ from "lodash"
import {RefreshIndicator} from "material-ui"

const styles ={
    refreshStyle:{
        position : 'relative',
        display : 'block',
        margin : '0 auto'
    }
}

 export const LoaderComponent = ({listloading,children}) => {
    if (isLoading){
        return(
            <RefreshIndicator style={styles.refreshStyle}
            top={0}
            left={0}
            side={80}
            status={'loading'}
            />  
        )
    }
    return children ? children : null
}