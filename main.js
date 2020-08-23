document.addEventListener('DOMContentLoaded', init);

function init(){

    function tabFunc(param, tab){
        const tabs = document.querySelectorAll(`${param} .tabs-btn .${tab}`),
              tabsContent = document.querySelectorAll(`${param} .tab-content`),
              tabsParent = document.querySelector(`${param} .tabs-btn ul`);

        console.log(tabsContent)

        // Скрываем табы
        function hideTabContent(){
            tabsContent.forEach(element => {
                element.classList.add('hide')
            });

            tabs.forEach( element => {
                element.classList.remove('activ');
            })
        }

        // Показываем табы
        function showTabContent(i){
            tabsContent[i].classList.remove('hide')
            tabs[i].classList.add('activ')
        }


        hideTabContent();
        showTabContent(1);


        // Показываем при клике
        tabsParent.addEventListener('click', e => {
            const target = e.target;

            if(target && target.classList.contains(tab)){
                tabs.forEach( (item, i) => {
                    if(target == item){
                        hideTabContent();
                        showTabContent(i);
                    }
                })
            }
        })
    }


    if(document.querySelector('.tab-sputnic')){
        tabFunc('.tab-sputnic', 'tab');
    }
    if(document.querySelector('.tab-uslugi')){
        tabFunc('.tab-uslugi', 'tab-item');
    }
    










    // Меню
    const menu = document.querySelector('.header-nav_botton.header-nav_elem'),
          menuBtn = document.querySelector('.menu-btn');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('block');
        menuBtn.classList.toggle('fixit');
        menuBtn.classList.toggle('menu-btn_activ');

        if(window.innerWidth <= 480){
            document.querySelector('.lang').classList.toggle('langActiv');
        };

        document.querySelector('.cont_namber').classList.toggle('cont_namber__activ');
        
    })







    // Подменю
    if(window.innerWidth <= 768){
        document.querySelectorAll('.sub-menu').forEach( elem => {
            elem.classList.remove('sub-menu');
            elem.classList.add('sub-menu-mob');
        })
    }

    const btnSubMenu = document.querySelectorAll('.sub-menu-mob').forEach( elem => {
        elem.addEventListener('click', () => {
            console.log('a')
            elem.classList.toggle('sub-menu-mob_activ')
        })
    })

    


    document.addEventListener('dragstart', () => {
        console.log('ok')
        
    });



    const link = document.querySelectorAll('.link-tab .tab_elem');

    link.forEach( elem => {
        elem.addEventListener('click', () => {
            link.forEach( elem => {
                elem.classList.remove('activ');
            });
            elem.classList.add('activ');
        })
    })



}