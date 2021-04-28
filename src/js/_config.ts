const params = {
    breakpoint:760,
    getPcSp:()=>{
        if (window.innerWidth <= params.breakpoint) {
            return 'sp';
        } else {
            return 'pc';
        }
    }
}



export {params};

