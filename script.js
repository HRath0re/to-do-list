let flag=JSON.parse(localStorage.getItem('flag')) || 0;
    let content=JSON.parse(localStorage.getItem('content')) || '';
    document.querySelector('.list').innerHTML=content;

    function play(){
      const inputElem=document.querySelector('.input-field');
      const list=document.querySelector('.list');
      const list_contents=list.innerHTML;

      const text = inputElem.value.trim();
      
      if (!text) return;              // ignore empty
      else flag++;
      
      list.innerHTML=list_contents + `<div class='list_elem${flag}'><li class='list_item'> ${text} &emsp;&emsp;&emsp; <button class='priority' onclick="prior('.list_elem${flag}');">prioritize</button>&emsp;<button class='done' onclick="del('.list_elem${flag}','.br${flag}');">Done</button></li></div><br class='br${flag}'>`;   // update visible list
      
      
      document.querySelector(`.list_elem${flag}`).classList.add('litem');
      content=list.innerHTML;
      localStorage.setItem('content',JSON.stringify(content));  // store in local storage
      localStorage.setItem('flag',JSON.stringify(flag));
      document.getElementById("itemInput").value = "";  //or document.querySelector('.input-field').value='';
      inputElem.focus();
    }

    function del(ele,br_tag){
      const list=document.querySelector('.list');
      const list_contents=list.innerHTML;
      document.querySelector(ele).remove();
      document.querySelector(br_tag).remove();
      localStorage.setItem('content',JSON.stringify(list.innerHTML));  // store in local storage
      localStorage.setItem('flag',JSON.stringify(flag));

    }
    
    function prior(ele){
      if(!document.querySelector(ele).classList.contains('prioritized')){
        document.querySelector(ele).classList.add('prioritized');
      }else{
        document.querySelector(ele).classList.remove('prioritized');
      }
      const list=document.querySelector('.list');
      localStorage.setItem('content',JSON.stringify(list.innerHTML));  // store in local storage
    }
