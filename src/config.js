global.SALT_KEY = 'f5b9942-6054-4ca3-90f2-05e78e5761ef';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem-vindo'; // Não é o melhor meio de templete

module.exports = {
    connectionString: 'mongodb+srv://Gustavo:Gustavo@cluster0.gxstv.mongodb.net/API-NodeJs-Balta?retryWrites=true&w=majority',
    sendgridKey: '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', // enviar e-mail
    containerConnectionString: 'TBD' //imagens
}