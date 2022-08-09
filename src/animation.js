export default ()=>{
    let circle_block = document.querySelector('.circle-block')
    let circle = document.querySelector('.circle-block__circle')
    let window_weather = document.querySelector('.window-weather')
    let size_circle = circle_block.clientWidth
    
    let date = new Date().getSeconds();
    let rotate_day;
    let bool = false;
    let x = 0;
    let y = 0;
    
    x = ((window_weather.clientWidth-size_circle)/60)*date
    y = ((window_weather.clientHeight-size_circle)/60)*date 
    
    setInterval(()=>{
        date = new Date().getSeconds();
        rotate_day =date*6/3
        circle.style.rotate= `${rotate_day}deg`
        
        if(date<30){
            document.body.style.background = `linear-gradient(${rotate_day}deg,#fdb360 60%,#fbe5ad 80%, #feeff4 100%)`;
            circle.style.background = 'radial-gradient(circle farthest-corner at 50px 25px, #feeff4 80px, #fdb360)';
            window_weather.classList.remove('window-weather_font-day');
        }
        else{
            document.body.style.background = `linear-gradient(${rotate_day}deg,#130e44, #26205b ,#3257af ,#f9c5d8)`;
            circle.style.background = 'radial-gradient(circle farthest-corner at 50% 25%, #dde2e3 80px, #3257af)';
            window_weather.classList.add('window-weather_font-day');
        }
       
        if(y+size_circle < window_weather.clientHeight && bool === false){
            
            x+=((window_weather.clientWidth-size_circle)/60/20)
            y+=((window_weather.clientHeight-size_circle)/60/20)
            circle_block.style.transform = `translate(${x}px,${y}px)`;
        }
        
        if(y+size_circle >= window_weather.clientHeight){
            rotate_day = 0;
            bool = true;
        }
    
        if(bool === true && y >= 0) {
            
            x-=((window_weather.clientWidth+size_circle)/60/10)
            y-=((window_weather.clientHeight+size_circle)/60/10)
            circle_block.style.transform = `translate(${x}px,${y}px)`;
        }
        else {
            bool = false
           
        }
    },250)
}
