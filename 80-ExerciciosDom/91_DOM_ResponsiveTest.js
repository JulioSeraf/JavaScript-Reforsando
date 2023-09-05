export default function responsiveTest(form){
    const d = document,
    $form = document.getElementById(form)
    let tester;

    d.addEventListener('submit', (e)=>{
        if(e.target === $form){
                e.preventDefault()
                tester = open($form.url.value, "tester",`innerWidth = ${$form.ancho.value}, innerHeight = ${$form.alto.value}`)
        }
    });
    d.addEventListener('click', e => {if(e.target === $form.cerrar) tester.close();});
};
