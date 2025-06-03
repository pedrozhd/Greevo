window.watsonAssistantChatOptions = {
    integrationID: "87419f84-9625-4d74-a6fb-9c392a61b142",
    region: "au-syd",
    serviceInstanceID: "1f65f2c1-f96c-4614-96ca-e1a88a2f2749",
    
    
    theme: {
        primary: '#2E8B57',
        secondary: '#FFFFFF',
        background: '#F5F5F5',
        headerBackground: '#2E8B57',
        launcherBackground: '#2E8B57'
    },
    
    // Configurações de comportamento
    showLauncher: true,           // Mantém o botão padrão visível
    openChatByDefault: false,     // Não abre automaticamente
    onLoad: function(instance) {
        instance.render();
    }
};

// Carrega o script do Watson
setTimeout(function(){
    const t=document.createElement('script');
    t.src='https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js';
    document.head.appendChild(t);
});