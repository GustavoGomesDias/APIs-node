const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return jwt.sign(data, global.SALT_KEY, { expiresIn: '1d' });
    // 1d => tempo de expiração do token, no caso, 1 dia
};

exports.decodeToken = async (token) => {
    var data = await jwt.verify(token, global.SALT_KEY);
    return data;
};

exports.authorize = function (req, res, next) {
    // Serve como interceptador, usamos para definir o que o usuário pode ou não receber.
    var token = req.body.token || req.query.token || req.headers['x-access-token']; // Busca pelo token que pode vim por esses 3 lugares
    if(!token){
        res.status(401).json({
            message: 'Acesso Restrito.'
        });
    }else{
        jwt.verify(token, global.SALT_KEY, function (error, decoded){
            if(error){
                res.status(401).json({
                    message: 'Token inválido.'
                });
            }else{
                next(); // Da vasão na requisição
            }
        });
    }
};

exports.isAdmin = function (req, res, next){
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(!token){
        res.status(401).json({
            message: 'Acesso Restrito.'
        });
    }else{
        jwt.verify(token, global.SALT_KEY, function (error, decoded){
            if(error){
                res.status(401).json({
                    message: 'Token inválido.'
                });
            }else{
                if(decoded.roles.includes('admin')){
                    next();
                    // includes => olha se uma string está dentro do array
                }else{
                    res.status(403).json({
                        message: 'Esta funcionalidade é restrita para administradores.'
                    })
                }
            }
        });
    }
}
