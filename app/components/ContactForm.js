export function ContactForm(){
    const d = document,
        $form = d.createElement("form"),
        $style = d.getElementById("dynamic-styles");

        $form.classList.add("contact-form");
        $form.id = "contact-form";

        $style.innerHTML = `
        section form{
            --form-ok-color: green;
            --form-error-color:red;
            width: 80%;
            margin: auto;
        }
        section form >*{
            padding:5px 0;
            margin: 5px auto;
            width: 100%;
            font-family: Arial, Helvetica, sans-serif;
            text-align: left;
        }
        textarea{
            resize: none;
        }
        form legend,.contact-form-respo{
            text-align: center;
            font-weight: bolder;
            font-size: 1.3em;
        }
        .contact-form-load{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        form > input[type="submit"]{
            cursor: pointer;
            text-align: center !important;
            width: 50% !important;
            margin:auto;
        }

        form [required]:valid{
            border: 1px solid var(--form-ok-color);
        }
        form [required]:invalid{
            border: 1px solid  var(--form-error-color);
        }
        .contact-form-error{
            margin-top:-5px !important;
            font-size: 80%;
            background-color: var(--form-error-color);
            color: white;
            text-align: center !important;
            transition: all 800ms ease;
        }
        .is-active{
            display: block !important;
            animation: show-massage 1s 1 normal 0s ease-out both;
        }
        .none{
        display: none;
        }

        @keyframes show-massage {
            0%{
                visibility: hidden;
                opacity: 0;
            }
            100%{
                visibility:visible;
                opacity: 1;
            }
        }`
    $form.innerHTML = `
    <legend>Envianos tu Comentarios</legend>
    <label for="name">Nombre:</label>
    <input type="text" name="name"  title="El Nombre solo acepta letras y espacions en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
    <label for="email">Email:</label>
    <input type="email" name="email"  title="use un email vaildo" required>
    <label for="about">Assunto a tratar:</label>
    <input type="text" name="about" title="El Assuto es requerido" required>
    <textarea name="iareText" id="areaText" cols="50" rows="10" title="Tu Comentarios no deve exeder los 255 caracteres" placeholder="texto..." required data-pattern="^.{1,255}$" ></textarea>
    <input name="ienviar" id="enviar" value="Enviar" type="submit">
    <div class="contact-form-load none">
        <img src="img/circles.svg" alt="load">
    </div>
    <div class="contact-form-respo none">
        <p>Los datos han sidos enviados</p>
    </div>`;

    function validatiosForm(form){
        const $form = d.querySelector(form),
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
                    // console.log(pattern)
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
            const $load = d.querySelector('.loader'),
                $resposte = d.querySelector('.contact-form-respo');
                $load.classList.remove("none");
                // hacemos el codigo de la peticion de formualrio en el evento submit
            fetch("https://formsubmit.co/ajax/juliodev26@gmail.com",({
                method:"POST",
                body: new FormData(e.target) // el FormData parsea todos los elementos q tenga el formulario(e.targrt), importante lembrar que para funcionar el parseo todos los elementos del formulario tiene que tener el atributo (name="")
            })).then((res => res.ok?res.json():Promise.reject(res)))
            .then(json =>{
                $resposte.classList.remove("none");
                $resposte.querySelector("p").textContent = json.message;
                $load.classList.add("none");
                // console.log(json)
                $form.reset()

            })
            .catch(err => {
                console.log(err)
                $resposte.classList.remove('none');
                let errMsg = err.statusText || "Detectado";
                $resposte.querySelector('p').textContent = `Error: ${err.status} - ${errMsg}`})
            .finally(
                // usamos para limpiar el message de error o sucesso del la viewport
                setTimeout(()=>{$resposte.classList.add("none");},2000)
            )
        })
    };

    // Como estamos caragando um SPA single page application, los contenidos en el dom no existes al principio de su cargamento, pq sera caragado dinamicamente para podermos arreglar esto usamos el setTimeOut()

    setTimeout(()=> validatiosForm("#contact-form"),100)
   
    return $form;
}