const Variable = () => {
const saludo = "hola mundo"
const imagen = 'https://picsum.photos/500' 
const texto_alternativo = 'esto es una imagen de picsum'
    return(
        <>
            <h2>{saludo}</h2>
            <img src={imagen} alt = {texto_alternativo}/>
        </>

    );

}
export default Variable