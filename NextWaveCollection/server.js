// Server Side Operations

const http = require('http')
const filesys = require('fs')
const port = 8080

const requestHandler = function(request, response)
{
    console.log(request.url);

    var filename = "";
    if(http.request.url.length > 1)
    {
        filename = "." + http.request.url;
    }
    else
    {
        filename = "./index.html";
    }

    filesys.readFile(filename, function(error, file)
    {
        if(error)
        {
            if(error.code === 'ENOENT')
            {
                response.writeHead(404);
                response.end(error.message);
            }

            console.log("Error reading " + filename)
            response.writeHead(500, error.message)
            return;
        }

        response.end(file);
    })

} // End of requestHandler()

const server = http.createServer(requestHandler) // tie the function to the server

server.listen(port, function(err)
{
    if(err)
    {
        return console.log('something bad happened', err)
    }

    console.log('Server is listening on {' + port + '}')

})