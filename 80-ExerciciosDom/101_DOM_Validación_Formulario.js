export default function validacioForm(form){
    const d = document,
        $form = d.querySelector(form),
        $input = d.querySelectorAll(form +' [required]');

        $input.forEach(input => {
            const $span = d.createElement('span');
            $span.id = input.name;
            $span.textContent = input.title;
            $span.classList.add('contact-form-error', 'none');
            input.insertAdjacentElement("afterend", $span);
        });
        d.addEventListener('keyup',(e)=>{
            const expRegEmail = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
            if(e.target.matches(form +' [required]')){
                const $input = e.target,
                    pattern = $input.pattern||$input.dataset.pattern;
                    console.log(pattern)
                if(pattern  && $input.value !== '' ){
                    let expReg = new RegExp(pattern);
                    !expReg.test($input.value)
                    ? d.getElementById($input.name).classList.add('is-active')
                    :d.getElementById($input.name).classList.remove('is-active')
                }
                if(!pattern){
                    $input.value === ''
                    ? d.getElementById($input.name).classList.add('is-active')
                    :d.getElementById($input.name).classList.remove('is-active')
                };
            };
        });

        d.addEventListener('submit',(e)=>{
            e.preventDefault();
            const $load = d.querySelector('.contact-form-load'),
                $resposte = d.querySelector('.contact-form-respo');
            $load.classList.remove('none');
            setTimeout(()=>{
                $load.classList.add('none');
                $resposte.classList.remove('none');
                $form.reset()
                setTimeout(()=>{
                    $resposte.classList.add('none');
                },3000)
            },3000)
        })
};