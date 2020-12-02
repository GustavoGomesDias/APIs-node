let errors = [];

function ValidationContract(){
    errors = [];
}

ValidationContract.prototype.isRequired = (value, message) => {
    // Campo requerido
    if(!value || value.length <= 0){
        errors.push({ message: message});
    }
}

ValidationContract.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMaxLen = (value, max, message) => {
    // Máximo de tamanho
    if (!value || value.length > max)
        errors.push({ message: message });
}

ValidationContract.prototype.isFixedLen = (value, len, message) => {
    // Caso tenha um tamanho pré-definido
    if (value.length != len)
        errors.push({ message: message });
}

ValidationContract.prototype.isEmail = (value, message) => {
    // Validação prar email
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
}

ValidationContract.prototype.errors = () => { 
    // Retorno da lista de erors
    return errors; 
}

ValidationContract.prototype.clear = () => {
    // Limpa a lista de erris
    errors = [];
}

ValidationContract.prototype.isValid = () => {
    // Verifica se é valido ou não
    return errors.length == 0;
}

module.exports = ValidationContract;