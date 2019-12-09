for(let i=1; i<=5; i++){ /**use let instead of var to prevent all execution at once */
    setTimeout(function(){console.log(i);}, 1000)
}