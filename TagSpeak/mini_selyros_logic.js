async function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const responseBox = document.getElementById("responseBox");

     try {
        const res = await fetch('https://gptworkdamnit-production.up.railway.app/api/chat', {
        method: 'POST',
         headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput })
         });

        const data = await res.json();
        responseBox.textContent = data.choices[0].message.content;
    } catch (err) {
        responseBox.textContent = "Error: " + err.message;
    }
}

function clearMessage(){
    document.getElementById("responseBox").innerHTML = "";
}