export function InfinteScroll(posts){
   const d = document,
    {scrollTop,scrollHeight,clientHeight} = d.documentElement,
      contPage = 0;
      
    
   d.addEventListener("scroll",()=>{
      // if(scrollTop + clientHeight + 10 >= scrollHeight){
      //   posts += `&per_page=10&page=${++contPage}`
        
      // }
      console.log(scrollHeight,scrollTop,clientHeight);
   })
   return posts
   
};