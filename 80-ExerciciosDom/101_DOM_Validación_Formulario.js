// export default function validacioForm(form){
//     const d = document,
//         $form = d.querySelector(form);
//         d.addEventListener('click',(e)=>{
//             const expRegName = new RegExp(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s'-]+$/),
//                 expRegEmail = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
//                 $divError  = d.createElement('div');
//                 $divError.classList.add('invalido')
//             e.preventDefault()
//             if(e.target.matches("#" + $form.ienviar.id)){
//                 if(!(expRegName.test($form.iname.value))){
//                     console.log('k')
//                 }
//                 if(!(expRegEmail.test($form.iemail.value))){
//                     console.log($form.iemail.value)
//                     console.log(`no`)
//                 }
//                 if($form.iabout.value === ''){
//                     console.log('no')
//                 }
//                 if($form.iareText.value.length > 5){
//                     console.log('ni')
//                 }
//             };
//         });
// };