const buttonAccordion = document.querySelector("#accordionButton");
const accordionButtonTwo = document.querySelector('#accordionButtonTwo')
const accordionButtonThree = document.querySelector('#accordionButtonThree')
const iconDown = document.querySelector('#iconCollapse');
const iconDownTwo = document.querySelector('#iconCollapseTwo');
const iconDownThree = document.querySelector('#iconCollapseThree');
const accordionParagraph = document.querySelector('#accordionParagraph')
const accordionParagraphTwo = document.querySelector('#accordionParagraphTwo')
const accordionParagraphThree = document.querySelector('#accordionParagraphThree')


accordion()


function accordion(){

    buttonAccordion.addEventListener('click', e=>{

        iconDown.classList.toggle('collapse')
        accordionParagraph.classList.toggle('active')
    })

    accordionButtonTwo.addEventListener('click', e=>{

        iconDownTwo.classList.toggle('collapse')
        accordionParagraphTwo.classList.toggle('active')
    })

    accordionButtonThree.addEventListener('click', e=>{

        iconDownThree.classList.toggle('collapse')
        accordionParagraphThree.classList.toggle('active')
    })

} 