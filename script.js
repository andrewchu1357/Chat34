async function askOllama() {
    const prompt = document.getElementById('prompt').value;
    const responseDiv = document.getElementById('response');
    responseDiv.innerText = 'Loading...';

    try {
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt })
        });
        const data = await response.json();
        responseDiv.innerText = data.response || 'No response from server.';
    } catch (error) {
        responseDiv.innerText = 'Error communicating with backend.';
    }
}
