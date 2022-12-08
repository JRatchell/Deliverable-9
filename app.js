
    function clr(){
            document.getElementById('screen').value='';
        }
    function solve(){
            let x=document.getElementById('screen').value
            let y = eval(x)
            document.getElementById('screen').value=y;
        }
    function display(val){
            document.getElementById('screen').value+=val;
        }
    
    
