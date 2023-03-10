export const isBold = (props) => {
    return props.bold ? "700" : "400"
}

export const setColor = (props) => {
    return props.color ? props.color : "#000"
}

export const setSize = (props) => {
    if (window.innerWidth <= 375) {
        return props.size ? props.size : "14"
    }
    else if (window.innerWidth <= 768) {
        return props.size ? props.size *1.08 : "14.8"
        
    }
    else if (window.innerWidth <= 1024) {
        return props.size ?  props.size * 1.16 : '15.5';
    }
    else {
        return props.size ?  props.size * 1.22 : '17';
    }
}