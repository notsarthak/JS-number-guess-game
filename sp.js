const messagediv=document.querySelector('#message');
const $wrongtemplate=document.querySelector('#wrong').innerHTML
const $correcttemplate=document.querySelector('#correct').innerHTML;
const inputform=document.querySelector('input');
const $losttemplate=document.querySelector('#lost').innerHTML;

let n;
let count=3;
if(count===3)
n=Math.floor(1+(Math.random()*10))

document.querySelector('form').addEventListener('submit',(e)=>{
	e.preventDefault();
	let iv=inputform.value;
	inputform.value='';
	if(iv==n)
	{	
		document.querySelector('#check').remove();
		const html=Mustache.render($correcttemplate);
		messagediv.innerHTML=html;
		document.querySelector('#wa').addEventListener('click',()=>{
			location.href='test.html'
		})
	}
	else
	{
		count--;
		if(count>0)
		{
			const html=Mustache.render($wrongtemplate,{attempt:count})
			messagediv.innerHTML=html;
		}
		else if (count===0) 
		{
			document.querySelector('#check').remove();
			const html=Mustache.render($losttemplate,{av:n});
			messagediv.innerHTML=html;
			document.querySelector('#la').addEventListener('click',()=>{
				location.href='test.html'
			})
		} 
	}
	//console.log(iv);
	//console.log(n)
	//console.log(count);
})
