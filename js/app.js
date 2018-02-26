$(function () {
   let len = $('.container').length;
   function addImage(url,name) {
      let htmlContent = `<div class="container">
         <p class="name">Her name is ${name}</p>
            <img src=${url} alt="${name} picture" class="cat${len+1}">
            <p>You have click <span>0</span> times.</p>
      </div>`;
      $('body').append(htmlContent);
      len ++;
   }

   function selectCat() {
       const catslist = $('.listContain ul li');
       const contain = $('.container');
       $.each(catslist,function (i,value) {
           $(this).click(function () {
               $('.cat1')[0].parentNode.children[2].firstElementChild.innerHTML = 0;
               $(contain)[0].children[0].firstElementChild.innerHTML = cats[i].name;
               $(contain)[0].children[1].attributes[0].nodeValue = cats[i].url;
               clickNum('.cat1');
           });
       })
   }

   const cats = [
       {
          'name':'Jetske',
           'url':'../images/cat1Jetske.jpg'
       },
       {
          'name':'MikhailVasilyev',
           'url':'../images/cat2MikhailVasilyev.jpg'
       },
       {
          'name':'KariShea',
           'url':'../images/cat3KariShea.jpg'
       },
       {
          'name':'PactoVisual',
           'url':'../images/cat4PactoVisual.jpg'
       },
       {
          'name':'SabriTuzcu',
           'url':'../images/cat5SabriTuzcu.jpg'
       },
       {
          'name':'MarkoBlaze',
           'url':'../images/cat6MarkoBlazevic.jpg'
       }
   ];
   /*if(cats && cats.length > 0){
       for (let cat in cats){
           addImage(cats[cat].url,cats[cat].name);
       }
   }*/

   function clickNum(selector) {
      let num = 0;
      $(selector).click(function () {
         num ++;
         $(selector)[0].parentNode.children[2].firstElementChild.innerHTML = num;
      })
   }
   selectCat();
   clickNum('.cat1');
   /*for(let i = 0;i<len;i++){
      clickNum('.cat'+(i+1));
   }*/
});