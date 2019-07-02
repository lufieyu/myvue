export default{
    setRem(){
        let winW = document.documentElement.clientWidth || document.body.clientWidth;
        let uiW = 320;
        document.getElementsByTagName('html')[0].style.fontSize=(winW/uiW)*100+'px';
    }
}