window.addEventListener('DOMContentLoaded',()=>{
    let menuList = document.querySelectorAll('.menu-list ul li');
    menuList.forEach((list)=>{
        list.addEventListener('click',(item)=>{
            menuList.forEach((menu)=> menu.classList.remove('active'))
            //get the data-id value
            let target =  item.target;
            let id = target.getAttribute('data-id')
            let listContents = document.querySelectorAll('.list-content.active')
            listContents.forEach((content) =>{
                content.classList.remove('active')
            });
           let selected=  document.querySelector(`.list-content:nth-child(${id})`)
           target.classList.add('active')
            selected.classList.add('active');
        })
    } )
})