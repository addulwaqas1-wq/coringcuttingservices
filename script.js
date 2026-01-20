document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Toggle Chatbot
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.toggle('hidden');
        if (!chatbotWindow.classList.contains('hidden')) {
            chatbotInput.focus();
        }
    });

    chatbotClose.addEventListener('click', () => {
        chatbotWindow.classList.add('hidden');
    });

    // Send Message Logic
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message === '') return;

        // Add User Message
        addMessage(message, 'user');
        chatbotInput.value = '';

        // Simulate AI Thinking
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot');
        }, 600);
    }

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function addMessage(text, sender) {
        const div = document.createElement('div');
        div.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`;
        
        const bubble = document.createElement('div');
        bubble.className = sender === 'user' 
            ? 'bg-primary text-white p-2 rounded-lg rounded-tr-none shadow-sm max-w-[80%]' 
            : 'bg-white border border-gray-200 p-2 rounded-lg rounded-tl-none shadow-sm max-w-[80%]';
        
        bubble.textContent = text;
        div.appendChild(bubble);
        chatbotMessages.appendChild(div);
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getBotResponse(input) {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
            return "Hi there! How can I help you with your core cutting needs today?";
        }
        if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('quote')) {
            return "Our pricing depends on the scope of work. Please call us at +971 50 960 0595 for a free quote!";
        }
        if (lowerInput.includes('location') || lowerInput.includes('address') || lowerInput.includes('where')) {
            return "We are located in Mussafah 9, Abu Dhabi, UAE.";
        }
        if (lowerInput.includes('phone') || lowerInput.includes('contact') || lowerInput.includes('number')) {
            return "You can reach us at +971 50 960 0595.";
        }
        
        // Detailed Service Responses
        if (lowerInput.includes('core cutting')) {
            return "Our Core Cutting service offers precision circular drilling from 10mm to 1000mm diameter for HVAC, plumbing, and electrical needs. We handle thick walls and foundations with no vibration.";
        }
        if (lowerInput.includes('wall saw')) {
            return "Wall Sawing is perfect for precise openings in vertical surfaces like doors, windows, and elevator shafts. We can cut up to 700mm depth dust-free.";
        }
        if (lowerInput.includes('slab') || lowerInput.includes('floor saw')) {
            return "Our Slab/Floor Sawing service covers expansion joints, trenching, and bridge deck demolition using high-performance diesel or electric saws.";
        }
        if (lowerInput.includes('demolition')) {
            return "We provide Controlled Demolition using robotic equipment and non-explosive methods, ensuring safety and minimal disruption for partial removals.";
        }

        if (lowerInput.includes('service') || lowerInput.includes('work')) {
            return "We offer Core Cutting, Wall Sawing, Slab Cutting, and Controlled Demolition. Ask me about any specific service for more details!";
        }
        if (lowerInput.includes('email')) {
            return "Our email is luckystarequipmentrental@gmail.com";
        }
        
        return "I'm not sure about that. Please call us directly at +971 50 960 0595 for immediate assistance.";
    }
});
