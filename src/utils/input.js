export default function Input(props){
    // const [onChange]
    var input = document.querySelector("input")
    console.log(input);
    // for (var i=0;i<input.length;i++){
    //     input[i].addEventListener('focus',show);
    //     input[i].addEventListener('focusout',hide);
    // }
    // function show(){
    //     // this.parentNode.classList.add('focused')
    //     console.log("jayu");
    // }
    // function hide(){
    //     console.log("jay");
    //     //if(this.value.length==0)
    //     // this.parentNode.classList.remove('focused')    
    // }

    return(
        <div className={`field ${props.className?props.className:""}`}>
            <input className="input" type={props.type} id={props.id} name={props.name} value={props.value} placeholder={props.placeholder} required={props.required || false} onChange={ props.onChange} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}