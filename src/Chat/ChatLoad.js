const root = document.getElementById('root');
let oldVW=window.innerWidth;

function updateSize(){
    /*const main = document.getElementById('main');
    if (window.innerWidth <= 910 || window.innerHeight<=532) {
        if(root!=null) {
            root.style.setProperty('--mainHeight', '100vh');
            root.style.setProperty('--mainWidth', '100vw');
            if(window.innerWidth<=750){
                let newVW=window.innerWidth;
                let diff=newVW-oldVW;
                let newLeftWidth= parseInt(root.style.getPropertyValue('--listWidth'))+diff;
                oldVW=newVW;
                root.style.setProperty('--listWidth',newLeftWidth+'px');
            }
        }
        if(main!=null) {
            main.style.setProperty('left', '0');
            main.style.setProperty('top', '0');
        }

    } else {
        if(root!=null) {
            root.style.setProperty('--mainHeight', 'max(80vh, 500px)');
            root.style.setProperty('--mainWidth', 'max(80vw, 750px)');
            root.style.setProperty('--listWidth','400px');
        }
        if(main!=null) {
            main.style.setProperty('left', '10%');
            main.style.setProperty('top', '5%');
        }
    }*/
}

window.onresize = updateSize;

export default updateSize;
