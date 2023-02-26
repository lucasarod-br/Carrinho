/* import { redirect} from 'react-router-dom';


export function validateName() {

    
    const [value, setNome] = useState('');
    const [erro, setErro] = useState('');

    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  
    function handleNomeChange(event) {
        const valor = event.target.value;
        setNome(valor);
        if ( !nameRegex.test(valor)) {
          setErro('Nome inválido');
        } else {
          setErro('');
        }
      }
}    */