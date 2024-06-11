import http from 'http';

let htmlContent = `<div 
                        style="height:100%;
                            display:flex;
                            align-items:center;
                            justify-content:center;">
                        <p id="main-message"
                            style="color:blue;
                                    font-size:300%;">
                            Testando o Servidor
                        </p>
                    </div>`;

const script = `const updateColor = (updateState) => {
    if (updateState.frame >= 170) {
        updateState.value = -5;
    }
    else if (updateState.frame <= 10) {
        updateState.value = 5;
    }

    updateState.frame += updateState.value;
        document.getElementById('main-message')
            .style.color = 'rgb(10, ' + (180 - updateState.frame) + ', ' + (10 + updateState.frame) + ' )';
    };
                    
    const updateState = { frame: 10, value: 5};
    setInterval(() => updateColor(updateState), 30);`;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end(`<html>
                <body style="background-color:black">
                    <script>
                        ${script}
                    </script>
                    ${htmlContent}
                </body>
            </html>`);
});

let port = 3000;

server.listen(port, () => {
    console.log(`Server is now listening on http://localhost:${port}`);
});