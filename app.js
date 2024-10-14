// getelementbytagname\\\\\\\\\\\\\---it always return an array
const quote1 = document.getElementsByTagName("blockquote")[0];
const author1= document.getElementsByClassName("author")[0];
const newQuote=document.querySelector(".quote_btn");
const newtweet=document.querySelector(".tweet_btn");
const apilink = " https://quotes-api-self.vercel.app/quote";

//APi call -->Asynch and Await
let temp; /// global variable....
const getData=async()=>{
    const response=await fetch(apilink);
    const data= await response.json();
    //console.log(data);

    // console.log(data.author);
    // console.log(data.quote);
    temp=data.quote;
    quote1.innerText=data.quote;
    author1.innerText= data.author;

}
getData();

newQuote.addEventListener("click",()=>{
    getData();
})
// naya window open kr do...
// window.open(link,name,specification)
newtweet.addEventListener("click",()=>{
    window.open("https://twitter.com/intent/tweet?text="+ temp,"tweet post","width=400, height=400")

})



 


