var header = document.getElementById('header')
var navigationH = document.getElementById('after_click')
    
var showSideBar = false
    
function SideBarAni(){
    showSideBar = !showSideBar;
    if(showSideBar){
    navigationH.style.display = 'block'
    navigationH.style.animationName = 'showSideBar'
    }
    else{
    navigationH.style.display   = 'none'
    }
    }

var il1 = document.getElementById('il1')
var il2 = document.getElementById('il2')
var il3 = document.getElementById('il3')
var il4 = document.getElementById('il4')
var il5 = document.getElementById('il5')

il1.style.borderBottomColor = '#01442e'

il1.addEventListener('click', () => {
    il1.style.borderBottomColor = '#01442e'
    il2.style.borderBottomColor = '#cce7de'
    il3.style.borderBottomColor = '#cce7de'
    il4.style.borderBottomColor = '#cce7de'
    il5.style.borderBottomColor = '#cce7de'
    il1.style.transition = '1.2s'

});

il2.addEventListener('click', () => {
    il1.style.borderBottomColor = '#cce7de'
    il2.style.borderBottomColor = '#01442e'
    il3.style.borderBottomColor = '#cce7de'
    il4.style.borderBottomColor = '#cce7de'
    il5.style.borderBottomColor = '#cce7de'
    il2.style.transition = '1.2s'

});

il3.addEventListener('click', () => {
    il1.style.borderBottomColor = '#cce7de'
    il2.style.borderBottomColor = '#cce7de'
    il3.style.borderBottomColor = '#01442e'
    il4.style.borderBottomColor = '#cce7de'
    il5.style.borderBottomColor = '#cce7de'
    il3.style.transition = '1.2s'

});

il4.addEventListener('click', () => {
    il1.style.borderBottomColor = '#cce7de'
    il2.style.borderBottomColor = '#cce7de'
    il3.style.borderBottomColor = '#cce7de'
    il4.style.borderBottomColor = '#01442e'
    il5.style.borderBottomColor = '#cce7de'
    il4.style.transition = '1.2s'

});

il5.addEventListener('click', () => {
    il1.style.borderBottomColor = '#cce7de'
    il2.style.borderBottomColor = '#cce7de'
    il3.style.borderBottomColor = '#cce7de'
    il4.style.borderBottomColor = '#cce7de'
    il5.style.borderBottomColor = '#01442e'
    il5.style.transition = '1.2s'

});

            