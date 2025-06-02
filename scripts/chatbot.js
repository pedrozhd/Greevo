 window.watsonAssistantChatOptions = {
        integrationID: "SEU_ASSISTANT_ID", // Substitua pelo seu Assistant ID
        region: "us-south",
        serviceInstanceID: "SEU_SERVICE_INSTANCE_ID", // Opcional para plano Lite
        onLoad: function(instance) { 
            instance.render(); 
            document.getElementById('chatbot-container').style.display = 'block';
        }
    };
    
    setTimeout(function(){
        const t=document.createElement('script');
        t.src='https://web-chat.global.assistant.watson.appdomain.cloud/versions/' + 
             (window.watsonAssistantChatOptions.clientVersion || 'latest') + 
             '/WatsonAssistantChatEntry.js';
        document.head.appendChild(t);
    });


document.getElementById('chatbot-button').addEventListener('click', function() {

    this.classList.add('borda');
    timeoutId = setTimeout(() => {
        this.classList.remove('borda');
    }, 500);

    const container = document.getElementById('chatbot-container');
    
    if (container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        if (!window.watsonAssistantChatLoaded) {
            window.watsonAssistantChatLoaded = true;
        }
        container.style.display = 'block';
    }
});